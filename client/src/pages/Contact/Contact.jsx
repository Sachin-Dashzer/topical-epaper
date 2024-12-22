import React from 'react'
import ShortBanner from '../../components/ShortBanner'
import Form from '../Home/Form'

const Contact = () => {
    return (

        <>


            <ShortBanner name="Contact us" />

            <section className="contact-icons bg-light">
                <div className="container">
                    <div className="row ps-md-5">
                        <div className="col-md-4 my-2 my-md-0">
                            <div className="border-0 gap-3 justify-content-center d-flex">
                                <div className="card-icon" >
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className='small_heading fontWeight700 text-primary mt-1 mb-1'>Address</h3>
                                    <p>123 Street Name, City, England</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-2 my-md-0">
                            <div className="border-0 gap-3 justify-content-center d-flex">
                                <div className="card-icon" >
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className='small_heading fontWeight700 text-primary mt-1 mb-1'>Phone</h3>
                                    <p>+123 456 789</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-2 my-md-0">
                            <div className="border-0 gap-3 justify-content-center d-flex">
                                <div className="card-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className='small_heading fontWeight700 text-primary mt-1 mb-1'>Email</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >


            <Form />

        </>
    )
}

export default Contact