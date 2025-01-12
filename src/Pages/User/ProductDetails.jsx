import React from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import ProductImg1 from '../../assets/Resources/product-1.png'
import ProductImg2 from '../../assets/Resources/product-overview.png'
import ProductImg3 from '../../assets/Resources/product-image.png'
import { GoArrowUpRight } from "react-icons/go";
import ProductImage from '../../assets/Resources/oil-product-1.png'
import Product1 from '../../assets/Resources/5w-30.png'
import Product1Des from '../../assets/Resources/product-1-des.png'
import Product1Cover from '../../assets/Resources/product-1-cover.png'
import { VscDebugBreakpointLog } from "react-icons/vsc";

const ProductDetails = () => {

    const productDetailItem = {
        images: [
            {
                original: Product1,
                thumbnail: Product1,
            },
            {
                original: Product1Des,
                thumbnail: Product1Des,
            },
            {
                original: Product1Cover,
                thumbnail: Product1Cover,
            },
        ],
    }

    return (
        <>
            <div className="container">
                <div className="product-overview">
                    <div className="row">
                        <div className="back" data-aos="fade-right">
                            <button><a href="/"><MdKeyboardBackspace />Back</a></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div data-aos="zoom-in">
                                <ImageGallery className="ImageSlider"
                                    showBullets={false}
                                    showFullscreenButton={false}
                                    showPlayButton={false}
                                    items={productDetailItem.images}
                                    showNav={false}
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="right-content" data-aos="fade-left">
                                <h1>Wagner VG 150 Industrial Oil</h1>
                                <p>WAGNER EVOMAX SAE 0W-16 API
                                    is formulated with
                                    synthetic base oils and highly advanced additives Especially
                                    designed for small block high output gasoline engines. API
                                    SN technology ensures maximum resistance to low speed
                                    pre-ignition (LSPI) events and for long service life</p>
                                <div className="overview">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <h6>Application :</h6>
                                            <h6>Industry :</h6>
                                            <h6>Category :</h6>
                                        </div>
                                        <div className="col-lg-7 type">
                                            <h6>Passenger Cars</h6>
                                            <h6>Engine Oil</h6>
                                            <h6>High-tech Additives</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="sizes-itemno">
                                    <h6><b>Available sizes:</b>1L, 4L, 5L, 20L, 208 Drum</h6>
                                    <h6><b>Item no:</b>#EN128001</h6>
                                </div>
                                <div className="button">
                                    <div className="common-btn">
                                        <a href="/">
                                            <button>Buy Now</button>
                                        </a>
                                    </div>
                                    <div className="common-border-btn">
                                        <button>Shop on External site<GoArrowUpRight className='icon' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-overview-contents">
                <div className="container">
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
                                Applications
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
                                Properties
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
                                Approvals & Recommendation
                            </button>
                            <button
                                className="nav-link"
                                id="nav-packing-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-packing"
                                type="button"
                                role="tab"
                                aria-controls="nav-packing"
                                aria-selected="false"
                            >
                                Packing & Item No
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
                        ><p><VscDebugBreakpointLog className='icon' />Fully Synthetic SAE 0W-16 Engine
                            Oil is recommended for passenger
                            cars, light trucks that are gasoline
                            powered. Particularly suitable for
                            engines to prevent low-speed
                            pre-ignition issues.</p><p><VscDebugBreakpointLog className='icon' />
                                With exceptionally high shear
                                stability, this oil is made for todays
                                Suitable for all gasoline powered
                                cars with or without a TWC and
                                turbo</p></div>
                        <div
                            className="tab-pane fade"
                            id="nav-specifications"
                            role="tabpanel"
                            aria-labelledby="nav-specifications-tab"
                            data-aos="fade-up"
                        >
                            <p><VscDebugBreakpointLog className='icon' />Excellent engine cleanliness
                                through advanced soot
                                handling technology.</p>
                            <p> <VscDebugBreakpointLog className='icon' />Superior protection against
                                corrosive wear helps in
                                sustaining engine durability.
                            </p>
                            <p><VscDebugBreakpointLog className='icon' /> Excellent TBN retention helps
                                in countering harmful effects
                                of corrosive exhaust gases
                                and extending oil life</p>
                            <p><VscDebugBreakpointLog className='icon' />All season gasoline engine oil</p>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-product"
                            role="tabpanel"
                            aria-labelledby="nav-product-tab"
                            data-aos="fade-up"
                        >
                            <h3>API SN</h3>
                            <br />
                            <p><VscDebugBreakpointLog className='icon' />Mazda <VscDebugBreakpointLog className='icon' />Nissan <VscDebugBreakpointLog className='icon' />Honda <VscDebugBreakpointLog className='icon' />Toyota</p>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="nav-packing"
                            role="tabpanel"
                            aria-labelledby="nav-packing-tab"
                            data-aos="fade-up"
                        >
                            <table className='table'>
                                <tr>
                                    <th>Packing</th>
                                    <th>Item No</th>
                                </tr>
                                <tr>
                                    <td>1L Plastic</td>
                                    <td>EN128001</td>
                                </tr>
                                <tr>
                                    <td>4L Plastic</td>
                                    <td>EN128004</td>
                                </tr>
                                <tr>
                                    <td>5L Plastic</td>
                                    <td>EN128005</td>
                                </tr>
                                <tr>
                                    <td>20L Plastic</td>
                                    <td>EN128020</td>
                                </tr>
                                <tr>
                                    <td>208 Drum Plastic</td>
                                    <td>EN128200</td>
                                </tr>
                            </table>
                        </div>


                    </div>
                </div>
            </div >

            <div className="related-products space product-section product-page-section">
                <div className="container">
                    <div className="row">
                        <div className="main-title">
                            <div className="title-content title-content-all left-title">
                                <div className="title" data-aos="fade-right">
                                    <h1>Related Products</h1>
                                </div>
                            </div>
                            <div className="title-btn" data-aos="fade-left">
                                <div className="common-border-btn">
                                    <button>View all<GoArrowUpRight className='icon' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row products">
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
        </>
    )
}

export default ProductDetails