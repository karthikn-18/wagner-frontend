import React, { useState } from 'react'
import ProductSlider1 from '../../assets/Resources/product-page-1.png'
import { IoIosArrowForward } from "react-icons/io";
import { TbFileDownload } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import ProductImage from '../../assets/Resources/oil-product-1.png'
import { IoSearchOutline } from "react-icons/io5";

const Products = () => {

    // Initialize state to have both 'applications' and 'industries' open by default
    const [activeSection, setActiveSection] = useState(['applications', 'industries']);

    // Track the checked state of each checkbox individually using an object
    const [checkedState, setCheckedState] = useState({
        cars: false,
        motorcycle: false,
        classic: false,
        offRoad: false,
        tuning: false,
        truck: false,
        boat: false,
        ship: false,
        aviation: false,
        agriculture: false,
        construction: false,
        windTurbines: false,
        shipping: false,
        cableCars: false,
        heatPowerPlants: false,
    });

    // Function to toggle the section
    const toggleSection = (section) => {
        setActiveSection((prevSections) => {
            if (prevSections.includes(section)) {
                return prevSections.filter(item => item !== section); // Remove if already active
            } else {
                return [...prevSections, section]; // Add if not active
            }
        });
    };

    // Handle individual checkbox state change
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckedState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };


    return (
        <>
            <div className="breadcrumb product-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h1 data-aos="fade-right">Our <span>Products</span></h1>
                        <p data-aos="fade-left">Engineered to deliver superior performance and reliability for all your automotive and industrial needs.</p>
                    </div>
                </div>
            </div>

            <div className="product-page space">
                <div className="container">
                    <div className="product-cat-slider">
                        <div data-aos="fade-down">
                            <div className="item all-item">
                                <h6>All</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className="item">
                                <div className="image">
                                    <img src={ProductSlider1} alt="" />
                                </div>
                                <h6>Automotive Oils</h6>
                            </div>
                        </div>
                    </div>

                    {/* product section */}
                    <div className="product-section product-page-section">
                        <div className="container">
                            <div className="product-showcase">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="product-menu" data-aos="fade-right">
                                            <ul>
                                                {/* Applications Section */}
                                                <li>
                                                    <NavLink
                                                        className={activeSection.includes('applications') ? "activeTab" : ""}
                                                        onClick={() => toggleSection('applications')}
                                                    >
                                                        Applications
                                                        <IoIosArrowDown className={activeSection.includes('applications') ? 'rotate' : ''} />
                                                    </NavLink>
                                                    {activeSection.includes('applications') && (
                                                        <div className="submenu">
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle1"
                                                                    name="cars"
                                                                    checked={checkedState.cars}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle1">Cars</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle2"
                                                                    name="motorcycle"
                                                                    checked={checkedState.motorcycle}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle2">Motorcycle</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle3"
                                                                    name="classic"
                                                                    checked={checkedState.classic}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle3">Classic</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle4"
                                                                    name="offRoad"
                                                                    checked={checkedState.offRoad}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle4">Off-road</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle5"
                                                                    name="tuning"
                                                                    checked={checkedState.tuning}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle5">Tuning</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle6"
                                                                    name="truck"
                                                                    checked={checkedState.truck}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle6">Truck</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle7"
                                                                    name="boat"
                                                                    checked={checkedState.boat}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle7">Boat</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle8"
                                                                    name="ship"
                                                                    checked={checkedState.ship}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle8">Ship</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="vehicle9"
                                                                    name="aviation"
                                                                    checked={checkedState.aviation}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="vehicle9">Aviation</label>
                                                            </div>
                                                        </div>
                                                    )}
                                                </li>

                                                {/* Industries Section */}
                                                <li>
                                                    <NavLink
                                                        className={activeSection.includes('industries') ? "activeTab" : ""}
                                                        onClick={() => toggleSection('industries')}
                                                    >
                                                        Industries
                                                        <IoIosArrowDown className={activeSection.includes('industries') ? 'rotate' : ''} />
                                                    </NavLink>
                                                    {activeSection.includes('industries') && (
                                                        <div className="submenu">
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="industry1"
                                                                    name="agriculture"
                                                                    checked={checkedState.agriculture}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="industry1">Agriculture & Forestry</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="industry2"
                                                                    name="construction"
                                                                    checked={checkedState.construction}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="industry2">Construction</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="industry3"
                                                                    name="windTurbines"
                                                                    checked={checkedState.windTurbines}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="industry3">Wind Turbines</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="industry4"
                                                                    name="shipping"
                                                                    checked={checkedState.shipping}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="industry4">Shipping</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="industry5"
                                                                    name="cableCars"
                                                                    checked={checkedState.cableCars}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="industry5">Cable Cars & Lifts</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id="industry6"
                                                                    name="heatPowerPlants"
                                                                    checked={checkedState.heatPowerPlants}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="industry6">Combined Heat & Power Plants</label>
                                                            </div>
                                                        </div>
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="products">
                                            <div className="header" data-aos="fade-left">
                                                <div className="result">
                                                    <h6>Showing <span>320</span> Results</h6>
                                                </div>
                                                <div className="search">
                                                    <input type="text" placeholder='Search....' />
                                                    <IoSearchOutline className='icon' />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="200">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="400">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="600">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="200">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="400">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="600">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="200">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="400">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div data-aos="fade-up" data-aos-delay="600">
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

export default Products