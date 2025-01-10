import React from 'react';
import ContactImg from '../../assets/contactImg.webp'

const Form = () => {
    return (
        <div className='overflow-hidden'>
            <div className="row Contact-form px-md-5  px-3">

                <div className="col-md-6 d-flex flex-column justify-content-center px-md-5">
                    <div className="container px-md-5">
                        <div className='pb-5 pb-md-0' data-aos="fade-right">
                            <h3 style={{textDecoration : 'underline'}} className="sub_heading fontWeight700 text-primary font-heading mb-4 mb-md-5 text-md-center mt-4">Request PSC Resources from Us </h3>

                            <div>
                                <form>
                                    <div className="row">
                                        <div className="mb-md-3 mb-2 col-6">
                                            <label htmlFor="name" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>


                                        <div className="mb-md-3 mb-2 col-6">
                                            <label htmlFor="phone" className="form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Enter your phone number"
                                                required
                                            />
                                        </div>


                                        <div className="mb-md-3 mb-2 col-12">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>


                                        {/* <div className="mb-md-3 mb-2 col-6">
                                            <label htmlFor="date" className="form-label">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="date"
                                                required
                                            />
                                        </div> */}


                                        <div className="mb-3 col-lg-12">
                                            <label htmlFor="message" className="form-label">
                                                Message
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                rows="4"
                                                placeholder="Write your message here..."
                                                required
                                            ></textarea>
                                        </div>


                                        <div className="d-grid">
                                            <button type="submit" className="btnTheme w-100 btn-primary">
                                                <span>Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">

                    <div
                        style={{ border: 0, width: "100%", height: "550px" }}
                        className='mb-4 contactImgBox'
                    >
                        <img src={ContactImg} loading="lazy" alt="" className='w-100 h-100 object-fit-cover' />

                    </div>

                </div>



            </div>
        </div>

    );
};

export default Form;
