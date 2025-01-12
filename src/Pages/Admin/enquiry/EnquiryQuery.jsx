import React, { useEffect } from 'react';
import { useFetchEnquiriesQuery, useDeleteEnquiryMutation } from '../../../redux/features/enquiry/EnquiryApi'; // Update the import
import { Link } from 'react-router-dom';
import { BiSolidTrash } from "react-icons/bi";

const EnquiryQuery = () => {
  // Fetching enquiries from the API
  const { data: enquiries = [], error, isLoading, refetch } = useFetchEnquiriesQuery();
  const [deleteEnquiry] = useDeleteEnquiryMutation(); // Mutation hook for deleting enquiries

  const handleDelete = async (id) => {
    try {
      await deleteEnquiry(id); // Call the delete API
      refetch(); // Refetch the data to update the table
    } catch (error) {
      console.error('Error deleting enquiry:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching enquiries: {error.message}</div>;
  }

  // Create a new array with sorted enquiries
  const sortedEnquiries = [...enquiries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="add-enquiry-form-sec dashboard-forms manage-post-dasgboard">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 manage-post-dasgboard-two">
        <div className="head" style={{ padding: "50px 0px" }}>
          <h2>Enquiry Queries</h2>
          <Link to='/dashboard/enquiry-manage' className='blog-page-switch'>Go to Dashboard</Link>
        </div>
        <div className="block w-full overflow-x-auto table-contents">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr className="table-headings">
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">S.No.</th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Email</th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Message</th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Submitted At</th>
                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Action</th> {/* New Action Column */}
              </tr>
            </thead>
            <tbody>
              {sortedEnquiries.length > 0 ? (
                sortedEnquiries.map((enquiry, index) => (
                  <tr key={enquiry._id} className="data-content-tables">
                    <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">{index + 1}</td> {/* S.No. */}
                    <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">{enquiry.name}</td>
                    <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">{enquiry.email}</td>
                    <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">{enquiry.message}</td>
                    <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                    <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap delete-btn">
                      <button
                        onClick={() => handleDelete(enquiry._id)} // Trigger delete function
                        className="text-red-500 hover:text-red-700"
                      >
                        <BiSolidTrash />
                      </button>
                    </td> {/* Action Column */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No enquiries found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EnquiryQuery;
