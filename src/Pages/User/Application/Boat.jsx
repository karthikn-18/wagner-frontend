import React from 'react'
import AutomationCar1 from "../../../assets/Resources/automation-car-1.jpg"
import AutomationCar2 from "../../../assets/Resources/automation-car-2.jpg"
import { PiStarFill } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import CtaRight from '../../../assets/Resources/cta-right.png'
import CtaLeft from '../../../assets/Resources/cta-left.png'

const Boat = () => {
    return (
        <>
            <div className="breadcrumb about-breadcrumb automation">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h1 data-aos="fade-right"><span>Applications &gt; </span><br />Boat</h1>
                        <p data-aos="fade-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
            </div>

            <div className="automation-page ">
                <div className="overview space">
                    <div className="container">
                        <div className="title-content title-content-all text-center" data-aos="fade-down">
                            <div className="sub-heading-dark">
                                <button>OVERVIEW</button>
                            </div>
                            <div className="title">
                                <h1>At Wagner German Oil, we produce premium oils and lubricants that meet the #1 & highest industry standards. With decades of expertise, we deliver reliable, sustainable products that power machines and engines worldwide.</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 left">
                                <div data-aos="fade-right">
                                    <div className="image">
                                        <img src={AutomationCar1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div data-aos="fade-left">
                                    <div className="content">
                                        <h1>At Wagner German Oil, we produce premium oils</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        <ul>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</li>
                                        </ul>
                                        <div className="common-btn d-none d-lg-block">
                                            <button>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="productsandbenefits space">
                    <div className="container">
                        <div className="title-content title-content-all text-center" data-aos="fade-down">
                            <div className="sub-heading-dark">
                                <button>PRODUCTS & BENEFITS</button>
                            </div>
                            <div className="title">
                                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                            </div>
                        </div>

                        <div className="nav-tabs">
                            <nav data-aos="fade-down">
                                <div className="nav nav-tabs custom-tabs" id="nav-tab" role="tablist">
                                    <button
                                        className="nav-link active"
                                        id="nav-description-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-description"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-description"
                                        aria-selected="true"
                                    >
                                        Engine oil additives
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-specifications-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-specifications"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-specifications"
                                        aria-selected="false"
                                    >
                                        Engine oils
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-product-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-product"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-product"
                                        aria-selected="false"
                                    >
                                        Fuel additives
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-gearbox-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-gearbox"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-gearbox"
                                        aria-selected="false"
                                    >
                                        Gearbox oil additives
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-care-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-care"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-care"
                                        aria-selected="false"
                                    >
                                        Car care
                                    </button>
                                </div>
                            </nav>

                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-description"
                                    role="tabpanel"
                                    aria-labelledby="nav-description-tab"
                                    data-aos="fade-up"
                                >
                                    <h6>Heading</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="highlights-box">
                                        <h6>Highlights</h6>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="link">
                                        <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>

                                    </div>

                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-specifications"
                                    role="tabpanel"
                                    aria-labelledby="nav-specifications-tab"
                                    data-aos="fade-up"
                                >
                                    <h6>Heading</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="highlights-box">
                                        <h6>Highlights</h6>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="link">
                                        <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>

                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-product"
                                    role="tabpanel"
                                    aria-labelledby="nav-product-tab"
                                    data-aos="fade-up"
                                >
                                    <h6>Heading</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="highlights-box">
                                        <h6>Highlights</h6>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="link">
                                        <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>

                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-gearbox"
                                    role="tabpanel"
                                    aria-labelledby="nav-gearbox-tab"
                                    data-aos="fade-up"
                                >
                                    <h6>Heading</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="highlights-box">
                                        <h6>Highlights</h6>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="link">
                                        <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>

                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-care"
                                    role="tabpanel"
                                    aria-labelledby="nav-care-tab"
                                    data-aos="fade-up"
                                >
                                    <h6>Heading</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="highlights-box">
                                        <h6>Highlights</h6>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item">
                                                    <PiStarFill className='icon' />
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="link">
                                        <h6>View our Best seller<GoArrowUpRight className='icon' /></h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="automation-cta overview space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div data-aos="fade-right">
                                    <div className="content">
                                        <h1>At Wagner German Oil, we produce premium oils</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <div className="common-btn d-none d-lg-block">
                                            <button>Lets Connect</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 left">
                                <div data-aos="fade-left">
                                    <div className="image">
                                        <img src={AutomationCar2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div div className="cta-section mini-space" data-aos="fade-down">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <div data-aos="fade-right" data-aos-delay="200">
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
                            <div className="col-lg-2">
                                <div data-aos="fade-left" data-aos-delay="200">
                                    <div className="image">
                                        <img src={CtaRight} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >



            </div>
        </>
    )
}

export default Boat