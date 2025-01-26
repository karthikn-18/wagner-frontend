import React, { useState, useEffect, useRef } from 'react'
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
import { Link, NavLink } from 'react-router-dom';
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
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from '../../Components/Testimonials';
import { useApplicationGetQuery, useCategoryGetQuery, useProductGetQuery } from '../../query/useQuery';
// Register the TextPlugin
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Home = () => {

    const yearsRef = useRef(null);
    const countriesRef = useRef(null);
    const categoriesRef = useRef(null);
    const sectionRef = useRef(null);

    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState('');

    const { data: categories } = useCategoryGetQuery()
    const { data: products } = useProductGetQuery({ page: page, search: '', categoryId: categoryId, industriesIds: '', applicationsIds: '' })
    console.log(categories, "categories", products);

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

    useEffect(() => {
        // Animate counters when section is in view
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 80%", // Trigger when top of section is 80% in viewport
            onEnter: () => {
                // Animate "Years in Industry"
                gsap.fromTo(
                    yearsRef.current,
                    { innerText: 0 },
                    {
                        innerText: 30, // Target number
                        duration: 2, // Animation duration
                        snap: { innerText: 1 }, // Rounds to integers
                        ease: "power1.inOut",
                        onUpdate: function () {
                            yearsRef.current.innerText = Math.floor(this.targets()[0].innerText);
                        },
                    }
                );

                // Animate "Countries Globally"
                gsap.fromTo(
                    countriesRef.current,
                    { innerText: 0 },
                    {
                        innerText: 40,
                        duration: 2.5,
                        snap: { innerText: 1 },
                        ease: "power1.inOut",
                        onUpdate: function () {
                            countriesRef.current.innerText = Math.floor(this.targets()[0].innerText);
                        },
                    }
                );

                // Animate "Categories"
                gsap.fromTo(
                    categoriesRef.current,
                    { innerText: 0 },
                    {
                        innerText: 9,
                        duration: 2,
                        snap: { innerText: 1 },
                        ease: "power1.inOut",
                        onUpdate: function () {
                            categoriesRef.current.innerText = Math.floor(this.targets()[0].innerText);
                        },
                    }
                );
            },
        });
    }, []);


    // State to manage the visibility of the filter dropdown
    const [isFilterActive, setFilterActive] = useState(false);
    const [activeTab, setActiveTab] = useState(categories?.data?.data[0]?.name || '');
    const toggleFilter = () => {
        setFilterActive(!isFilterActive);
    };

    useEffect(() => {
        if (categories?.data.data[0]?.name) {
            setActiveTab(categories?.data?.data[0]?.name || '')
            setCategoryId(categories?.data?.data[0]?._id || '')
            setPage(1)
        }
    }, [categories])

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        // setCategoryId(tab)
        setPage(1)
    };




    const settings = {
        dots: false,          // Hides navigation dots
        infinite: true,       // Enables infinite looping
        speed: 500,           // Adjusted speed for smoother transition (500ms)
        slidesToShow: 1,      // Show one slide at a time
        slidesToScroll: 1,    // Scroll one slide at a time
        autoplay: true,       // Enables auto-slide
        autoplaySpeed: 3000,  // Slide change interval (3 seconds)
        cssEase: "ease-in-out", // Smooth animation curve
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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    console.log(products, "products")

    const totalPages = Math.ceil(products?.data?.totalPages / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = products?.data?.data?.slice(indexOfFirstItem, indexOfLastItem);

    const { data: ApplicationValue } = useApplicationGetQuery()

    console.log(ApplicationValue, "ApplicationValue")

    return (
        <>
            {/* banner section */}
            <div className="banner-section">
                <Slider {...settings} className='slider'>
                    <div className='banner-4'>
                        <div className="container">
                            <div className="banner-contents">
                                <h5 data-aos="fade-right">UNLOCKING THE WORLD OF</h5>
                                <h1 data-aos="fade-right" data-aos-delay="500">Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p data-aos="fade-right" data-aos-delay="1000">Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn" data-aos="fade-right" data-aos-delay="1500">
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
                                <h5 data-aos="fade-right">UNLOCKING THE WORLD OF</h5>
                                <h1 data-aos="fade-right" data-aos-delay="500">Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p data-aos="fade-right" data-aos-delay="1000">Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn" data-aos="fade-right" data-aos-delay="1500">
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
                                <h5 data-aos="fade-right">UNLOCKING THE WORLD OF</h5>
                                <h1 data-aos="fade-right" data-aos-delay="500">Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p data-aos="fade-right" data-aos-delay="1000">Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn" data-aos="fade-right" data-aos-delay="1500">
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
                                <h5 data-aos="fade-right">UNLOCKING THE WORLD OF</h5>
                                <h1 data-aos="fade-right" data-aos-delay="500">Lubricants & <span className='ban-outline'>Additives</span></h1>
                                <p data-aos="fade-right" data-aos-delay="1000">Wagner, a comprehensive range of high-quality
                                    lubricants designed to meet the needs of various
                                    vehicles and machinery. Our product line includes:</p>
                                <div className="banner-btn common-border-btn" data-aos="fade-right" data-aos-delay="1500">
                                    <a href="/products">
                                        <button className='fontSize16 fontWeight300'>Explore Products<GoArrowUpRight className='icon' /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="container select-vehicle-container" data-aos="fade-up" data-aos-delay="1500">
                    <div className="select-vehicle">
                        <div className="sub-heading-dark">
                            <button>SELECT YOUR VEHICLE</button>
                        </div>
                        <div className="vehicle-category">
                            {
                                ApplicationValue?.data?.data.map((item) => (
                                    <div data-aos="fade-up" data-aos-delay="1600" data-aos-offset="0">
                                        <div className="item" >
                                            <Link to={`/products?application=${item?._id}`}>
                                                <div className="icon first">
                                                    <img src={VehicleIcon1} alt="" />
                                                    <p>{item?.name}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >

            {/* about section */}
            <div className="about-section space">
                <div className="container">
                    <div className="title-content">
                        <div className="row">
                            <div className="col-lg-2">
                                <div data-aos="fade-right">
                                    <div className="sub-heading-dark">
                                        <button>ABOUT US</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div data-aos="fade-down">
                                    <div className="title">
                                        <h1 className='typewriter-text'>Wagner Oils is more than a brand—
                                            it’s a legacy of innovations, Quality,
                                            and excellence.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div data-aos="fade-left">
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
                            </div>
                        </div>
                    </div>


                    <div ref={sectionRef} className="counter-section">
                        <div className="row">
                            <div className="col-lg-3">
                                <div data-aos="fade-up">
                                    <div className="box box-1">
                                        <div className="years-in-industry">
                                            <span>Over</span>
                                            <h1>
                                                <span ref={yearsRef}></span>+
                                            </h1>
                                        </div>
                                        <h6>Years in Industry</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div data-aos="fade-up" data-aos-delay="500">
                                    <div className="box box-2">
                                        <h1 className='typewriter-text'>#1</h1>
                                        <p>
                                            We specialize in advanced lubrication technology, providing
                                            high-quality oils and lubricants trusted worldwide by
                                            industries, automotive enthusiasts, and professionals for their
                                            reliability, performance, and eco-friendly formulations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div data-aos="fade-up" data-aos-delay="1000">
                                    <div className="box box-3">
                                        <h6>Active across</h6>
                                        <div className="years-in-industry">
                                            <h1>
                                                <span ref={countriesRef}></span>+
                                            </h1>
                                            <span>Countries Globally</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div data-aos="fade-up" data-aos-delay="1500">
                                    <div className="box box-4">
                                        <div className="icon">
                                            <a href="/products" style={{ color: "#fff" }}>
                                                <GoArrowUpRight />
                                            </a>
                                        </div>
                                        <h6>
                                            <span ref={categoriesRef}></span>+ Categories
                                        </h6>
                                    </div>
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
                    <div className="title-content title-content-all" data-aos="fade-down">
                        <div className="sub-heading-dark">
                            <button>OUR LINEUPS</button>
                        </div>
                        <div className="title">
                            <h1>High-performance formulations engineered to boost engine efficiency and extend your vehicle’s lifespan.</h1>
                        </div>
                    </div>

                    <div className="product-showcase">
                        <div className="row">
                            <div className="col-lg-3">
                                <div data-aos="fade-right">
                                    <div className="product-menu-wrapper">
                                        {/* Desktop View */}
                                        <div className="product-menu d-none d-lg-block">
                                            <ul>
                                                {

                                                    categories?.data?.data?.length > 0 &&
                                                    categories?.data?.data?.map((category, index) => (
                                                        <li onClick={() => { handleTabClick(category.name), setCategoryId(category?._id) }} key={index}>
                                                            <NavLink className={activeTab === category.name ? 'activeTab' : ''}>
                                                                {category.name}
                                                            </NavLink>
                                                            {activeTab === category.name ? <IoIosArrowForward className="activeTab" /> : <IoIosArrowDown />}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>

                                        {/* Mobile View (Categories Filter) */}
                                        <div className="mobile-filter d-lg-none">
                                            <button className="filter-button" onClick={toggleFilter}>
                                                Categories<IoIosArrowDown />
                                            </button>
                                            <div className={`filter-dropdown ${isFilterActive ? 'active' : ''}`}>
                                                <ul>
                                                    {/* {
                                                        <li onClick={() => handleTabClick('automotive-oils')}>  <NavLink className={activeTab === category.name ? 'activeTab' : ''}>
                                                            {category.name}
                                                        </NavLink></li>
                                                    } */}
                                                    {

                                                        categories?.data?.data?.length > 0 &&
                                                        categories?.data?.data?.map((category, index) => (
                                                            <li onClick={() => { handleTabClick(category.name), setCategoryId(category?._id) }} key={index}>
                                                                <NavLink className={activeTab === category.name ? 'activeTab' : ''}>
                                                                    {category.name}
                                                                </NavLink>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Other columns with products */}
                            <div className="col-lg-9">
                                <div className="products">
                                    <div className="header">
                                        <div data-aos="fade-left">
                                            <div className="catalogue">
                                                <h6>Download Catalogue<TbFileDownload className='icon' /></h6>
                                            </div>
                                        </div>
                                        <div data-aos="fade-left">
                                            <div className="navigate">
                                                <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="row product-section products">
                                            {

                                                currentItems?.length > 0 ?
                                                    currentItems?.map((item, index) => (
                                                        <div className="col-lg-3" key={index}>
                                                            <div className="box" data-aos="fade-up">
                                                                <div className="product-image">
                                                                    <img src={item?.images[0]} alt="WAGNER EVOMAX SAE 5W-30 SN C3" />
                                                                </div>
                                                                <div className="product-detail">
                                                                    <h5>{item?.name}</h5>
                                                                    <p>{item?.description?.slice(0, 100)}</p>
                                                                </div>
                                                                <div className="product-btns">
                                                                    <div className="common-border-btn">
                                                                        <Link to={`/product-detail/${item?._id}`}>
                                                                            <button onClick={() => navigate(`/product-detail/${item?._id}`)}>View Details</button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))
                                                    : "No products found"
                                            }


                                        </div>
                                        <div className="pagination">
                                            <button
                                                disabled={currentPage === 1}
                                                onClick={() => handlePageChange(currentPage - 1)}
                                            >
                                                Previous
                                            </button>
                                            <span>Page {currentPage} of {totalPages}</span>
                                            <button
                                                disabled={totalPages === 0 || currentPage === totalPages}
                                                onClick={() => handlePageChange(currentPage + 1)}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* why us section */}
            <div div className="why-us space" >
                <div className="container">
                    <div className="title-content title-content-all title-dark text-center" data-aos="fade-down" >
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
                                <div data-aos="zoom-in">
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
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div data-aos="zoom-in" data-aos-delay="200">
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
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div data-aos="zoom-in" data-aos-delay="400">
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
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div data-aos="zoom-in" data-aos-delay="600">
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
                </div>
            </div >

            {/* testimonial-section */}
            <div div className="testimonial-section space" >
                <div className="container">
                    <div className="main-title">
                        <div data-aos="fade-right">
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
                        </div>
                    </div>
                    <Testimonials />
                </div>
            </div >

            {/* our brands */}

            <div div className="our-brands space" >
                <div className="container">
                    <div className="title-content title-content-all text-center" data-aos="fade-down">
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
                            <div data-aos="zoom-in">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand3} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="item">
                                    <div className="logo">
                                        <img src={Brand3} alt="" />
                                    </div>
                                </div>
                            </div>

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
            <div div className="cta-section mini-space" data-aos="fade-down">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3" >
                            <div className="image wagner-image" data-aos="fade-right" data-aos-delay="200" data-aos-offset="0">
                                <img src={CtaWagner} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div data-aos="fade-left" data-aos-delay="200">
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
                </div>

            </div >
        </>
    )
}

export default Home