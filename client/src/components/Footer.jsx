import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFiles } from '../store/fileStore';
import Logo from "../assets/logo.png"


const Footer = () => {


    const [newspaper, setNewspaper] = useState([]);

    const dispatch = useDispatch()



    const getdata = async () => {

        dispatch(getFiles()).then((res) => {
            setNewspaper(res?.payload?.data)
        })
    }

    useEffect(() => {
        getdata()
    }, [])



    return (
        <footer className='w-100'>
            <div className="containerFull py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footerlogo">
                            <h1 className='text-primary fontWeight900 mb-md-3 mb-2 '><a href="/" className='text-primary'><img src={Logo} alt="" /> Topical-Epaper</a></h1>
                            <p>We bring you a wide variety of newspapers—local, national, and international—updated daily, so you never miss a headline. Whether you’re passionate about current events or simply enjoy the charm of a good read, our platform offers a seamless and accessible experience.</p>
                        </div>
                    </div>
                    <div className="col-sm-7 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Hot Links</h5>
                                <ul className='ms-1'>
                                    <li className='mt-1 text fontWeight500'><a href="/" className='text-dark'>Home</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="/about-us" className='text-dark'>About</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="/news" className='text-dark'>Latest news</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="/updates" className='text-dark'>Updates</a></li>
                                    <li className='mt-1 text fontWeight500'><a href="contact" className='text-dark'>Contact</a></li>
                                </ul>

                            </div>
                            <div className="col-lg-4 col-6">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Newspapers</h5>
                                <ul className='ms-1'>

                                    {
                                        newspaper.slice(0, 5).map((item, index) => {
                                            return (
                                                <li key={index} className='mt-1 text fontWeight500'>
                                                    <a href={`/news/${item._id}`} className='text-dark'>
                                                        {item.date}
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }


                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Contact</h5>
                                <ul className='ms-1'>
                                    <li className='mt-2 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Address :</span> ipsum, dolor sit amet consectetur adipisicing elit.</h6>
                                    </li>
                                    <li className='mt-3 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Email :</span>  <a href="mailto:aavikthakur@gmail.com" className='text-black'>aavikthakur@gmail.com</a> </h6>
                                    </li>
                                    <li className='mt-2 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Phone :</span>&nbsp; <a href="tel:+917974066478" className='text-black'> +91 79740 66478 </a></h6>

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
                        <a href='https://t.me/topicalepaper' target="_blank" className='title text-white'><i className="fa-brands fa-telegram"></i></a>
                        <a href='https://www.youtube.com/@skullrockgaming7865' target="_blank" className='title text-white'><i className="fa-brands fa-youtube"></i></a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer