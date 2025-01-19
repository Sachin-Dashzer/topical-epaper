import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFiles } from '../store/fileStore';
import Logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom';

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
                    <div className="col-md-6">
                        <div className="footerlogo">
                            <h1 className='text-primary fontWeight900 mb-md-3 mb-2 '><a href="/" className='text-primary'>

                                <img src={Logo} loading="lazy" alt="" />

                                Topical-Epaper</a></h1>
                            {/* <p>"It all began when my brother and I noticed our sister, an MPPSC aspirant, spending her hard-earned money on newspapers. When we suggested switching to online newspapers, she, being less tech-savvy, found it difficult to access everything in one place. That’s when we decided to create a Telegram community to help students like her find newspapers easily. As the community grew, we started sharing magazines, books, and other valuable resources. Eventually, with the little earnings we made, we decided to build a website to make things even more convenient. And here we are today!".</p> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Hot Links</h5>
                                <ul className='ms-1'>
                                    <li>
                                        <NavLink to="/" className={"text-black mb-1"}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/news" className={"text-black mb-1"}>PSC Resources</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/updates" className={"text-black mb-1"}>PSC News</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className={"text-black mb-1"}>PSC Blogs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about-us" className={"text-black mb-1"}>About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className={"text-black mb-1"}>Request us</NavLink>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-3 col-6">
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
                            <div className="col-lg-5">
                                <h5 className='text-primary fontWeight700 mb-md-3 mb-2 mt-4 mt-md-0 title font-Heading'>Contact</h5>
                                <ul className='ms-1'>
                                    <li className='mt-2 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Address :</span> Sagar , Madhya Pardesh.</h6>
                                    </li>
                                    <li className='mt-3 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Email :</span>  <a href="mailto:thakuraavik@gmail.com" className='text-black'>thakuraavik@gmail.com</a> </h6>
                                    </li>
                                    <li className='mt-2 text fontWeight500'>
                                        <h6 className="text"><span className='fontWeight800 text-primary'>Phone :</span>&nbsp; <a href="" className='text-black'> </a></h6>

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
                    {/* <div className="d-flex gap-md-4 gap-2 justify-content-end">
                        <a href='https://t.me/topicaleepaper' target="_blank" className='title text-white'><i className="fa-brands fa-telegram"></i></a>
                        <a href='https://www.youtube.com/@skullrockgaming7865' target="_blank" className='title text-white'><i className="fa-brands fa-youtube"></i></a>

                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer