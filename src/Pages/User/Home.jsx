import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowUpRight } from "react-icons/go";
import VehicleIcon1 from '../../assets/Resources/vehicle1.svg'
import VehicleIcon2 from '../../assets/Resources/vehicle2.svg'
import VehicleIcon3 from '../../assets/Resources/vehicle3.svg'
import VehicleIcon4 from '../../assets/Resources/vehicle4.svg'
import VehicleIcon5 from '../../assets/Resources/vehicle5.svg'
import VehicleIcon6 from '../../assets/Resources/vehicle6.svg'
import VehicleIcon7 from '../../assets/Resources/vehicle7.svg'
import VehicleIcon8 from '../../assets/Resources/vehicle8.svg'
import VehicleIcon9 from '../../assets/Resources/vehicle9.svg'
import VehicleIcon10 from '../../assets/Resources/vehicle10.svg'
import Ellipse1 from '../../assets/Resources/ellipse-1.png'
import Ellipse2 from '../../assets/Resources/ellipse-2.png'
import { IoIosArrowForward } from "react-icons/io";
import { TbFileDownload } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import ProductImage from '../../assets/Resources/oil-product-1.png'
import Product1 from '../../assets/Resources/5w-30.png'
import Product2 from '../../assets/Resources/product2.png'
import Product3 from '../../assets/Resources/product3.png'
import Product4 from '../../assets/Resources/product4.png'
import whyUsImg from '../../assets/Resources/counter-image.jpg'
import TestiImg1 from '../../assets/Resources/test-img-1.jpg'
import TestiImg2 from '../../assets/Resources/test-img-2.jpg'
import TestiProfile from '../../assets/Resources/test-profile.jpg'
import Brand1 from '../../assets/Resources/brand1.png'
import Brand2 from '../../assets/Resources/brand2.png'
import Brand3 from '../../assets/Resources/brand3.png'
import CtaRight from '../../assets/Resources/cta-right.png'
import MadeInGermany from '../../assets/Resources/made-in-germany.webp'
import TechDriven from '../../assets/Resources/tech-driven.jpg'
import TechSupport from '../../assets/Resources/tech-support.jpg'
import LabSupport from '../../assets/Resources/lab-support.jpg'
import CtaWagner from '../../assets/Resources/cta-wagner.png'

