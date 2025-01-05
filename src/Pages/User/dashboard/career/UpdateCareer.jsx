import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchJobsQuery, usePostJobMutation, useDeleteJobMutation, useUpdateJobMutation } from '../../../redux/features/career/CareerApi';

const UpdateCareer = () => {
  const { id } = useParams(); // get career id from URL
  const { data: career, error, isLoading } = useFetchJobsQuery();
  const [jobTitle, setJobTitle] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobHeadline, setJobHeadline] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [message, setMessage] = useState('');

  const [updateJob] = useUpdateJobMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (career) {
      const currentJob = career.find((item) => item._id === id);
      if (currentJob) {
        setJobTitle(currentJob.jobTitle);
        setJobLocation(currentJob.jobLocation);
        setJobHeadline(currentJob.jobHeadline);
        setJobType(currentJob.jobType);
        setJobDescription(currentJob.jobDescription);
      }
    }
  }, [career, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobTitle || !jobLocation || !jobHeadline || !jobType || !jobDescription) {
      setMessage('All fields are required.');
      return;
    }

    const updatedJob = {
      jobTitle,
      jobLocation,
      jobHeadline,
      jobType,
      jobDescription,
    };

    try {
      const response = await updateJob({ id, ...updatedJob }).unwrap();  // Using unwrap for proper error handling
      console.log('Job updated successfully:', response);
      alert('Job updated successfully!');
      navigate('/dashboard/career-manage');
    } catch (err) {
      console.error('Error updating job:', err);
      setMessage('There was an error updating the job.');
    }
  };


  return (
    <div className="add-career-form-sec dashboard-forms">
      <div className="head">
        <h2>Manage Career Posts</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row description-section">
          <div className="col-lg-6">
            <div className="form-content">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-content">
              <label htmlFor="jobLocation">Job Location</label>
              <input
                type="text"
                id="jobLocation"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-content">
              <label htmlFor="jobHeadline">Job Headline</label>
              <input
                type="text"
                id="jobHeadline"
                value={jobHeadline}
                onChange={(e) => setJobHeadline(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-content">
              <label htmlFor="jobType">Job Type</label>
              <select
                id="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                required
              >
                <option value="Part-time-Remote">Part-time / Remote</option>
                <option value="Part-time-On-site">Part-time / On-site</option>
                <option value="Full-time-Remote">Full-time / Remote</option>
                <option value="Full-time-On-site">Full-time / On-site</option>
              </select>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-content">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Update Job'}
          </button>
        </div >
      </form >
    </div >
  );
};

export default UpdateCareer;
