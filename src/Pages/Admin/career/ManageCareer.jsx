import React, { useState } from 'react';
import { usePostJobMutation, useDeleteJobMutation, useFetchJobsQuery } from '../../../redux/features/career/CareerApi';
import { formatDate } from '../../../utilis/FormatDate';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { BiSolidTrash } from "react-icons/bi";

const ManageCareer = () => {
  const [query, setQuery] = useState({ search: '', category: '' });
  const { data: careers = [], error, isLoading, refetch } = useFetchJobsQuery(query);
  const [deleteCareer] = useDeleteJobMutation();

  const handleDelete = async (id) => {
    try {
      console.log("Deleting career post with ID:", id);
      const response = await deleteCareer(id).unwrap();
      console.log("Delete response:", response);
      alert(response.message || "Career post deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Failed to delete career post:", error);
      alert("Failed to delete career post. Please try again.");
    }
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <section className="add-career-form-sec dashboard-forms manage-post-dasgboard">
        <div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 manage-post-dasgboard-two">
            <div className="head" style={{ padding: "10px 0px" }}>
              <div className="title">
                <h2>Manage All Career Posts</h2>
              </div>
              <div className="btns">
                <Link to='/dashboard/career-query' className='blog-page-switch'>Career Queries</Link>
                <Link to='/dashboard/career-add' className='blog-page-switch'>Create a New Career</Link>
              </div>
            </div>

            <div className="block w-full overflow-x-auto table-contents">
              <table className="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr className="table-headings">
                    <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Job Title
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Job Headline
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Job Posted At
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Job Description
                    </th>
                    <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[...careers] // Create a shallow copy of the careers array
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort careers by createdAt in descending order
                    .map((career, index) => (
                      <tr key={career._id} className="data-content-tables">
                        <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                          {career.jobTitle}
                        </td>
                        <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                          {career.jobHeadline.split(' ').slice(0, 10).join(' ')}{career.jobHeadline.split(' ').length > 10 && '...'}
                        </td>
                        <td className="border-t-0 align-center border-l-0 border-r-0 text-xs whitespace-nowrap">
                          {formatDate(career.createdAt)}
                        </td>
                        <td className="border-t-0 align-center border-l-0 border-r-0 text-xs whitespace-nowrap">
                          {career.jobDescription.split(' ').slice(0, 10).join(' ')}{career.jobDescription.split(' ').length > 10 && '...'}
                        </td>
                        <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 delete-btn">
                          <button onClick={() => handleDelete(career._id)}><BiSolidTrash /></button>
                        </td>
                      </tr>
                    ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageCareer;
