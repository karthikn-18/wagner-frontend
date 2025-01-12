import React from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import BlogImage from "../../assets/Resources/blog-image.jpg"
import BlogOverviewImage from '../../assets/Resources/blog-overview.jpg'
import { CgCalendarDates } from "react-icons/cg";
import { PiShareFat } from "react-icons/pi";

const BlogOverview = () => {
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
                                        <img src={BlogOverviewImage} alt="" />
                                    </div>
                                </div>
                                <div className="main-contents">
                                    <div className="date-share" data-aos="fade-down">
                                        <div className="date item">
                                            <h5><CgCalendarDates className='icon' />19 Dec 2024</h5>
                                        </div>
                                        <div className="share item">
                                            <h5><PiShareFat className='icon' />Share</h5>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-down">
                                        <h1>Top 10 Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br />
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                                    <div className="col-lg-3">
                                        <div data-aos="fade-up">
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
                                    <div className="col-lg-3">
                                        <div data-aos="fade-up" data-aos-delay="200">
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
                                    <div className="col-lg-3">
                                        <div data-aos="fade-up" data-aos-delay="400">
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
                                    <div className="col-lg-3">
                                        <div data-aos="fade-up" data-aos-delay="600">
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
                </div>
            </div>


        </>
    )
}

export default BlogOverview