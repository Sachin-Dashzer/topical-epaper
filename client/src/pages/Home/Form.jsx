import React from 'react';
import Newpaper from '../../assets/call-to-aciton.jpg'

const Form = () => {
    return (
        <div className='contact-section'>
            <div className="row">
                <div className="col-lg-6">
                    <h2 style={{ color: "#f21616" }} className='text-center  mt-5 mb-5'>Forms</h2>
                    <input className='w-75 mb-3 p-1' type="text" name="" placeholder='Enter-name' id="" /><br />
                    <input className='m-2 p-1' type="text" name="" placeholder='Enter-name' id="" />
                    <input className='m-2 p-1' type="text" name="" placeholder='Enter-name' id="" /><br />
                    <input className='m-2 p-1' type="checkbox" />
                    <label htmlFor="">check these all</label>
                    <br />

                    <input style={{ backgroundColor: "#f21616" }} type="button" value='Submit' className='btn  mt-4   w-25' />
                    <p className='mt-4'>-----------------------------------Or------------------------------------</p>
                    <div className="icons mt-4">

                        <i style={{ marginRight: "20px", fontSize: "220%", color: "#f21616" }} class="fa-brands fa-twitter"></i>
                        <i style={{ marginRight: "20px", fontSize: "220%", color: "#f21616" }} class="fa-brands fa-facebook-f"></i>
                        <i style={{ marginRight: "20px", fontSize: "220%", color: "#f21616" }} class="fa-brands fa-instagram "></i>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={Newpaper} alt="newspaper" className='w-100 h-100' />
                </div>
            </div>
        </div >
    );
};

export default Form;
