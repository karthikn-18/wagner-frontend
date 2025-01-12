import React, { useState, useEffect } from 'react';
import { useGetJobApplicationsQuery, useDeleteApplicationMutation } from '../../../redux/features/career/CareerApi';
import { FaTrashCan } from "react-icons/fa6";
import axios from 'axios';
import { REACT_APP_BASE_URL_API } from '../../../env'

const CareerQuery = () => {
  const { data: applications = [], error, isLoading } = useGetJobApplicationsQuery();
  const [deleteApplication] = useDeleteApplicationMutation(); // Hook for deleting an application
  const [jobTitles, setJobTitles] = useState({});

  const handleDelete = async (applicationId) => {
    try {
      // Call the delete mutation
      await deleteApplication(applicationId).unwrap();
      console.log('Application deleted successfully');
    } catch (err) {
      console.error('Error deleting application:', err);
      if (err?.message) {
        console.error("Error message:", err.message);
      }
    }
  };

  useEffect(() => {
    const fetchJobTitles = async () => {
      const uniqueJobIds = [...new Set(applications.map((app) => app.jobId))];
      const titleMap = {};

      await Promise.all(
        uniqueJobIds.map(async (jobId) => {
          try {
            const response = await axios.get(`${REACT_APP_BASE_URL_API}/career/${jobId}`);
            titleMap[jobId] = response.data.title || 'Unknown Title';
          } catch (err) {
            console.error(`Error fetching title for jobId ${jobId}:`, err);
            titleMap[jobId] = 'Unknown';
          }
        })
      );

      setJobTitles(titleMap);
    };

    if (applications.length > 0) {
      fetchJobTitles();
    }
  }, [applications]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading applications</div>;

  return (
    <section className="add-career-form-sec dashboard-forms manage-post-dasgboard">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 manage-post-dasgboard-two">
        <div className="head" style={{ padding: '50px 0px' }}>
          <h2>Career Queries</h2>
        </div>
        <div className="block w-full overflow-x-auto table-contents">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr className="table-headings">
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Job Title</th>
                <th>Resume</th>
                <th>LinkedIn</th>
                <th>Applied At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((application, index) => (
                  <tr key={application._id} className="data-content-tables">
                    <td>{index + 1}</td>
                    <td>{application.name}</td>
                    <td>{application.email}</td>
                    <td>{application.phone}</td>
                    <td>{application.jobTitle}</td>
                    <td>
                      <a
                        href={`${application.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </td>
                    <td>
                      {application.linkedin ? (
                        <a
                          href={application.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn Profile
                        </a>
                      ) : (
                        'No LinkedIn URL'
                      )}
                    </td>
                    <td>{new Date(application.createdAt).toLocaleDateString()}</td>
                    <td>
                      {/* Delete button */}
                      <button
                        onClick={() => handleDelete(application._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashCan />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No applications found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CareerQuery;
