import React from 'react'
import BlogImage from "../../assets/Resources/blog-image-new.png"
import { CgCalendarDates } from "react-icons/cg";
import { PiShareFat } from "react-icons/pi";
import { useBlogsGetQuery } from '../../query/useQuery';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const Blog = () => {
    const { data, refetch } = useBlogsGetQuery();
    console.log(data, "data")
    return (
        <>
            <div className="breadcrumb privacypolicy-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h1 data-aos="fade-right">Blogs</h1>
                        <p data-aos="fade-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
            </div>


            <div className="blog-section">
                <div className="container">
                    <div className="latest-blog space">

                        <div className="row">
                            <div className="col-lg-6">
                                <div data-aos="zoom-in">
                                    <div className="image">
                                        <img src={BlogImage} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 right-side">
                                <div data-aos="fade-left">
                                    <div className="date-share">
                                        <div className="date item">
                                            {
                                                data?.data?.data[0]?.date &&
                                                <h5><CgCalendarDates className='icon' />{format(new Date(data?.data?.data[0]?.date), 'dd MMM yyyy')}</h5>
                                            }
                                        </div>
                                        <div className="share item">
                                            <h5><PiShareFat className='icon' />Share</h5>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h1>{data?.data?.data[0]?.title}</h1>
                                        <p>{data?.data?.data[0]?.description[0]}</p>
                                        <div className="common-btn">
                                            <a href={`/blog-overview/${data?.data?.data[0]?._id}`}>
                                                <button>Know more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="latest-blog related-blog">
                        <div className="sec-title" data-aos="fade-right">
                            <h1>Recent Blogs</h1>
                        </div>
                        <div className="blog-items">
                            <div className="row">
                                {
                                    data?.data?.data?.map((item, index) => (
                                        <div className="col-lg-3" key={index}>
                                            <Link to={`/blog-overview/${item?._id}`} className='text-decoration-none text-black'>
                                                <div data-aos="fade-up">
                                                    <div className="item">
                                                        <div className="image">
                                                            <img src={BlogImage} alt="" />
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
        </>
    )
}

export default Blog