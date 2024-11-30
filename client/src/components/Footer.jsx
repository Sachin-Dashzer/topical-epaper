import React from 'react'

const Footer = () => {
    return (
        <footer className='w-100 bg-light'>
            <div className="containerFull py-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="footerlogo">
                            <h1 className='text-primary fontWeight900 mb-3 '>Topical-Epaper</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sunt architecto neque ipsum earum corrupti! Necessitatibus error voluptate laboriosam eum non nam, ratione doloremque amet ullam, eaque aliquid cumque libero!</p>
                        </div>
                    </div>
                    <div className="col-sm-7 offset-1">
                        <div className="row">
                            <div className="col-sm-4">
                                <h5 className='text-primary fontWeight700 mb-3 title font-Heading'>Hot Links</h5>
                                <ul className='ms-1'>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Home</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>News</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Blogs</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Contact</a></li>
                                </ul>

                            </div>
                            <div className="col-sm-4">
                                <h5 className='text-primary fontWeight700 mb-3 title font-Heading'>More info</h5>
                                <ul className='ms-1'>

                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>How to Work</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>About us</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Sustanability</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Term&Conditions</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <h5 className='text-primary fontWeight700 mb-3 title font-Heading'>Customer Care</h5>
                                <ul className='ms-1'>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>FAQ</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Terms of Use</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Privacy Policy</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="#" className='text-dark'>Discount System</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between bg-primary text-white px-5 py-2 align-items-center mt-2">
                <div>
                    <h6>@All right reserved to Topical Epaper</h6>
                </div>
                <div className="text-end">
                    <div className="d-flex gap-4 justify-content-end">
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