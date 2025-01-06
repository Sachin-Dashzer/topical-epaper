import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuBox, setMenuBox] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {

        AOS.init();
        window.addEventListener("load", () => AOS.refresh());


        const handleScroll = () => {
            const scrollPos = 100;
            const scrollTop = window.scrollY;

            if (scrollTop > scrollPos) {
                setIsSticky(true);
                setShowScrollTop(true);
            } else {
                setIsSticky(false);
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>

            <header className={`stricky ${isSticky ? "stricky-fixed" : ""}`}>
                <div className="topHeader py-md-1 w-100">

                    <p className="font-heading text-center">Stay ahed with exclusive newspapers, right when you need them.</p>
                    <div className="navSocialLinks">
                        {/* <ul className='d-flex gap-4'>
                            <li>
                                <a href='https://t.me/topicalepaper' target="_blank" className='title text-white'><i className="fa-brands fa-telegram"></i></a>
                            </li>

                            <li>
                                <a href='https://www.youtube.com/@skullrockgaming7865' target="_blank" className='title text-white'><i className="fa-brands fa-youtube"></i></a>
                            </li>
                        </ul> */}
                    </div>
                </div>
                <nav className='d-flex justify-content-between align-items-center'>

                    <div className="logo">
                        <h1 className="large-heading font-heading fontWeight800"> <a href="/" className="text-white"><img src={Logo} loading="lazy" alt="" />Topical Epapers</a></h1>
                    </div>
                    <div className="navLinks">

                        <ul className='d-md-flex d-none gap-5'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>PSC Resources</NavLink>
                            </li>
                            <li>
                                <NavLink to="/updates" className={({ isActive }) => (isActive ? 'active' : '')}>PSC News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className={""}>PSC Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Request us</NavLink>
                            </li>
                        </ul>

                        <div onClick={() => { setMenuBox(true) }} className="small_heading d-md-none">
                            <i className="fa-solid fa-bars"></i>
                        </div>

                    </div>

                </nav>
            </header>




            {/* 
            {showScrollTop && (
                <button
                    className="scroll-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        right: "20px",
                        display: "block",
                    }}
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )} */}






            <div className={`${menuBox ? '' : 'active'} offCanvasBox bg-light shadow`} >

                <div className="offcanvas-header">
                    <div className=" w-100 d-flex px-3 py-4 justify-content-between">
                        <h1 className="heading font-heading "> <a href="#" className="text-light fontWeight800"><img src={Logo} loading="lazy" alt="" /> Topical Epapers</a></h1>

                        <div className="sub_heading text-light pe-2" onClick={() => { setMenuBox(false) }}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>

                </div>
                <div className="offcanvas-body">
                    <ul className=' py-4 px-4'>
                        <li>
                            <NavLink onClick={() => { setMenuBox(false) }} to="/" className={'text-dark small_heading fontWeight700 mt-3'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => { setMenuBox(false) }} to="/news" className={'text-dark small_heading fontWeight700 mt-3'}>PSC Resources</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => { setMenuBox(false) }} to="/updates" className={'text-dark small_heading fontWeight700 mt-3'}>PSC News</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => { setMenuBox(false) }} to="/" >PSC Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => { setMenuBox(false) }} to="/about-us" className={'text-dark small_heading fontWeight700 mt-3'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => { setMenuBox(false) }} to="/contact" className={'text-dark small_heading fontWeight700 mt-3'}>Request us</NavLink>
                        </li>
                    </ul>

                </div>
                <div className="offcavas-footer bg-primary py-4 position-absolute w-100 bottom-0">
                    <ul className='d-flex gap-4 ps-4 pb-1 '>
                        <li>
                            <a href='https://t.me/topicalepaper' target="_blank" className='title text-white'><i className="fa-brands fa-telegram"></i></a>
                        </li>

                        <li>
                            <a href='https://www.youtube.com/@skullrockgaming7865' target="_blank" className='title text-white'><i className="fa-brands fa-youtube"></i></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;
