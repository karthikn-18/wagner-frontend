import React, { useEffect, useState } from 'react'
import ProductSlider1 from '../../assets/Resources/product-page-1.png'
import { IoIosArrowForward } from "react-icons/io";
import { TbFileDownload } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import ProductImage from '../../assets/Resources/oil-product-1.png'
import { IoSearchOutline } from "react-icons/io5";
import { useApplicationGetQuery, useCategoryGetQuery, useIndustriesGetQuery, useProductGetQuery } from '../../query/useQuery';
import debounce from 'lodash/debounce';

const Products = () => {

    const [activeSection, setActiveSection] = useState(() => {
        return window.innerWidth <= 768 ? [] : ['applications', 'industries'];
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setActiveSection([]); // Close menu on mobile
            } else {
                setActiveSection(['applications', 'industries']); // Keep open on desktop
            }
        };

        handleResize(); // Run initially
        window.addEventListener('resize', handleResize); // Listen for resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);



    const { data: categories } = useCategoryGetQuery()
    const { data: applications } = useApplicationGetQuery()
    const { data: industries } = useIndustriesGetQuery()

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const application = queryParams.get('application')

    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState('');
    const [search, setSearch] = useState('');
    const [industriesIds, setIndustriesIds] = useState([]);
    // const [applicationsIds, setApplicationsIds] = useState([application]);
    // console.log(applicationsIds, "applicationsIds")

    const [applicationsIds, setApplicationsIds] = useState(application ? [application] : []);
    const [checkedState, setCheckedState] = useState({});

    useEffect(() => {
        if (applications?.data?.data?.length > 0 && application) {
            const initialState = {};
            applications.data.data.forEach((item) => {
                if (item._id === application) {
                    initialState[item.name] = true;
                }
            });
            setCheckedState(initialState);
        }
    }, [applications, application]);
    const debouncedSearch = debounce((value) => {
        setSearch(value);

    }, 500);
    const handleChange = (e) => {
        debouncedSearch(e.target.value);
    };
    const { data: products } = useProductGetQuery({ page: page, search: search, categoryId: categoryId, industriesIds: industriesIds, applicationsIds: applicationsIds?.length > 0 ? applicationsIds : application })

    console.log(products, "categories, applications, industries")

    // Initialize state to have both 'applications' and 'industries' open by default
    // const [activeSection, setActiveSection] = useState(['applications', 'industries']);
    // const [checkedState, setCheckedState] = useState({});

    const navigate = useNavigate();

    console.log(checkedState, "checkedState")

    // Track the checked state of each checkbox individually using an object
    // const [checkedState, setCheckedState] = useState({
    //     cars: false,
    //     motorcycle: false,
    //     classic: false,
    //     offRoad: false,
    //     tuning: false,
    //     truck: false,
    //     boat: false,
    //     ship: false,
    //     aviation: false,
    //     agriculture: false,
    //     construction: false,
    //     windTurbines: false,
    //     shipping: false,
    //     cableCars: false,
    //     heatPowerPlants: false,
    // });

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


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    console.log(products, "products")

    const totalPages = Math.ceil(products?.data?.totalPages / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCheckboxChange = (e, item, setter) => {
        const { checked } = e.target;
        setCheckedState((prevState) => ({
            ...prevState,
            [item.name]: checked,
        }));

        setter((prevState) => {
            const updatedApplicationsIds = [...prevState];

            if (checked) {
                updatedApplicationsIds.push(item._id);

            } else {
                const index = updatedApplicationsIds.indexOf(item._id);
                if (index > -1) {
                    updatedApplicationsIds.splice(index, 1);
                }
            }

            return updatedApplicationsIds;
        });

        setPage(1);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = products?.data?.data?.slice(indexOfFirstItem, indexOfLastItem);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        // setCategoryId(tab)
        setPage(1)
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
                        <div data-aos="fade-down" onClick={() => { setCategoryId(''), setPage(1) }}>
                            <div className="item all-item all-cat">
                                <h6>All</h6>
                            </div>
                        </div>
                        {
                            categories?.data?.data?.map((item, index) => (
                                <div data-aos="fade-down" key={index} onClick={() => { setCategoryId(item._id), setPage(1) }}>
                                    <div className="item">
                                        <div className="image">
                                            <img src={ProductSlider1} alt="" />
                                        </div>
                                        <h6>{item.name}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* product section */}
                    <div className="product-section product-page-section">
                        <div className="container">
                            <div className="product-showcase">
                                <div className="row">
                                    <div className="col-lg-3 ">
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
                                                            {
                                                                applications?.data?.data?.map((item, index) => (
                                                                    <div key={index}>
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`checkbox-${index}`}
                                                                            name={item.name}
                                                                            checked={checkedState[item.name] || false}
                                                                            onChange={(e) => handleCheckboxChange(e, item, setApplicationsIds)}
                                                                        />
                                                                        <label htmlFor={`checkbox-${index}`}>{item.name}</label>
                                                                    </div>
                                                                ))
                                                            }

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
                                                            {
                                                                industries?.data?.data?.map((item, index) => (
                                                                    <div key={index}>
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`industry-${index}`}
                                                                            name={item.name}
                                                                            checked={checkedState[item.name] || false}
                                                                            onChange={(e) => handleCheckboxChange(e, item, setIndustriesIds)}
                                                                        />
                                                                        <label htmlFor={`industry-${index}`}>{item.name}</label>
                                                                    </div>
                                                                ))
                                                            }

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
                                                    <h6>Showing <span>{products?.data?.data?.length}</span> Results</h6>
                                                </div>
                                                <div className="search">
                                                    <input type="text" onChange={handleChange} placeholder='Search....' />
                                                    <IoSearchOutline className='icon' />
                                                </div>
                                            </div>
                                            <div className="row">
                                                {
                                                    products?.data?.data?.map((item, index) => (
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                                            <div data-aos="fade-up">
                                                                <div className="box">
                                                                    <div className="product-image">
                                                                        <img src={ProductImage} alt="" />
                                                                    </div>
                                                                    <div className="product-detail">
                                                                        <h5>{item?.name}</h5>
                                                                        <p>{item?.description?.slice(0, 100)}</p>
                                                                    </div>
                                                                    <div className="product-btns">
                                                                        <div className="common-border-btn">
                                                                            <button onClick={() => navigate(`/product-detail/${item?._id}`)}>View Details</button>
                                                                        </div>
                                                                        {/* <div className="common-btn">
                                                                            <button
                                                                                onClick={() => window.open(item?.buyExternalLinks?.main, "_blank", "noopener,noreferrer")}
                                                                                className="text-decoration-none"
                                                                            >
                                                                                Buy Now
                                                                            </button>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

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


                </div>
            </div>

        </>
    )
}

export default Products