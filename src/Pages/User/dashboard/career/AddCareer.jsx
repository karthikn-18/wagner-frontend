import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { usePostJobMutation } from '../../../redux/features/career/CareerApi';

const AddCareer = () => {
    const [jobType, setJobType] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobHeadline, setJobHeadline] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [message, setMessage] = useState('');

    const [postJob, { isLoading }] = usePostJobMutation();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!jobRole || !jobHeadline || !jobType || !jobLocation || !jobDescription) {
            setMessage('Please fill all the required fields!');
            return;
        }

        const newJob = {
            jobTitle: jobRole,
            jobHeadline,
            jobType,
            jobLocation,
            jobDescription,
        };

        try {
            const response = await postJob(newJob).unwrap();
            alert('Job is posted successfully!');
            setJobRole('');
            setJobHeadline('');
            setJobType('');
            setJobLocation('');
            setJobDescription('');
            setMessage('Job posted successfully!');
            navigate('/dashboard/career-manage');
        } catch (error) {
            console.error('Failed to post job:', error);
            if (error.data) {
                setMessage(`Error: ${error.data.message || 'Unknown error occurred'}`);
            } else if (error.error) {
                setMessage(`Error: ${error.error || 'Unknown error occurred'}`);
            } else {
                setMessage('Error: Unknown error occurred');
            }
        }
    };

    return (
        <div className="add-career-form-sec dashboard-forms">
            <div className="head" style={{ padding: "50px 0px" }}>
                <h2>Create a New Career</h2>
                <Link to='/dashboard/career-manage' className='blog-page-switch'>Manage All Career</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row description-section">
                    <div className="col-lg-6">
                        <div className="form-content">
                            <label htmlFor="jobRole">Job Title*</label>
                            <input
                                type="text"
                                id="jobRole"
                                value={jobRole}
                                onChange={(e) => setJobRole(e.target.value)}
                                placeholder="Enter Job Title"
                                required
                            />
                        </div>
                        <div className="form-content">
                            <label htmlFor="jobHeadline">Job Headline*</label>
                            <input
                                type="text"
                                id="jobHeadline"
                                value={jobHeadline}
                                onChange={(e) => setJobHeadline(e.target.value)}
                                placeholder="Enter Job Headline"
                                required
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-content">
                            <label htmlFor="jobLocation">Location*</label>
                            <input
                                type="text"
                                id="jobLocation"
                                value={jobLocation}
                                onChange={(e) => setJobLocation(e.target.value)}
                                placeholder="Enter Job Location"
                                required
                            />
                        </div>
                        <div className="form-content">
                            <label htmlFor="jobType">Choose Job Type*</label>
                            <select
                                id="jobType"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select Job Type
                                </option>
                                <option value="Part-time-Remote">Part-time / Remote</option>
                                <option value="Part-time-On-site">Part-time / On-site</option>
                                <option value="Full-time-Remote">Full-time / Remote</option>
                                <option value="Full-time-On-site">Full-time / On-site</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-content">
                            <label htmlFor="jobDescription">Job Description*</label>
                            <textarea
                                id="jobDescription"
                                cols={4}
                                rows={6}
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                placeholder="Write Your Job Description"
                                required
                            />
                        </div>
                    </div>
                </div>

                {message && <p className="message">{message}</p>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Posting Job...' : 'Add New Job'}
                </button>
            </form>
        </div>
    );
};

export default AddCareer;
