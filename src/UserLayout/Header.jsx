import React, { useState, useEffect } from 'react';
import { PiStarFill } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import Logo from '../assets/Resources/wagner-logo.svg';
import Product1 from '../assets/Resources/5w-30.png';
import { debounce } from 'lodash';
import { useProductGetQuery } from '../query/useQuery';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation(); // Get current location
    const [search, setSearch] = useState('');

    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
    };

    const debouncedSearch = debounce((value) => {
        setSearch(value);
        // Perform any additional search actions here (like API calls)
    }, 500);

    const handleChange = (e) => {
        debouncedSearch(e.target.value);
    };
    const { data: products } = useProductGetQuery({ page: 1, search: search, categoryId: '', industriesIds: '', applicationsIds: '' })


    const isActive = (path) => {
        const currentPath = location.pathname;

        // Check if we're on the homepage and specifically the home menu
        if (currentPath === "/" && path === "/") {
            return "active"; // Home page active
        }

        // For other pages, match the menu based on path
        if (currentPath.startsWith(path) && path !== "/") {
            return "active"; // Mark as active for nested paths, but not home
        }

        return ""; // If no match, return empty string
    };

    // Check if the link is active

    const closeDropdown = () => {
        setActiveDropdown(null); // Close the dropdown when a submenu is clicked
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Change this value as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigate = useNavigate();

    return (
        <>
            {/* Top Header */}
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="star-items">
                                <div data-aos="fade-down " >
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
                                    <div className="item">
                                        <button
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#globalsearch"
                                        >
                                            <LuSearch className="icon" /> Search Products
                                        </button>
                                    </div>
                                </div>
                                <div data-aos="fade-down">
                                    <div className="item">
                                        <CiGlobe className='icon' />
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={`header main-header sticky-header ${scrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <div className="header-items">
                        {/* Logo */}
                        <div className="brand-logo">
                            <Link to="/" className={isActive("/")}>
                                <img src={Logo} alt="Logo" />
                            </Link>
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
                                        <li><Link to="/" className={isActive("/")}>Home</Link></li>
                                        <li><Link to="/about" className={isActive("/about")}>About</Link></li>
                                        <li className="dropdown">
                                            <button
                                                className={`dropdown-toggle ${isActive("/application-cars")}`}
                                                onClick={() => toggleDropdown('applications')}
                                            >
                                                Applications
                                            </button>
                                            {activeDropdown === 'applications' && (
                                                <ul className="dropdown-menu">
                                                    <li><Link to="/application-cars" className={isActive("/application-cars")} onClick={closeDropdown}>Cars</Link></li>
                                                    <li><Link to="/application-motorcycle" className={isActive("/application-motorcycle")} onClick={closeDropdown}>Motorcycle</Link></li>
                                                    <li><Link to="/application-classic" className={isActive("/application-classic")} onClick={closeDropdown}>Classic</Link></li>
                                                    <li><Link to="/application-offroad" className={isActive("/application-offroad")} onClick={closeDropdown}>Off-road</Link></li>
                                                    <li><Link to="/application-tuning" className={isActive("/application-tuning")} onClick={closeDropdown}>Tuning</Link></li>
                                                    <li><Link to="/application-truck" className={isActive("/application-truck")} onClick={closeDropdown}>Truck</Link></li>
                                                    <li><Link to="/application-boat" className={isActive("/application-boat")} onClick={closeDropdown}>Boat</Link></li>
                                                    <li><Link to="/application-ship" className={isActive("/application-ship")} onClick={closeDropdown}>Ship</Link></li>
                                                    <li><Link to="/application-aviation" className={isActive("/application-aviation")} onClick={closeDropdown}>Aviation</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="dropdown">
                                            <button
                                                className={`dropdown-toggle ${isActive("/industry-agriculture-&-forestry")}`}
                                                onClick={() => toggleDropdown('industries')}
                                            >
                                                Industries
                                            </button>
                                            {activeDropdown === 'industries' && (
                                                <ul className="dropdown-menu">
                                                    <li><Link to="/industry-agriculture-&-forestry" className={isActive("/industry-agriculture-&-forestry")} onClick={closeDropdown}>Agriculture & Forestry</Link></li>
                                                    <li><Link to="/industry-construction" className={isActive("/industry-construction")} onClick={closeDropdown}>Construction</Link></li>
                                                    <li><Link to="/industry-wind-turbines" className={isActive("/industry-wind-turbines")} onClick={closeDropdown}>Wind Turbines</Link></li>
                                                    <li><Link to="/industry-shipping" className={isActive("/industry-shipping")} onClick={closeDropdown}>Shipping</Link></li>
                                                    <li><Link to="/industry-cable-cars-&-lifts" className={isActive("/industry-cable-cars-&-lifts")} onClick={closeDropdown}>Cable Cars & Lifts</Link></li>
                                                    <li><Link to="/industry-combines-heat-&-power-plants" className={isActive("/industry-combines-heat-&-power-plants")} onClick={closeDropdown}>Combined Heat & Power Plants</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li><Link to="/blog" className={isActive("/blog")}>Blog</Link></li>
                                        <li><Link to="/products" className={isActive("/products")}>Products</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="d-none d-lg-block">
                            <div className="main-menu">
                                <ul className="menu-list">
                                    <li><Link to="/" className={isActive("/")}>Home</Link></li>
                                    <li><Link to="/about" className={isActive("/about")}>About</Link></li>
                                    <li className="dropdown">
                                        <button
                                            className={`dropdown-toggle ${isActive("/application-cars")}`}
                                            onClick={() => toggleDropdown('applications')}
                                        >
                                            Applications
                                        </button>
                                        {activeDropdown === 'applications' && (
                                            <ul className="dropdown-menu">
                                                <li><Link to="/application-cars" className={isActive("/application-cars")} onClick={closeDropdown}>Cars</Link></li>
                                                <li><Link to="/application-motorcycle" className={isActive("/application-motorcycle")} onClick={closeDropdown}>Motorcycle</Link></li>
                                                <li><Link to="/application-classic" className={isActive("/application-classic")} onClick={closeDropdown}>Classic</Link></li>
                                                <li><Link to="/application-offroad" className={isActive("/application-offroad")} onClick={closeDropdown}>Off-road</Link></li>
                                                <li><Link to="/application-tuning" className={isActive("/application-tuning")} onClick={closeDropdown}>Tuning</Link></li>
                                                <li><Link to="/application-truck" className={isActive("/application-truck")} onClick={closeDropdown}>Truck</Link></li>
                                                <li><Link to="/application-boat" className={isActive("/application-boat")} onClick={closeDropdown}>Boat</Link></li>
                                                <li><Link to="/application-ship" className={isActive("/application-ship")} onClick={closeDropdown}>Ship</Link></li>
                                                <li><Link to="/application-aviation" className={isActive("/application-aviation")} onClick={closeDropdown}>Aviation</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li className="dropdown">
                                        <button
                                            className={`dropdown-toggle ${isActive("/industry-agriculture-&-forestry")}`}
                                            onClick={() => toggleDropdown('industries')}
                                        >
                                            Industries
                                        </button>
                                        {activeDropdown === 'industries' && (
                                            <ul className="dropdown-menu">
                                                <li><Link to="/industry-agriculture-&-forestry" className={isActive("/industry-agriculture-&-forestry")} onClick={closeDropdown}>Agriculture & Forestry</Link></li>
                                                <li><Link to="/industry-construction" className={isActive("/industry-construction")} onClick={closeDropdown}>Construction</Link></li>
                                                <li><Link to="/industry-wind-turbines" className={isActive("/industry-wind-turbines")} onClick={closeDropdown}>Wind Turbines</Link></li>
                                                <li><Link to="/industry-shipping" className={isActive("/industry-shipping")} onClick={closeDropdown}>Shipping</Link></li>
                                                <li><Link to="/industry-cable-cars-&-lifts" className={isActive("/industry-cable-cars-&-lifts")} onClick={closeDropdown}>Cable Cars & Lifts</Link></li>
                                                <li><Link to="/industry-combines-heat-&-power-plants" className={isActive("/industry-combines-heat-&-power-plants")} onClick={closeDropdown}>Combined Heat & Power Plants</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li><Link to="/blog" className={isActive("/blog")}>Blog</Link></li>
                                    <li><Link to="/products" className={isActive("/products")}>Products</Link></li>
                                </ul>
                            </div>
                        </nav>

                        {/* Call-to-action Button */}
                        <div className="common-btn d-none d-lg-block">
                            <button><Link to="/contact" className={isActive("/contact")}>Let's Connect</Link></button>
                        </div>
                    </div>
                </div>
            </div >



            {/* Modal Structure */}
            <div
                className="modal fade global-search-popup"
                id="globalsearch"
                tabIndex="-1"
                aria-labelledby="shopModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <input
                                type="text"
                                // value={search}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Search Products here..."
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row item">
                                {
                                    products?.data?.data?.length > 0 ? (
                                        products?.data?.data?.map((product, index) => (
                                            <>
                                                <div className="col-lg-4" key={index}>
                                                    <div className="image">
                                                        <img src={product?.images[0]} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="content">
                                                        <div className="title">
                                                            <h5>{product?.name}</h5>
                                                        </div>
                                                        <p>{product?.description?.slice(0, 100)}</p>
                                                        <div className="product-btns">
                                                            <div className="common-border-btn">
                                                                <button onClick={() => {
                                                                    navigate(`/product-detail/${product?._id}`), document
                                                                    document.getElementById('closeModalButton').click();
                                                                }}>View Details</button>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                className="btn-close d-none"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                                id="closeModalButton" // Add an ID to the button
                                                            ></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    ) : "No Products Found"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Header;
