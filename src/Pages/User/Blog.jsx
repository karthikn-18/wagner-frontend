import React from 'react'
import BlogImage from "../../assets/Resources/blog-image.jpg"
import { CgCalendarDates } from "react-icons/cg";
import { PiShareFat } from "react-icons/pi";

const Blog = () => {
    return (
        <>
            <div className="breadcrumb privacypolicy-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h1>Blogs</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
            </div>


            <div className="blog-section">
                <div className="container">
                    <div className="latest-blog space">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img src={BlogImage} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 right-side">
                                <div className="date-share">
                                    <div className="date item">
                                        <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                    </div>
                                    <div className="share item">
                                        <h5><PiShareFat className='icon' />Share</h5>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                    <div className="common-btn">
                                        <a href="/blog-overview">
                                            <button>Know more</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="latest-blog related-blog">
                        <div className="sec-title">
                            <h1>Recent Blogs</h1>
                        </div>
                        <div className="blog-items">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="item">
                                        <div className="image">
                                            <img src={BlogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="date-share">
                                                <div className="date item">
                                                    <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                                </div>
                                                <div className="share item">
                                                    <h5><PiShareFat className='icon' />Share</h5>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog