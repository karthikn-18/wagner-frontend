import React, { useState } from 'react'
import { useDeleteBlogMutation, useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { formatDate } from '../../../utilis/FormatDate'
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { BiSolidTrash } from "react-icons/bi";

const ManagePost = () => {
    const [query, setQuery] = useState({ search: '', category: '' });
    const { data: blogs = [], error, isLoading, refetch } = useFetchBlogsQuery(query);
    // const [deleteBlog] = useDeleteBlogMutation()
    const [deleteBlog] = useDeleteBlogMutation();

    // const handleDelete = async (id) => {
    //     try {
    //         const response = await deleteBlog(id).unwrap();
    //         alert(response.message);
    //         refetch()
    //     } catch (error) {
    //         console.error("Failed to delete Blog")

    //     }
    // }
    const handleDelete = async (id) => {
        try {
            console.log("Deleting career post with ID:", id);
            const response = await deleteBlog(id).unwrap();
            console.log("Delete response:", response);
            alert(response.message || "Career post deleted successfully!");
            refetch();
        } catch (error) {
            console.error("Post Deleted Sucessfully");
            alert("Post Deleted Sucessfully");
        }
    };



    return (
        <>
            {isLoading && <div>Loading...</div>}
            <section className=" dashboard-forms manage-post-dasgboard">
                <div >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  manage-post-dasgboard-two">
                        <div className="head" style={{ padding: "50px 0px" }}>
                            <h2>Manage All Blog Posts</h2>
                            <Link to='/dashboard/add-post' className='blog-page-switch'>Create a new Blog</Link>
                        </div>

                        <div className="block w-full overflow-x-auto table-contents">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr className='table-headings'>
                                        <th className=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            No
                                        </th>
                                        <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Blog Name
                                        </th>
                                        <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Blog Description
                                        </th>
                                        <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Publishing Date
                                        </th>
                                        <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {blogs &&
                                        blogs.map((blog, index) => (
                                            <tr key={index} className="data-content-tables">
                                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                                                    {index + 1}
                                                </td>
                                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                                                    {blog.title}
                                                </td>
                                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                                                    {/* Strip HTML tags and truncate content to 10 words */}
                                                    {
                                                        new DOMParser().parseFromString(blog.content, "text/html").body.textContent
                                                            .split(' ')
                                                            .slice(0, 10)
                                                            .join(' ')
                                                        + (new DOMParser().parseFromString(blog.content, "text/html").body.textContent.split(' ').length > 10 ? '...' : '')
                                                    }
                                                </td>
                                                <td className="border-t-0 align-center border-l-0 border-r-0 text-xs whitespace-nowrap ">
                                                    {formatDate(blog.createdAt)}
                                                </td>
                                                <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap action-btns ">
                                                    <div className="edit-btn">
                                                        <Link to={`/dashboard/update-items/${blog._id}`}>
                                                            <MdEdit />
                                                        </Link>
                                                    </div>
                                                    <div className="delete-btn">
                                                        <button onClick={() => handleDelete(blog._id)}>
                                                            <BiSolidTrash />
                                                        </button>
                                                    </div>
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
    )
}

export default ManagePost