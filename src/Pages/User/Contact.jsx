import React, { useState } from 'react';
import Ellipse1 from '../../assets/Resources/ellipse-1.png';
import Ellipse2 from '../../assets/Resources/ellipse-2.png';
import { useAddContact } from '../../query/useMutation';
import ReCAPTCHA from 'react-google-recaptcha';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        typeOfVehicle: "",
        industry: "",
        typeOfConsultant: "",
        message: ""
    });
    const [captchaValue, setCaptchaValue] = useState(null);

    const { mutate, isPending } = useAddContact();

    const handleCloseFunction = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            typeOfVehicle: "",
            industry: "",
            typeOfConsultant: "",
            message: ""
        });
        setCaptchaValue(null);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaValue) {
            toast.error('Please verify CAPTCHA');
            return;
        }
        try {
            mutate({ data: formData, handleCloseFunction });
            console.log('Form submitted:', formData);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <div className="breadcrumb contact-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content ">
                        <h1>Contact <span>Us</span></h1>
                        <p>Have questions about ordering, invoices, shipping, or product advice? We're here to help! For lubricant guidance, our consultants are available—visit the form to connect.</p>
                    </div>
                </div>
            </div>

            <div className="contact-form-main space">
                <div className="container ">
                    <div className="contact-form">
                        <h1>Send a Message</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder='First Name'
                                        required
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder='Last Name'
                                        required
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Email'
                                        required
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        placeholder='Phone Number'
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        name="typeOfVehicle"
                                        value={formData.typeOfVehicle}
                                        onChange={handleChange}
                                        placeholder='Type of Vehicle'
                                        required
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        placeholder='Your Industry'
                                        required
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        name="typeOfConsultant"
                                        value={formData.typeOfConsultant}
                                        onChange={handleChange}
                                        placeholder='Type of Consultation'
                                        required
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Enter detailed message'
                                        rows={4}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <ReCAPTCHA
                                    sitekey="6LeZXLUqAAAAAHbA6t-VaWQVNJf6QKx2FVIbtJF_"
                                    size='normal'
                                    onChange={handleCaptchaChange}
                                />
                            </div>
                            <div className="common-btn ">
                                <button type="submit" disabled={isPending}> {
                                    isPending ?
                                        <>
                                            <Loader2 className="w-5 h-5" />  'Sending...'
                                        </> : "Submit"
                                } </button>
                            </div>
                        </form>
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
    );
}

export default Contact;
