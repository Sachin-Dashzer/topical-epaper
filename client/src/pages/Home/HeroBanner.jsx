import React from 'react'
// import video from '../../assets/banner-video.mp4'
// import LazyLoad from "react-lazyload";
import poster from '../../assets/call-to-aciton.webp'


const HeroBanner = () => {






  return (

    <div className='heroBanner '>

      <div className="heroBox">


        <div className="heroVideo">
          <div className="video">
           <img src={poster} loading='lazy' alt="" />
          </div>
        </div>

        <div className='heroContent pt-5 pt-md-0 px-3' data-aos-delay="300" data-aos="fade-up">
          <h1 className='large_heading fontWeight800'>"Fuel your preparation with the <br /> <span className='text-primary'>PSC Newspapers</span>, <br /> Magazines and  PSC related News <br /> <span className='text-primary'> – all in one place.</span>"
          </h1>
          {/* <h3 className="fontWeight400 mt-2 mb-2">Simplifying your daily news reading experience.</h3> */}

          <div className="bannerBtns d-flex align-items-center justify-content-center ">
            <a href='/news' className="btnTheme mx-md-3 "><span className='text fontWeight400'>PSC Resources</span></a>
            <a href='https://t.me/topicaleepaper ' target='_blank' className="btnTheme mx-3 "><span className='text fontWeight400'>Join Telegram</span></a>
          </div>
        </div>

      </div>

    </div>


  )
}

export default HeroBanner