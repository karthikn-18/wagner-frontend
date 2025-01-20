import React, { useState, useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanyWagnerImg from '../../assets/Resources/our-company-wagner.svg'
import { PiTarget } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import CarImage from '../../assets/Resources/car.png'
import MapImage from '../../assets/Resources/branch-map.png'
import { GoArrowUpRight } from "react-icons/go";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import TestiImg1 from '../../assets/Resources/test-img-1.jpg'
import TestiImg2 from '../../assets/Resources/test-img-2.jpg'
import TestiProfile from '../../assets/Resources/test-profile.jpg'
import LeaderShipImage from '../../assets/Resources/leadership-image.png'
import Brand1 from '../../assets/Resources/brand1.png'
import Brand2 from '../../assets/Resources/brand2.png'
import Brand3 from '../../assets/Resources/brand3.png'
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from '../../Components/Testimonials';
import WagnerProfileImage from '../../assets/Resources/new-wagner-image.jpg'
// Register the TextPlugin
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const About = () => {

    const lineRef = useRef(null);
    const carRef = useRef(null);


    useEffect(() => {
        const line = lineRef.current;
        const car = carRef.current;
        const icons = gsap.utils.toArray(".milestone-content .item .icon");

        // Total number of icons
        const totalIcons = icons.length;

        // Height of each segment (distance between two icons)
        const segmentHeight = line.clientHeight / totalIcons;

        // Animate the car
        gsap.to(car, {
            scrollTrigger: {
                trigger: line,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
            y: () => line.clientHeight - segmentHeight, // Moves the car along the line
        });

        // Progressive line color fill (from top to bottom)
        gsap.fromTo(
            line,
            { background: "linear-gradient(to bottom, #810A17 0%, #c0c0c0 0%)" }, // Initial gradient
            {
                background: "linear-gradient(to bottom, #810A17 100%, #c0c0c0 0%)", // Final gradient
                scrollTrigger: {
                    trigger: line,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            }
        );

        // Change icons' color and sync with car movement
        icons.forEach((icon, index) => {
            const iconTriggerPosition = segmentHeight * index; // Icon position on the line

            gsap.to(icon, {
                scrollTrigger: {
                    trigger: line,
                    start: `top+=${iconTriggerPosition} center`,
                    end: `top+=${iconTriggerPosition + segmentHeight} center`,
                    scrub: 1,
                },
                backgroundColor: "#810A17",
            });
        });
    }, []);




    const brandsettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10px",
    };



    useEffect(() => {
        const textElements = document.querySelectorAll('.typewriter-text'); // Select all elements

        textElements.forEach((textElement) => {
            const textContent = textElement.textContent;

            // Set the element's text to empty initially
            gsap.set(textElement, { text: '' });

            // Set up ScrollTrigger for each element
            ScrollTrigger.create({
                trigger: textElement,
                start: 'top bottom', // Trigger when the top of the element hits the bottom of the viewport
                onEnter: () => {
                    // Animate the text when the element comes into view
                    gsap.to(textElement, {
                        duration: 2, // Duration for typing effect
                        text: {
                            value: textContent, // Set the original text content
                            delimiter: '' // No delimiter, character by character
                        },
                        ease: 'none', // Steady typing speed
                    });
                }
            });
        });
    }, []);


    return (
        <>
            <div className="breadcrumb about-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h1 data-aos="fade-right">About <span>Us</span></h1>
                        <p data-aos="fade-left">Wagner German Oil: Excellence in Lubrication,
                            Delivering premium oils and lubricants that set the industry standard worldwide
                        </p>
                    </div>
                </div>
            </div>

            <div className="our-company space">
                <div className="container">
                    <div className="title-content title-content-all text-center" data-aos="fade-down">
                        <div className="sub-heading-dark">
                            <button>OUR COMPANY</button>
                        </div>
                        <div className="title">
                            <h1>At Wagner German Oil, we produce premium oils and lubricants that meet the #1 & highest industry standards. With decades of expertise, we deliver reliable, sustainable products that power machines and engines worldwide.</h1>
                        </div>
                    </div>
                    <div className="row our-company-content">
                        <div className="col-lg-5">
                            <div data-aos="zoom-in">
                                <div className="image" >
                                    <img src={CompanyWagnerImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="right-content">
                                <div data-aos="fade-left">
                                    <div className="item">
                                        <h2>Specialization:</h2>
                                        <p>We produce high-performance oils and lubricants for automotive and industrial applications.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="200">
                                    <div className="item">
                                        <h2>Industry Standards:</h2>
                                        <p>Our products meet the highest global standards for reliable performance.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="400">
                                    <div className="item">
                                        <h2>Expertise:</h2>
                                        <p>Decades of experience enable us to create innovative, high-quality products.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="600">
                                    <div className="item">
                                        <h2>Commitment:</h2>
                                        <p>We are dedicated to performance, reliability, and sustainability.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="800">
                                    <div className="item">
                                        <h2>Global Reach:</h2>
                                        <p>Our products serve customers worldwide, meeting diverse industry needs.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="1000">
                                    <div className="item">
                                        <h2>Impact:</h2>
                                        <p>Our oils improve efficiency, reduce wear, and extend equipment life globally.</p>
                                    </div>
                                </div>
                                <div className="cta" data-aos="fade-up">
                                    <div className="left">
                                        <p>Want to make an impact with us?</p>
                                    </div>
                                    <div className="title-btn">
                                        <div className="test-btn">
                                            <button>Let's Connect</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mission space" id='vision'>
                <div className="container">
                    <div className="title-content title-content-all text-center" data-aos="fade-down">
                        <div className="title text-white">
                            <h1>At Wagner German Oil, our Mission and Vision embody the core values and aspirations that drive our commitment to excellence and innovation in the lubrication industry.</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div data-aos="fade-down-right">
                                <div className="item">
                                    <div className="head">
                                        <div className="icon">
                                            <PiTarget />
                                        </div>
                                        <h2>MISSION</h2>
                                    </div>
                                    <div className="icon-overlay">
                                        <PiTarget />
                                    </div>
                                    <p>Wagner loves gear – new and old alike. We love preserving all kinds of machinery in order for it to last for a much longer time. This is the mission behind our products – because preserving is always the silver bullet to environmental protection. Combine it with the joy of functional gear and the cost savings and you know, what we mean.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div data-aos="fade-down-left">
                                <div className="item">
                                    <div className="head">
                                        <div className="icon">
                                            <PiHandshakeLight />
                                        </div>
                                        <h2>VISION FOR THE FUTURE</h2>
                                    </div>
                                    <div className="icon-overlay">
                                        <PiHandshakeLight />
                                    </div>
                                    <p>Envision a world where every machine—whether it powers your car, your factory, or
                                        your dreams—operates without the strain of wear and the pain of friction. At Wagner
                                        Oils, we refuse to accept imperfection. We are dedicated to creating a future where
                                        machines exist in their purest, most powerful state, effortlessly performing at their
                                        peak. In this world, every drop of Wagner oil does more than lubricate—it transforms.
                                        It ensures that machines not only function but thrive, evolve, and transcend
                                        limitations. With Wagner, machines achieve eternal endurance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="our-milestone space">
                <div className="container">
                    <div className="row">
                        <div className="main-title leftandrighttitle">
                            <div className="title-content  ">
                                <div className="sub-heading-dark">
                                    <button>OUR MILESTONE</button>
                                </div>
                                <div className="title">
                                    <h1><span>30+ Years of Success</span></h1>
                                    <h5>Celebrating over three decades of delivering top-tier lubrication solutions.</h5>
                                </div>
                            </div>
                            <div className="title-btn">
                                <div className="test-btn">
                                    <button>Partner with us</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="milestone-content">
                            <div className="item active">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>Now</h2>
                                    <p>Continuously innovating to meet the evolving needs of our global customers and industries.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>2024</h2>
                                    <p>Launched our products across 40+ countries and strategized for the upcoming future of vehicles.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>2014</h2>
                                    <p>Served more than 1 million customers, demonstrating our commitment to quality and customer satisfaction.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>2004</h2>
                                    <p>Expanded our market beyond Germany, reaching international customers and increasing our global presence.</p>
                                </div>
                            </div>
                            <div className="item final">
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>1994</h2>
                                    <p>Founded Wagner German Oil, establishing a foundation of quality and reliability in the lubrication industry.</p>
                                </div>
                            </div>
                            <div className="shapes">
                                <div className="line" ref={lineRef}></div>
                                <div className="car" ref={carRef}>
                                    <img src={CarImage} alt="Car" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="countries-worldwide space">
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="title" data-aos="fade-down">
                            <h1>Over <span>40+</span> Countries Worldwide</h1>
                        </div>
                    </div>
                    <div className="branch-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="image" data-aos="zoom-in">
                                    <img src={MapImage} alt="" />
                                </div>
                                <div className="content" data-aos="fade-right">
                                    <p>Our map showcases our presence in key regions around the world, enabling us to serve customers efficiently and meet diverse industry demands wherever they are. From Europe to Asia, the Americas to Africa, </p>
                                    <p>Wagner German Oil is strategically positioned to provide unparalleled support and distribution, ensuring that our premium lubricants are always within reach of those who need them most.</p>
                                    <div className="common-border-btn banner-btn">
                                        <button>Join with us<GoArrowUpRight className='icon' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="branch-items">
                                    <div data-aos="fade-left">
                                        <div className="item">
                                            <div className="title-head">
                                                <h1>Germany</h1>
                                                <div className="icon">
                                                    <PiPhoneCallLight />
                                                    <CiLocationOn />
                                                </div>
                                            </div>
                                            <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left">
                                        <div className="item">
                                            <div className="title-head">
                                                <h1>India</h1>
                                                <div className="icon">
                                                    <PiPhoneCallLight />
                                                    <CiLocationOn />
                                                </div>
                                            </div>
                                            <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left">
                                        <div className="item">
                                            <div className="title-head">
                                                <h1>USA</h1>
                                                <div className="icon">
                                                    <PiPhoneCallLight />
                                                    <CiLocationOn />
                                                </div>
                                            </div>
                                            <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left">
                                        <div className="item">
                                            <div className="title-head">
                                                <h1>UK</h1>
                                                <div className="icon">
                                                    <PiPhoneCallLight />
                                                    <CiLocationOn />
                                                </div>
                                            </div>
                                            <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left">
                                        <div className="item">
                                            <div className="title-head">
                                                <h1>Russia</h1>
                                                <div className="icon">
                                                    <PiPhoneCallLight />
                                                    <CiLocationOn />
                                                </div>
                                            </div>
                                            <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left">
                                        <div className="item">
                                            <div className="title-head">
                                                <h1>Africa</h1>
                                                <div className="icon">
                                                    <PiPhoneCallLight />
                                                    <CiLocationOn />
                                                </div>
                                            </div>
                                            <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left">
                                        <div className="item">
                                            <div className="title-head">
                                                <h1>Australia</h1>
                                                <div className="icon">
                                                    <PiPhoneCallLight />
                                                    <CiLocationOn />
                                                </div>
                                            </div>
                                            <p>WAGNER Spezialschmierstoffe GmbH & Co. KG, Speckbrodi 8 • 86759 Wechingen</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonial-section */}
            <div className="testimonial-section space">
                <div className="container">
                    <div className="title-content title-content-all text-center" data-aos="fade-down">
                        <div className="sub-heading-dark">
                            <button>TESTIMONIAL</button>
                        </div>
                        <div className="title">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                    </div>
                    <Testimonials />
                </div>
            </div>


            <div className="leadership-team space">
                <div className="container">
                    <div className="row">
                        <div className="main-title leftandrighttitle">
                            <div data-aos="fade-right">
                                <div className="title-content">
                                    <div className="sub-heading-dark">
                                        <button>LEADERSHIP TEAM</button>
                                    </div>
                                    <div className="title">
                                        <h1><span>Leading with Vision</span></h1>
                                        <h5>Committed to driving Wagner German Oil towards a sustainable and innovative future.</h5>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left">
                                <div className="title-btn">
                                    <div className="test-btn">
                                        <button>Join with us<GoArrowUpRight className='icon' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div data-aos="flip-right" data-aos-anchor-placement="top-center">
                                <div className="image">
                                    <img src={WagnerProfileImage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="right-content" data-aos="fade-left" data-aos-anchor-placement="top-center">
                                <h1>Walter Wagner</h1>
                                <h6>Founder, Developer, Expert in Lubricants & Fuels</h6>
                                <p>With over 30 years of experience in the lubrication industry, Walter Wagner has been the driving force behind Wagner German Oil’s commitment to quality and innovation. His expertise in developing high-performance oils and fuels has positioned the company as a leader in the global market. Walter's visionary leadership and dedication to sustainable practices have not only propelled the company’s growth but also set new benchmarks in the industry.</p>
                                <h5 className='span'>“Passion for excellence and a dedication to sustainability drive us to create lubricants that not only perform but also protect our planet.”</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* our brands */}

            <div className="our-brands">
                <div className="container">
                    <div className="title-content title-content-all text-center" data-aos="fade-down" data-aos-anchor-placement="top-center">
                        <div className="sub-heading-dark">
                            <button>AWARDS & CERTIFICATIONS</button>
                        </div>
                        <div className="title">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        </div>
                    </div>

                    <div className="brands-slider">
                        <Slider {...brandsettings} className='slider'>
                            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand3} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand3} alt="" />
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About