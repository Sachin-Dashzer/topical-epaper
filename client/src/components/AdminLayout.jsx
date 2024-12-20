import React, { useEffect, useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import { logoutUser } from '../store/authStore/index.js'
import {useDispatch} from 'react-redux'

const layout = () => {

    const dispatch = useDispatch()



    const logoutAdmin = () => {
        dispatch(logoutUser())
    }

    return (
        <>

            <div className="adminLayout bg-light">
                <div className=" w-full row ">

                    <div className="col-lg-3">

                        <div className="admin-sidebar bg-primary">

                            <div className="d-flex flex-column  p-4 pt-5">

                                <div className="d-flex align-items-center mb-2 logo" >
                                    <div className="d-flex justify-content-center align-items-center bg-dark rounded-circle" style={{ width: '40px', height: '40px' }}>
                                        <i className="fas fa-cloud text-white"></i>
                                    </div>
                                    <h1 className="heading ms-3 mb-0 text-dark font-heading fontWeight900">Topical Epaper</h1>
                                </div>


                                <div className="flex-grow-1 mt-2 p-4">

                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
                                            <i className="fas fa-tachometer-alt me-2"></i>
                                            <span>Dashboard</span>
                                        </NavLink>
                                    </div>


                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink to="/admin/newspapers" className={({ isActive }) => (isActive ? 'active' : '')}>
                                            <i className="fas fa-folder-open me-2"></i>
                                            <span>Newspapers</span>
                                        </NavLink>
                                    </div>


                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink to="/admin/adminusers" className={({ isActive }) => (isActive ? 'active' : '')}>
                                            <i className="fas fa-tasks me-2"></i>
                                            <span>AdminUser</span>
                                        </NavLink>
                                    </div>


                                    <div className="adminLinks d-flex align-items-center cursor-pointer">

                                        <NavLink to="/admin/logout" className={({ isActive }) => (isActive ? 'active' : '')} onClick={logoutAdmin}>
                                            <i className="fas fa-briefcase me-2"></i>
                                            <span>LogOut</span>
                                        </NavLink>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='col-lg-9'>
                        <div className="d-flex align-items-center flex-column min-vh-100">

                            {/* <div className="adminHeader text-center py-4">
                                <h3 className="large_heading fontWeight700 font-heading" style={{textDecoration : "underline" , letterSpacing : "2px"}}>Admin Pages</h3>

                            </div> */}

                            <div className='w-100'>
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