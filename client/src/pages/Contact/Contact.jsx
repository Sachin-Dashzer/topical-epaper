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
                                    <i className="fa-brands fa-telegram"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className='small_heading fontWeight700 text-primary mt-1 mb-1'>Telegram</h3>
                                    <p>
                                        <a href='https://t.me/topicaleepaper' target="_blank" className='text-black'>Topical Epaper</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-2 my-md-0">
                            <div className="border-0 gap-3 justify-content-center d-flex">
                                <div className="card-icon" >
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="card-body">
                                <h3 className='small_heading fontWeight700 text-primary mt-1 mb-1'>WhatsApp</h3>
                                    <p>
                                        <a href='https://whatsapp.com/channel/0029VamePKH3QxRxg46zeW35' target="_blank" className='text-black'>Topical Epaper</a>
                                    </p>
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
                                    <p><a href="mailto:aavikthakur@gmail.com" className='text-black'>aavikthakur@gmail.com</a> </p>
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