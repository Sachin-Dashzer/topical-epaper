import React from 'react'
import ShortBanner from '../../components/ShortBanner'
import UpdateImg from '../../assets/newspapers.jpg'

const Updates = () => {
  return (
    <>
    
        <ShortBanner name="New Updates" />


        <section className="updates">
            <div className="containerFull">
                <div className="updateBox">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="updateImg">
                                <img src={UpdateImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="updateContent">
                                <h3 className="heading fontWeight700">Lorem, ipsum dolor.</h3>
                                <p className='text text-center mt-3 fontWeight400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus ullam voluptatibus quaerat quisquam cum? Quasi unde voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam molestiae.adipisicing elit. Atque repellendus ullam voluptatibus quaerat quisquam cum? Quasi unde voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam molestiae. Maiores!</p>
                                <a href='#' className='btnTheme text-white py-1 text px-1 mt-3 mx-auto'><span>Download Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="updateBox">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="updateImg">
                                <img src={UpdateImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="updateContent">
                                <h3 className="heading fontWeight700">Lorem, ipsum dolor.</h3>
                                <p className='text text-center mt-3 fontWeight400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus ullam voluptatibus quaerat quisquam cum? Quasi unde voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam molestiae.adipisicing elit. Atque repellendus ullam voluptatibus quaerat quisquam cum? Quasi unde voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam voluptate aspernatur eaque quaerat, natus quam! Aliquid sequi quae facilis quibusdam molestiae. Maiores!</p>
                                <a href='#' className='btnTheme text-white py-1 text px-1 mt-3 mx-auto'><span>Download Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
    
    </>
  )
}

export default Updates