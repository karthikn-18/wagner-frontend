import React from 'react'
import { useTestimonialsGetQuery } from '../query/useQuery'
import whyUsImg from '../assets/Resources/counter-image.jpg'
import TestiImg1 from '../assets/Resources/test-img-1.jpg'
import TestiImg2 from '../assets/Resources/test-img-2.jpg'
import TestiProfile from '../assets/Resources/test-profile.jpg'
const Testimonials = () => {
    const { data } = useTestimonialsGetQuery();
    console.log(data, "data", data?.data?.data)
    return (
        <div className="testimonial-content">
            <div className="row">
                {
                    data?.data?.data?.map((item, index) => (
                        <div className="col-lg-6">
                            <div className="item" data-aos="fade-up">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="image">
                                            <img src={item?.image.length ? item?.image : TestiImg2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="content">
                                            <div className="review">
                                                <span>“</span>
                                                <p>{item?.description}</p>
                                            </div>
                                            <div className="review-profile">
                                                <div className="profile">
                                                    <img src={TestiProfile} alt="" />
                                                </div>
                                                <div className="author">
                                                    <h5>{item?.author}</h5>
                                                    <p>{item?.designation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* <div className="col-lg-6">
                    <div className="item" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="image">
                                    <img src={TestiImg2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="content">
                                    <div className="review">
                                        <span>“</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                    <div className="review-profile">
                                        <div className="profile">
                                            <img src={TestiProfile} alt="" />
                                        </div>
                                        <div className="author">
                                            <h5>Jake Smith</h5>
                                            <p>CEO, Google</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Testimonials