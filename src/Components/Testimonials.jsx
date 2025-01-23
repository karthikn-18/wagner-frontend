import React from 'react';
import { useTestimonialsGetQuery } from '../query/useQuery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestiImg2 from '../assets/Resources/test-img-2.jpg';
import TestiProfile from '../assets/Resources/test-profile.jpg';

const Testimonials = () => {
    const { data } = useTestimonialsGetQuery();
    console.log(data, "data", data?.data?.data);

    const settings = {
        dots: false,          // Hides navigation dots
        infinite: true,       // Enables infinite looping
        speed: 500,           // Adjusted speed for smoother transition (500ms)
        slidesToShow: 2,      // Show two slides at a time
        slidesToScroll: 1,    // Scroll two slides at a time
        autoplay: true,       // Enables auto-slide
        autoplaySpeed: 3000,  // Slide change interval (3 seconds)
        cssEase: "ease-in-out", // Smooth animation curve
    };

    return (
        <div className="testimonial-content">
            <Slider {...settings} className="slider">
                {data?.data?.data?.map((item, index) => (
                    <div className="item" data-aos="fade-up" key={index}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="image">
                                    <img src={item?.image?.length ? item?.image : TestiImg2} alt="" />
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
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
