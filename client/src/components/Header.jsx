import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuBox, setMenuBox] = useState(false);

    useEffect(() => {
        AOS.init();
        window.addEventListener("load", () => AOS.refresh());

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`stricky ${isSticky ? "stricky-fixed" : ""}`}>
                <div className="topHeader py-1 w-100">
                    <p className="font-heading text-center">
                        Stay ahead with exclusive newspapers, right when you need them.
                    </p>
                </div>
                <nav className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1 className="large-heading">
                            <a href="/" className="text-white">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    loading="eager"
                                    decoding="async"
                                    width="120"
                                    height="60"
                                />
                                Topical Epapers
                            </a>
                        </h1>
                    </div>
                    <button
                        onClick={() => setMenuBox(!menuBox)}
                        className="d-md-none small_heading border-0 bg-transparent"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>

                {menuBox && (
                    <div className="offCanvasBox bg-light shadow">
                        <div className="offcanvas-header">
                            <div className="w-100 d-flex px-3 py-4 justify-content-between">
                                <h1 className="heading font-heading">
                                    <a href="/" className="text-dark fontWeight800">
                                        <img
                                            src={Logo}
                                            alt="Logo"
                                            loading="lazy"
                                            width="100"
                                            height="50"
                                        />
                                        Topical Epapers
                                    </a>
                                </h1>
                                <button
                                    className="sub_heading border-0 bg-transparent"
                                    onClick={() => setMenuBox(false)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="py-4 px-4">
                                <li>
                                    <NavLink
                                        onClick={() => setMenuBox(false)}
                                        to="/"
                                        className="text-dark small_heading fontWeight700 mt-3"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={() => setMenuBox(false)}
                                        to="/news"
                                        className="text-dark small_heading fontWeight700 mt-3"
                                    >
                                        PSC Resources
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={() => setMenuBox(false)}
                                        to="/updates"
                                        className="text-dark small_heading fontWeight700 mt-3"
                                    >
                                        PSC News
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={() => setMenuBox(false)}
                                        to="/blog"
                                        className="text-dark small_heading fontWeight700 mt-3"
                                    >
                                        PSC Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={() => setMenuBox(false)}
                                        to="/about-us"
                                        className="text-dark small_heading fontWeight700 mt-3"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={() => setMenuBox(false)}
                                        to="/contact"
                                        className="text-dark small_heading fontWeight700 mt-3"
                                    >
                                        Contact us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
