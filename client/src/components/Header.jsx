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

        // Debounced Scroll Listener
        const debouncedScroll = debounce(handleScroll, 100);
        window.addEventListener("scroll", debouncedScroll);

        return () => {
            window.removeEventListener("scroll", debouncedScroll);
        };
    }, []);

    // Debounce Helper Function
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    return (
        <div>
            <header className={`stricky ${isSticky ? "stricky-fixed" : ""}`}>
                <div className="topHeader py-1 w-100">
                    <p className="font-heading text-center">
                        Stay ahead with exclusive newspapers, right when you need them.
                    </p>
                    <div className="navSocialLinks">
                        <ul className="d-flex gap-3">
                            <li>
                                <a
                                    href="https://t.me/topicaleepaper"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    <i className="fa-brands fa-telegram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@skullrockgaming7865"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://whatsapp.com/channel/0029VamePKH3QxRxg46zeW35"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1 className="large-heading">
                            <a href="/" className="text-white">
                                <img src={Logo} loading="lazy" alt="Logo" />
                                Topical Epapers
                            </a>
                        </h1>
                    </div>
                    <div className="navLinks">
                        {/* Desktop Menu */}
                        <ul className="d-md-flex d-none gap-4">
                            {["Home", "PSC Resources", "PSC News", "PSC Blogs", "About", "Contact"].map(
                                (item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            {item}
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuBox(!menuBox)}
                            className="d-md-none small_heading border-0 bg-transparent"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Offcanvas Menu */}
            {menuBox && (
                <div className="offCanvasBox bg-light shadow">
                    <div className="offcanvas-header d-flex justify-content-between px-3 py-4">
                        <h1 className="heading">
                            <a href="/" className="text-dark fontWeight800">
                                <img src={Logo} loading="lazy" alt="Logo" />
                                Topical Epapers
                            </a>
                        </h1>
                        <button
                            className="border-0 bg-transparent text-dark"
                            onClick={() => setMenuBox(false)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="py-4 px-3">
                            {["Home", "PSC Resources", "PSC News", "PSC Blogs", "About", "Contact"].map(
                                (item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            onClick={() => setMenuBox(false)}
                                            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="text-dark small_heading fontWeight700 mt-3"
                                        >
                                            {item}
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="offcanvas-footer bg-primary py-3">
                        <ul className="d-flex gap-3 justify-content-center">
                            <li>
                                <a
                                    href="https://t.me/topicaleepaper"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    <i className="fa-brands fa-telegram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@skullrockgaming7865"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://whatsapp.com/channel/0029VamePKH3QxRxg46zeW35"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
