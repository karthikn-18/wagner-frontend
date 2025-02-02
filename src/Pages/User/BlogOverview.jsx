import React, { useEffect } from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import BlogImage from "../../assets/Resources/blog-image.jpg"
import BlogOverviewImage from '../../assets/Resources/blog-overview.jpg'
import { CgCalendarDates } from "react-icons/cg";
import { PiShareFat } from "react-icons/pi";
import { useBlogsByIdGetQuery, useBlogsGetQuery } from '../../query/useQuery';
import { Link, useLocation, useParams } from 'react-router-dom';
import { format } from 'date-fns';

const BlogOverview = () => {
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params]);
    console.log(params?.id, "params")
    const { data, refetch } = useBlogsGetQuery();
    const { data: blog } = useBlogsByIdGetQuery(params?.id);

    let recentBlogs = data?.data?.data?.filter((item) => item?._id !== params?.id);
    console.log(blog, "blog")

    return (
        <>
            <div className="blog-overview space ">
                <div className="blog-section">
                    <div className="container">
                        <div className="back" data-aos="fade-right">
                            <button><a href="/blog"><MdKeyboardBackspace />Back</a></button>
                        </div>
                        <div className="latest-blog overview">
                            <div className="row">
                                <div data-aos="zoom-in">
                                    <div className="image">
                                        <img src={blog?.data?.data?.image} alt="" />
                                    </div>
                                </div>
                                <div className="main-contents">
                                    <div className="date-share" data-aos="fade-down">
                                        <div className="date item">
                                            {
                                                blog?.data?.data?.date &&
                                                <h5><CgCalendarDates className='icon' />{format(new Date(blog?.data?.data?.date), 'dd MMM yyyy')}</h5>
                                            }
                                        </div>
                                        <div className="share item">
                                            <h5><PiShareFat className='icon' />Share</h5>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-down">
                                        <h1>{blog?.data?.data?.title}</h1>
                                        {
                                            blog?.data?.data?.description.map((item) => (
                                                <>
                                                    <p>{item}</p><br />
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="latest-blog related-blog space">
                            <div className="sec-title" data-aos="fade-right">
                                <h1>Recent Blogs</h1>
                            </div>
                            <div className="blog-items">
                                <div className="row">
                                    {
                                        recentBlogs?.map((item, index) => (
                                            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                                <Link to={`/blog-overview/${item?._id}`} scrollToTop className='text-decoration-none text-black'>
                                                    <div data-aos="fade-up">
                                                        <div className="item">
                                                            <div className="image">
                                                                <img src={item?.image} alt="" />
                                                            </div>
                                                            <div className="blog-content">
                                                                <div className="date-share">
                                                                    <div className="date item">
                                                                        {
                                                                            item?.date &&
                                                                            <h5><CgCalendarDates className='icon' />{format(new Date(item?.date), 'dd MMM yyyy')}</h5>
                                                                        }
                                                                    </div>
                                                                    <div className="share item">
                                                                        <h5><PiShareFat className='icon' />Share</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="blog-content">
                                                                    <h1>{item?.title}</h1>
                                                                    <p>{item?.description[0].slice(0, 150)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BlogOverview