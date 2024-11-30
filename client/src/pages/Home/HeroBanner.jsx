import React from 'react'
import video from '../../assets/banner-video.mp4'

const HeroBanner = () => {
  return (

    <div className='heroBanner'>

      <div className="heroBox">


        <div className="heroVideo">
          <div className="video">

            <video src={video} autoPlay muted loop></video>
          </div>
        </div>

        <div className='heroContent'>
          <h1 className='large_heading fontWeight800'>"Breaking News, Fresh Perspectives – <br />  All in One Place!"
          </h1>
          <h3 className="fontWeight400 mt-2 mb-2">Simplifying your daily news reading experience.</h3>

          <div className="bannerBtns d-flex align-items-center justify-content-center ">
          <button className="btnTheme mx-3 "><span className='text fontWeight400'>Read News</span></button>
          <button className="btnTheme mx-3 "><span className='text fontWeight400'>Download Newspapers</span></button>
        </div>
        </div>

      </div>

    </div>


  )
}

export default HeroBanner