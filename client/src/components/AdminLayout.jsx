import React, { useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import { logoutUser } from '../store/authStore/index.js'
import { useDispatch } from 'react-redux'
import Logo from "../assets/logo.png"


const layout = () => {

    const [active, setActive] = useState(false)

    const dispatch = useDispatch()


    const logoutAdmin = () => {
        dispatch(logoutUser())
    }

    return (
        <>

            <div className="adminLayout w-100 bg-light">

                <div className="adminNavBar d-md-none w-100 text-white pe-4 ps-3 d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1 className="heading fontWeight700 font-heading fontWeight900">

                            <a href="/" className='text-primary'><img src={Logo} loading="lazy" alt="" /> Topical Epaper</a></h1>
                    </div>

                    <span>
                        <i onClick={() => setActive(!active)} className="fa-solid fa-bars"></i>
                    </span>
                </div>


                <div className=" w-full row ">




                    <div className="col-lg-3">

                        <div className={`admin-sidebar bg-primary ${(active) ? "activeSidebar" : ""}`}>


                            <span onClick={() => setActive(!active)} className='cancelsidebar d-md-none'>
                                <i className="fa-solid fa-xmark"></i>
                            </span>



                            <div className="d-flex flex-column p-4 pt-md-5 ">

                                <a href='/' className="d-flex align-items-center mb-2 ps-3 logo " >

                                    <h1 className="heading mb-0 text-white font-heading fontWeight900"><img src={Logo} loading="lazy" alt="" /> Topical Epaper</h1>

                                </a>


                                <div className="flex-grow-1 p-md-4 px-2 pt-4">



                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink onClick={() => setActive(!active)} to="/admin/newspapers" className={({ isActive }) => (isActive ? 'active' : '')}>
                                            <i className="fas fa-folder-open me-2"></i>
                                            <span>Newspapers</span>
                                        </NavLink>
                                    </div>
                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink onClick={() => setActive(!active)} to="/admin/add-newspaper" className={({ isActive }) => (isActive ? 'active' : '')}>

                                            <i className="fas fa-tasks me-2"></i>
                                            <span>Add Newspapers</span>
                                        </NavLink>
                                    </div>


                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink onClick={() => setActive(!active)} to="/admin/adminusers" className={({ isActive }) => (isActive ? 'active' : '')}>
                                            <i className="fa-solid fa-user"></i>                                            <span>AdminUser</span>
                                        </NavLink>
                                    </div>
                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink onClick={() => setActive(!active)} to="/admin/add-adminusers" className={({ isActive }) => (isActive ? 'active' : '')}>
                                            <i className="fa-solid fa-user-plus"></i>
                                            <span>Add Adminusers</span>
                                        </NavLink>
                                    </div>


                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink to="/admin" className='bg-transparent' onClick={logoutAdmin}>
                                            <i className="fas fa-briefcase me-2"></i>
                                            <span>LogOut</span>
                                        </NavLink>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='col-lg-9 px-4'>
                        <div className="d-flex align-items-center flex-column min-vh-100">

                            {/* <div className="adminHeader text-center py-4">
                                <h3 className="large_heading fontWeight700 font-heading" style={{textDecoration : "underline" , letterSpacing : "2px"}}>Admin Pages</h3>

                            </div> */}

                            <div className='w-100 pt-5 pt-md-0 adminChlidren'>
                                <Outlet />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default layout