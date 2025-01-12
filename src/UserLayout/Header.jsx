import React, { useState } from 'react';
import { PiStarFill } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import Logo from '../assets/Resources/wagner-logo.svg';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
    };

    return (
        <>
            {/* Top Header */}
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="star-items">
                                <div data-aos="fade-down" >
                                    <div className="item">
                                        <PiStarFill className="icon" />
                                        <p className="fontSize14 fontWeight300">New Micro-Ceramic Technology</p>
                                    </div>
                                </div>
                                <div data-aos="fade-down">
                                    <div className="item">
                                        <PiStarFill className="icon" />
                                        <p className="fontSize14 fontWeight300">High-Quality</p>
                                    </div>
                                </div>
                                <div data-aos="fade-down">
                                    <div className="item">
                                        <PiStarFill className="icon" />
                                        <p className="fontSize14 fontWeight300">Free shipping Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right">
                                <div data-aos="fade-down">
                                    <div className="item mobiletopheader">
                                        <p className="fontSize14 fontWeight300"><a href="/blog">Blog</a></p>
                                    </div>
                                </div>
                                <div data-aos="fade-down">
                                    <div className="item">
                                        <CiGlobe className="icon" />
                                        <div className="language-selector">
                                            <select className="select-language">
                                                <option value="en">ENG</option>
                                                <option value="fr">Français</option>
                                                <option value="de">Deutsch</option>
                                                <option value="it">Italiano</option>
                                                <option value="es">Español</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-down">
                                    <div className="item">
                                        <LuSearch className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="header">
                <div className="container">
                    <div className="header-items">
                        {/* Logo */}
                        <div className="brand-logo">
                            <img src={Logo} alt="Logo" />
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <div className="offcanvas-toggler d-lg-none">
                            <HiMenu
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasMenu"
                                aria-controls="offcanvasMenu"
                                className="menu-icon"
                            />
                        </div>

                        {/* Off-Canvas Menu */}
                        <div
                            className="offcanvas offcanvas-start"
                            id="offcanvasMenu"
                            tabIndex="-1"
                            aria-labelledby="offcanvasMenuLabel"
                        >
                            <div className="offcanvas-header">
                                <div className="brand-logo">
                                    <img src={Logo} alt="Logo" />
                                </div>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <nav>
                                    <ul className="menu-list">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li className="dropdown">
                                            <button
                                                className="dropdown-toggle"
                                                onClick={() => toggleDropdown('applications')}
                                            >
                                                Applications
                                            </button>
                                            {activeDropdown === 'applications' && (
                                                <ul className="dropdown-menu">
                                                    <li><a href="/application-cars">Cars</a></li>
                                                    <li><a href="/application-motorcycle">Motorcycle</a></li>
                                                    <li><a href="/application-classic">Classic</a></li>
                                                    <li><a href="/application-offroad">Off-road</a></li>
                                                    <li><a href="/application-tuning">Tuning</a></li>
                                                    <li><a href="/application-truck">Truck</a></li>
                                                    <li><a href="/application-boat">Boat</a></li>
                                                    <li><a href="/application-ship">Ship</a></li>
                                                    <li><a href="/application-aviation">Aviation</a></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="dropdown">
                                            <button
                                                className="dropdown-toggle"
                                                onClick={() => toggleDropdown('industries')}
                                            >
                                                Industries
                                            </button>
                                            {activeDropdown === 'industries' && (
                                                <ul className="dropdown-menu">
                                                    <li><a href="/industry-agriculture-&-forestry">Agriculture & Forestry</a></li>
                                                    <li><a href="/industry-construction">Construction</a></li>
                                                    <li><a href="/industry-wind-turbines">Wind Turbines</a></li>
                                                    <li><a href="/industry-shipping">Shipping</a></li>
                                                    <li><a href="/industry-cable-cars-&-lifts">Cable Cars & Lifts</a></li>
                                                    <li><a href="/industry-combines-heat-&-power-plants">Combined Heat & Power Plants</a></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li><a href="/products">Products</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="d-none d-lg-block">
                            <div className="main-menu">
                                <ul className="menu-list">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            onClick={() => toggleDropdown('applications')}
                                        >
                                            Applications
                                        </button>
                                        {activeDropdown === 'applications' && (
                                            <ul className="dropdown-menu">
                                                <li><a href="/application-cars">Cars</a></li>
                                                <li><a href="/application-motorcycle">Motorcycle</a></li>
                                                <li><a href="/application-classic">Classic</a></li>
                                                <li><a href="/application-offroad">Off-road</a></li>
                                                <li><a href="/application-tuning">Tuning</a></li>
                                                <li><a href="/application-truck">Truck</a></li>
                                                <li><a href="/application-boat">Boat</a></li>
                                                <li><a href="/application-ship">Ship</a></li>
                                                <li><a href="/application-aviation">Aviation</a></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            onClick={() => toggleDropdown('industries')}
                                        >
                                            Industries
                                        </button>
                                        {activeDropdown === 'industries' && (
                                            <ul className="dropdown-menu">
                                                <li><a href="/industry-agriculture-&-forestry">Agriculture & Forestry</a></li>
                                                <li><a href="/industry-construction">Construction</a></li>
                                                <li><a href="/industry-wind-turbines">Wind Turbines</a></li>
                                                <li><a href="/industry-shipping">Shipping</a></li>
                                                <li><a href="/industry-cable-cars-&-lifts">Cable Cars & Lifts</a></li>
                                                <li><a href="/industry-combines-heat-&-power-plants">Combined Heat & Power Plants</a></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/products">Products</a></li>
                                </ul>
                            </div>
                        </nav>

                        {/* Call-to-action Button */}
                        <div className="common-btn d-none d-lg-block">
                            <button><a href="/contact">Let's Connect</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
