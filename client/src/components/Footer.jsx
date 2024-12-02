import React from 'react'

const Footer = () => {
    return (
        <footer className='w-100'>
            <div className="containerFull py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footerlogo">
                            <h1 className='text-primary fontWeight900 mb-md-3 mb-2 '>Topical-Epaper</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sunt architecto neque ipsum earum corrupti! Necessitatibus error voluptate laboriosam eum non nam, ratione doloremque amet ullam, eaque aliquid cumque libero!</p>
                        </div>
                    </div>
                    <div className="col-sm-7 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Hot Links</h5>
                                <ul className='ms-1'>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Home</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>About</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Latest news</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Updates</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Contact</a></li>
                                </ul>

                            </div>
                            <div className="col-lg-4 col-6">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Newspapers</h5>
                                <ul className='ms-1'>

                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>02-11-2024</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>01-11-2024</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>30-10-2024</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>29-10-2024</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>28-10-2024</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Contact</h5>
                                <ul className='ms-1'>
                                    <li className='mt-2 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Address :</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
                                    </li>
                                    <li className='mt-2 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Email :</span>topical@info.in</h6>
                                    </li>
                                    <li className='mt-2 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Phone :</span>+123 456 7899</h6>

                                    </li>
                                    <li className='mt-1 text fontWeight500'>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-section d-flex justify-content-between bg-primary text-white px-md-5 px-2 py-2 align-items-center mt-md-2">
                <div>
                    <h6>@All right reserved to Topical Epaper</h6>
                </div>
                <div className="text-end">
                    <div className="d-flex gap-md-4 gap-2 justify-content-end">
                        <a href="#" className='text-white title'><i className="fa-brands fa-instagram "></i></a>
                        <a href="#" className='text-white title'><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className='text-white title'><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer