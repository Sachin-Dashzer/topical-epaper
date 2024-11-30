import React from 'react'
import {NavLink , Link} from 'react-router-dom'

const Header = () => {
    return (

        <header className='w-100'>
                <div className="topHeader py-1 w-100">

                    <h6 className="font-heading text-center">Get Exclusive News papers. just in time</h6>
                    <div className="navSocialLinks">
                        <ul className='d-flex gap-4'>
                            <li>
                                <a href="#" className='title text-white'><i className="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#" className='title text-white'><i className="fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li>
                                <a href="#" className='title text-white'><i className="fa-brands fa-x-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className='title text-white'><i className="fa-brands fa-telegram"></i></a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
                <nav className='d-flex justify-content-between align-items-center'>

                    <div className="logo">
                        <h1 className="large-heading font-heading fontWeight800">Topical Epapers</h1>
                    </div>
                    <div className="navLinks">

                        <ul className='d-flex gap-5'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>Latest News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/course" className={({ isActive }) => (isActive ? 'active' : '')}>Updates</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact us</NavLink>
                            </li>
                        </ul>

                    </div>

                </nav>
        </header>


    )
}

export default Header