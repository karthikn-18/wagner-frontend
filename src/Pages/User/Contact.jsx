import React from 'react'
import Ellipse1 from '../../assets/Resources/ellipse-1.png'
import Ellipse2 from '../../assets/Resources/ellipse-2.png'

const Contact = () => {
    return (
        <>
            <div className="breadcrumb contact-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content ">
                        <h1 data-aos="fade-right">Contact <span>Us</span></h1>
                        <p data-aos="fade-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
            </div>

            {/* <div className="contact-form space">
                <div className="container">
                    <div className="title-content title-content-all text-center">
                        <div className="title">
                            <h1>At Wagner German Oil, we produce premium oils and lubricants that meet the #1 & highest industry standards. With decades of expertise, we deliver reliable, sustainable products that power machines and engines worldwide.</h1>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="contact-form-main space">
                <div className="container ">
                    <div data-aos="fade-down">
                        <div className="contact-form">
                            <h1>Send a Message</h1>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='First Name' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='Last Name' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='Email' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='Phone Number' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='Type of Vehicle' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='Your Industry' />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" placeholder='Type of Consultation' />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="postContent" placeholder='Enter detailed message' rows={4} />
                                    </div>
                                </div>
                                <div className="common-btn ">
                                    <button>Submit</button>
                                </div>
                            </form>
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
        </>
    )
}

export default Contact