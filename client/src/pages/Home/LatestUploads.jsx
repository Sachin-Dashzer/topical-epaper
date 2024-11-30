import React from 'react'
import NewsImg from '../../assets/newspapers.jpg'

const LatestUploads = () => {
    return (
        <>

            <section>

                <div className="containerFull">
                    <h1 className="heading font-heading text-primary ms-3 fontWeight700">Recently uploaded</h1>

                    <div className="upload-carousel">
                        <div className="sliderContainer">
                            <div className="sliderBox">
                                <div className="sliderItems shadow">
                                    <div className="uploadsBox">
                                        <div className="uploadImg">
                                            <img src={NewsImg} alt="" />
                                        </div>
                                        <div className="uploadsDate">
                                            <h3 className='title fontWeight700 text-center'>22-11-2024</h3>
                                            <a href="#" className="mt-3">View <span><i className="fa-solid fa-eye"></i></span></a>
                                            <a href="#" className="mt-2">Download <span><i className="fa-solid fa-download"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sliderItems shadow">
                                    <div className="uploadsBox">
                                        <div className="uploadImg">
                                            <img src={NewsImg} alt="" />
                                        </div>
                                        <div className="uploadsDate">
                                            <h3 className='title fontWeight700 text-center'>22-11-2024</h3>
                                            <a href="#" className="mt-3">View <span><i className="fa-solid fa-eye"></i></span></a>
                                            <a href="#" className="mt-2">Download <span><i className="fa-solid fa-download"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sliderItems shadow">
                                    <div className="uploadsBox">
                                        <div className="uploadImg">
                                            <img src={NewsImg} alt="" />
                                        </div>
                                        <div className="uploadsDate">
                                            <h3 className='title fontWeight700 text-center'>22-11-2024</h3>
                                            <a href="#" className="mt-3">View <span><i className="fa-solid fa-eye"></i></span></a>
                                            <a href="#" className="mt-2">Download <span><i className="fa-solid fa-download"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sliderItems shadow">
                                    <div className="uploadsBox">
                                        <div className="uploadImg">
                                            <img src={NewsImg} alt="" />
                                        </div>
                                        <div className="uploadsDate">
                                            <h3 className='title fontWeight700 text-center'>22-11-2024</h3>
                                            <a href="#" className="mt-3">View <span><i className="fa-solid fa-eye"></i></span></a>
                                            <a href="#" className="mt-2">Download <span><i className="fa-solid fa-download"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sliderItems shadow">
                                    <div className="uploadsBox">
                                        <div className="uploadImg">
                                            <img src={NewsImg} alt="" />
                                        </div>
                                        <div className="uploadsDate">
                                            <h3 className='title fontWeight700 text-center'>22-11-2024</h3>
                                            <a href="#" className="mt-3">View <span><i className="fa-solid fa-eye"></i></span></a>
                                            <a href="#" className="mt-2">Download <span><i className="fa-solid fa-download"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}

export default LatestUploads