import React from 'react'
import Logo from '../assets/Resources/wagner-logo.svg'
import { LuInstagram } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import FooterMap from '../assets/Resources/footer-map.png'

const Footer = () => {
    return (
        <div className="footer-secction">
            <div className="container">
                <div className="top-footer">
                    <div className="left">
                        <h6 className='phone'>
                            +49 (0) 9085 96 00 9-10
                        </h6>
                        {/* <p>Monday - Friday 8am - 5pm</p> */}
                    </div>
                    <div className="right">
                        <h5>WAGNER Spezialschmierstoffe GmbH & Co. KG Speckbrodi 8 • 86759 Wechingen • GERMANY</h5>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="social-media">
                                <a href="https://www.instagram.com/wagnergermanoil/"><LuInstagram /></a>
                                <a href="https://www.youtube.com/c/WAGNERHighQualityLubricants"><AiOutlineYoutube /></a>
                                <a href="https://www.facebook.com/wagnergermanoil/"><SlSocialFacebook /></a>
                            </div>
                            <div className="mail">
                                <p>wagner@wagner-german-oil.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-menu">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="/about">About us</a></li>
                                    <li>Contact</li>
                                    <li>Blog</li>
                                    <li>Shop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-menu">
                                <h2>Best Seller</h2>
                                <ul>
                                    <li>WAGNER Classic Oil</li>
                                    <li>Benzin Power-Mix</li>
                                    <li>Octano Booster</li>
                                    <li>Micro-Ceramic</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="location">
                                <img src={FooterMap} alt="" />
                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.913615878769!2d10.63359497614717!3d48.87892329926178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798d57c78de9d0f%3A0xcb06f9c3fb75d18d!2sWAGNER%20Spezialschmierstoffe%20GmbH%20%26%20Co.%20KG!5e0!3m2!1sen!2sin!4v1733327082134!5m2!1sen!2sin"
                                    width="100%"
                                    height="150"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container">
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li>Data Protection Declaration</li>
                                <li>General Business Terms</li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li>Legal notice</li>
                                <li>Imprint</li>
                                <li>Revocation right for Consumers</li>
                            </ul>
                        </div>
                        <div className="right">
                            <h6>©2024 Wagner German Oil</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer