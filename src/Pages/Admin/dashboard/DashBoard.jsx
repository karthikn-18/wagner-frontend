import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RiBloggerLine } from "react-icons/ri";
import { useFetchBlogsQuery } from "../../../redux/features/blogs/blogsApi"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Dashboard = () => {
    const [query, setQuery] = useState({ search: '', category: '' })
    const { user } = useSelector((state) => state.auth);
    // Fetch blogs using the custom query
    const { data: blogs = [], isLoading, isError, error } = useFetchBlogsQuery(query);
    return (
        <div className='dashboard-page'>
            {isLoading && (<div>Loading.... </div>)}
            <div className="container">
                <div className="title">
                    <h1>Welcome to Admin Dashboard</h1>
                    <div className="image">
                        <DotLottieReact
                            src="https://lottie.host/534d68d7-bfb8-4ccd-999a-87b6fbd0f295/BMbgWPZs6S.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-lg-4">
                    <div className="box-item">
                        <div className="icon">
                            <RiBloggerLine />
                        </div>
                        <p>{blogs.length} {blogs.length === 1 ? 'Blog' : 'Blogs'}</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Dashboard