const Home = () => {

    // State to manage the visibility of the filter dropdown
    const [isFilterActive, setFilterActive] = useState(false);

    // Toggle function to show/hide the filter dropdown
    const toggleFilter = () => {
        setFilterActive(!isFilterActive);
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const brandsettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px", // Set padding to 0 for perfect centering
        responsive: [
            {
                // For screens below 1200px
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px", // Ensure no padding for proper alignment
                },
            },
            {
                // For screens below 992px
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                // For screens below 768px
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                // For screens below 576px
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
        ],
    };


    return (
        <>
            {/* banner section */}
            <div className="banner-section">
                <Slider {...settings} className='slider'>
                    <div className='banner-4'>
                        <div className="container">
                            <div className="banner-contents">
                                <h5>UNLOCK THE WORLD OF</h5>
                                <h1>Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p>Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn">
                                    <a href="/products">
                                        <button className='fontSize16 fontWeight300'>Explore Products<GoArrowUpRight className='icon' /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-3'>
                        <div className="container">
                            <div className="banner-contents">
                                <h5>UNLOCK THE WORLD OF</h5>
                                <h1>Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p>Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn">
                                    <a href="/products">
                                        <button className='fontSize16 fontWeight300'>Explore Products<GoArrowUpRight className='icon' /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-1'>
                        <div className="container">
                            <div className="banner-contents">
                                <h5>UNLOCKING THE WORLD OF</h5>
                                <h1>Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p>Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn">
                                    <a href="/products">
                                        <button className='fontSize16 fontWeight300'>Explore Products<GoArrowUpRight className='icon' /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-2'>
                        <div className="container">
                            <div className="banner-contents">
                                <h5>UNLOCK THE WORLD OF</h5>
                                <h1>Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p>Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn">
                                    <a href="/products">
                                        <button className='fontSize16 fontWeight300'>Explore Products<GoArrowUpRight className='icon' /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="container select-vehicle-container">
                    <div className="select-vehicle">
                        <div className="sub-heading-dark">
                            <button>SELECT YOUR VEHICLE</button>
                        </div>
                        <div className="vehicle-category">
                            <div className="item">
                                <a href="/application-cars">
                                    <div className="icon first">
                                        <img src={VehicleIcon1} alt="" />
                                        <p>Cars</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-motorcycle">
                                    <div className="icon">
                                        <img src={VehicleIcon2} alt="" />
                                        <p>Motorcycle</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-classic">
                                    <div className="icon">
                                        <img src={VehicleIcon3} alt="" />
                                        <p>Classic</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-offroad">
                                    <div className="icon">
                                        <img src={VehicleIcon4} alt="" />
                                        <p>Off-road</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-tuning">
                                    <div className="icon">
                                        <img src={VehicleIcon5} alt="" />
                                        <p>Tuning</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-motorcycle">
                                    <div className="icon">
                                        <img src={VehicleIcon6} alt="" />
                                        <p>Motorsport</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-truck">
                                    <div className="icon">
                                        <img src={VehicleIcon7} alt="" />
                                        <p>Truck</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-boat">
                                    <div className="icon">
                                        <img src={VehicleIcon8} alt="" />
                                        <p>Boat</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-ship">
                                    <div className="icon">
                                        <img src={VehicleIcon9} alt="" />
                                        <p>Ship</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/application-aviation">
                                    <div className="icon">
                                        <img src={VehicleIcon10} alt="" />
                                        <p>Aviation</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* about section */}
            <div className="about-section space">
                <div className="container">
                    <div className="title-content">
                        <div className="sub-heading-dark">
                            <button>ABOUT US</button>
                        </div>
                        <div className="title">
                            <h1>Wagner Oils is more than a brand—
                                it’s a legacy of innovations, Quality,
                                and excellence.
                            </h1>
                        </div>
                        <div className="right">
                            <h6>Vision for the Future</h6>
                            <p>Creating a future where machines achieve eternal endurance and thrive through
                                Wagner's superior lubrication.</p>
                            <div className="common-btn">
                                <a href="/about">
                                    <button>Know more</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="counter-section">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="box box-1">
                                    <div className="years-in-industry">
                                        <span>Over</span>
                                        <h1>30+</h1>
                                    </div>
                                    <h6>Years in Industry</h6>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box box-2">
                                    <h1>#1</h1>
                                    <p>We specialize in advanced lubrication technology, providing high-quality oils and lubricants trusted worldwide by industries, automotive enthusiasts, and professionals for their reliability, performance, and eco-friendly formulations.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box box-3">
                                    <h6>Active across</h6>
                                    <div className="years-in-industry">
                                        <h1>40+</h1>
                                        <span>Countries Globally</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box box-4">
                                    <div className="icon">
                                        <a href="/products" style={{ color: "#fff" }}>
                                            <GoArrowUpRight />
                                        </a>
                                    </div>
                                    <h6><span>9+</span> Categories</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shapes">
                    <div className="shape1">
                        <img src={Ellipse1} alt="" />
                    </div>
                    <div className="shape2">
                        <img src={Ellipse2} alt="" />
                    </div>
                </div>
            </div>

            {/* product section */}
            <div className="product-section smoke-bg space">
                <div className="container">
                    <div className="title-content title-content-all">
                        <div className="sub-heading-dark">
                            <button>OUR LINEUPS</button>
                        </div>
                        <div className="title">
                            <h1>High-performance formulations engineered to boost engine efficiency and
                                extend your vehicle’s lifespan.</h1>
                        </div>
                    </div>
                    <div className="product-showcase">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="product-menu-wrapper">
                                    {/* Desktop View */}
                                    <div className="product-menu d-none d-lg-block">
                                        <ul>
                                            <li><NavLink className="activeTab">Automotive Oils</NavLink><IoIosArrowForward className="activeTab" /></li>
                                            <li><NavLink>Classic Oils</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>Industrial Lubricants</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>High-tech Additives</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>Aviation</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>Tank Restoration</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>Technical Sprays</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>Greases & Pastes</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>Specialty Products</NavLink><IoIosArrowDown /></li>
                                            <li><NavLink>Cleaning & Care</NavLink><IoIosArrowDown /></li>
                                        </ul>
                                    </div>

                                    {/* Mobile View (Categories Filter) */}
                                    <div className="mobile-filter d-lg-none">
                                        <button className="filter-button" onClick={toggleFilter}>Categories<IoIosArrowDown /></button>
                                        <div className={`filter-dropdown ${isFilterActive ? 'active' : ''}`}>
                                            <ul>
                                                <li><NavLink>Automotive Oils</NavLink></li>
                                                <li><NavLink>Classic Oils</NavLink></li>
                                                <li><NavLink>Industrial Lubricants</NavLink></li>
                                                <li><NavLink>High-tech Additives</NavLink></li>
                                                <li><NavLink>Aviation</NavLink></li>
                                                <li><NavLink>Tank Restoration</NavLink></li>
                                                <li><NavLink>Technical Sprays</NavLink></li>
                                                <li><NavLink>Greases & Pastes</NavLink></li>
                                                <li><NavLink>Specialty Products</NavLink></li>
                                                <li><NavLink>Cleaning & Care</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="products">
                                    <div className="header">
                                        <div className="catalogue">
                                            <h6>Download Catalogue<TbFileDownload className='icon' /></h6>
                                        </div>
                                        <div className="navigate">
                                            <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={Product1} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>WAGNER EVOMAX SAE 5W-30 SN C3</h5>
                                                    <p>WAGNER EVOMAX SAE 5W-30 SN C3
                                                        is a high-perfor
                                                        -
                                                        mance low-viscosity engine oil with synthetic technology</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button><a href="/product-detail">View Details</a></button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={Product2} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner CargoX 20W-50 CI-4</h5>
                                                    <p>It is a robust, high-
                                                        viscosity engine oil designed for use in heavy-duty
                                                        diesel engines that operate under extreme
                                                        temperatures and high-load conditions</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={Product3} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner CargoX 10W-40 API CI-4</h5>
                                                    <p>It is is a high-
                                                        performance synthetic blend engine oil designed for
                                                        use in modern, high-output diesel engines</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={Product4} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>WAGNER EVOMAX SAE 0W-30 SN C2 C3</h5>
                                                    <p>It is is a highly
                                                        modern, fully synthetic, long life engine oil which has been
                                                        specially developed for the latest requirement.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="box">
                                                <div className="product-image">
                                                    <img src={ProductImage} alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h5>Wagner VG 150 Industrial Oil</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                                                </div>
                                                <div className="product-btns">
                                                    <div className="common-border-btn">
                                                        <button>View Details</button>
                                                    </div>
                                                    <div className="common-btn">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            {/* why us section */}
            <div div className="why-us space" >
                <div className="container">
                    <div className="title-content title-content-all title-dark text-center">
                        <div className="sub-heading-dark">
                            <button>WHAT SETS US APART</button>
                        </div>
                        <div className="title">
                            <h1>Wagner Oils distinguishes itself by seamlessly blending exceptional performance with
                                responsible production. <br />Our products are:</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="why-us-content">
                            <div className="col-lg-3 col-sm-12">
                                <div className="box active">
                                    <div className="image">
                                        <img src={MadeInGermany} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Made in Germany</h5>
                                        <p>At Wagner Oils, quality and precision form the foundation of everything we do. As a proud
                                            German brand, we embody engineering excellence, employing cutting-edge technology to
                                            ensure every batch meets the highest international standards.</p>
                                    </div>
                                    <div className="shapes">
                                        <div className="shape1">
                                            <img src={Ellipse1} alt="" />
                                        </div>
                                        <div className="shape2">
                                            <img src={Ellipse2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="box ">
                                    <div className="image">
                                        <img src={TechDriven} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Technology-Driven Excellence</h5>
                                        <p>We continuously invest in research and development to stay at the forefront of industry
                                            advancements. This commitment ensures our oils and lubricants evolve with the latest
                                            machinery, vehicle, and industrial requirements. When you choose Wagner Oils, you’re
                                            selecting products engineered for peak performance—even in the most demanding
                                            environments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="box ">
                                    <div className="image">
                                        <img src={TechSupport} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Tech-Support</h5>
                                        <p>Our expert team is always ready to offer tailored advice, troubleshooting, and product
                                            recommendations for your specific applications. With Wagner Oils, you’re not just getting a
                                            product – you’re gaining a reliable partner who will support you through every phase of your
                                            operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="box ">
                                    <div className="image">
                                        <img src={LabSupport} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>Lab Support</h5>
                                        <p>At Wagner Oils, we provide comprehensive laboratory support to help you achieve optimal
                                            lubricant performance. Our in-house labs feature advanced testing and analysis equipment,
                                            allowing us to deliver technical assistance and customized solutions tailored to your specific
                                            needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* testimonial-section */}
            <div div className="testimonial-section space" >
                <div className="container">
                    <div className="main-title">
                        <div className="title-content title-content-all left-title">
                            <div className="sub-heading-dark">
                                <button>WHAT OUR CLIENTS SAY</button>
                            </div>
                            <div className="title">
                                <h1>At Wagner Oils, customer satisfaction is our highest priority. We’re proud to serve industries
                                    worldwide with products that consistently exceed expectations. Don’t just take our word for
                                    it—here’s what our valued clients have to say about their experiences with us: </h1>
                            </div>
                        </div>
                        <div className="title-btn">
                            <div className="test-btn">
                                <a href="/about">
                                    <button>More About us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="image">
                                                <img src={TestiImg1} alt="" />
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
                            </div>
                            <div className="col-lg-6">
                                <div className="item">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* our brands */}

            <div div className="our-brands space" >
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="sub-heading-dark">
                            <button>OUR BRANDS</button>
                        </div>
                        <div className="title">
                            <h1 >At Wagner Oils, we proudly offer a diverse range of premium oils and lubricants through our
                                trusted in-house brands. Each brand is carefully tailored to the unique demands of different
                                industries, providing exceptional performance, efficiency, and sustainability.
                            </h1>
                        </div>
                    </div>

                    <div className="brands-slider">
                        <Slider {...brandsettings} className='slider'>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand1} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand2} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand3} alt="" />
                                </div>
                            </div>
                            {/* <div className="item">
                                <div className="logo">
                                    <img src={Brand4} alt="" />
                                </div>
                            </div> */}
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand1} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand2} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src={Brand3} alt="" />
                                </div>
                            </div>
                            {/* <div className="item">
                                <div className="logo">
                                    <img src={Brand4} alt="" />
                                </div>
                            </div> */}

                        </Slider>
                    </div>
                </div>
                <div className="shapes">
                    <div className="shape1">
                        <img src={Ellipse1} alt="" />
                    </div>
                    <div className="shape2">
                        <img src={Ellipse2} alt="" />
                    </div>
                </div>
            </div >


            {/* cta section */}
            <div div className="cta-section mini-space" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="image wagner-image">
                                <img src={CtaWagner} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="content">
                                <h1>A Word from Our Leadership</h1>
                            </div>
                            <div className="mini-content">
                                <p>"At Wagner Oils, our mission extends beyond providing exceptional lubricants. We’re
                                    dedicated to forging lasting partnerships with our customers, inspiring confidence through
                                    unwavering quality, responsible innovation, and unparalleled service. As we look to the
                                    future, we remain committed to pushing boundaries, embracing new technologies, and
                                    maintaining the highest standards. We believe that by working together, we can create a
                                    more sustainable, efficient, and prosperous environment for industries around the globe."</p>
                                <div className="cta-btn">
                                    <button>Let's Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Home