import React from 'react';

const Form = () => {
    return (
        <div className='overflow-hidden'>
            <div className="row Contact-form ">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.897969945!2d77.04417211070437!3d28.527554409214392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1733112562826!5m2!1sen!2sin"
                        style={{ border: 0, width: "100%", height: "580px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center px-md-5">
                    <div className="container px-md-5 px-3">
                        <div className='pb-5 pb-md-0'>
                                <h3 className="heading fontWeight700 text-primary font-heading mb-md-5 mb-4 text-md-center mt-4">Get a Quote</h3>
                            
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


                                        <div className="mb-md-3 mb-2 col-6">
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


                                        <div className="mb-md-3 mb-2 col-6">
                                            <label htmlFor="date" className="form-label">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="date"
                                                required
                                            />
                                        </div>


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
            </div>
        </div>

    );
};

export default Form;
