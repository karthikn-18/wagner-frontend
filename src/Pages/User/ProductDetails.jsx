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
import { useProductGetSingleIdQuery } from '../../query/useQuery';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const params = useParams()

    const { data } = useProductGetSingleIdQuery(params.id);
    console.log(data, "data");

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
                                <h1>{data?.data?.data?.name}</h1>
                                <p>{data?.data?.data?.description}</p>
                                <div className="overview">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <h6>Application:</h6>
                                            <h6>Industry:</h6>
                                            <h6>Category:</h6>
                                        </div>

                                        <div className="col-lg-7 type">
                                            {data?.data?.data?.applications?.length > 0 ? (
                                                <h6 className='flex flex-wrap'>
                                                    {data.data.data.applications.map((item) => item.name).join(", ")}
                                                </h6>
                                            ) : (
                                                <h6>Not Available</h6>
                                            )}

                                            {data?.data?.data?.industries?.length > 0 ? (
                                                <h6 className='flex flex-wrap'>
                                                    {data.data.data.industries.map((item) => item.name).join(", ")}
                                                </h6>
                                            ) : (
                                                <h6>Not Available</h6>
                                            )}

                                            {data?.data?.data?.category?.name ? (
                                                <h6>{data.data.data.category.name}</h6>
                                            ) : (
                                                <h6>Not Available</h6>
                                            )}
                                        </div>
                                    </div>


                                </div>
                                <div className="sizes-itemno">
                                    <h6><b>Available sizes:</b>{data?.data?.data?.availableSizes}</h6>
                                    <h6><b>Item no:</b>#EN128001</h6>
                                </div>
                                <div className="button">
                                    <div className="common-btn">
                                        <a href={data?.data?.data?.buyExternalLinks?.main} target="_blank">
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
                        >

                            {
                                data?.data?.data?.applicationInfo?.length > 0 ? (
                                    data.data.data.applicationInfo.map((item) => (
                                        <p className='flex'><VscDebugBreakpointLog className='icon' />
                                            {item}
                                        </p>

                                    ))
                                ) : (
                                    <h6>Not Available</h6>
                                )
                            }

                        </div>

                        <div
                            className="tab-pane fade"
                            id="nav-specifications"
                            role="tabpanel"
                            aria-labelledby="nav-specifications-tab"
                            data-aos="fade-up"
                        >
                            {
                                data?.data?.data?.properties?.length > 0 ? (
                                    data.data.data.properties.map((item) => (
                                        <p className='flex'><VscDebugBreakpointLog className='icon' />
                                            {item}
                                        </p>

                                    ))
                                ) : (
                                    <h6>Not Available</h6>
                                )
                            }
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
                                {
                                    data?.data?.data?.packageInfo?.length > 0 ? (
                                        data.data.data.packageInfo.map((item) => (
                                            < tr >
                                                <td>{item?.packing}</td>
                                                <td>{item?.itemNo}</td>
                                            </tr>

                                        ))
                                    ) : ""
                                }
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