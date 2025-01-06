import React from 'react'
import Telegram from '../../assets/telegram2.png'

const CallToAction = () => {
  return (

    <div className='callBg'>
      <div className="containerFUll">

            <div className='callContainer'>

              <div>
                <h1 className="large-heading font-heading fontWeight700">Stay Informed with 3M+ Readers on Telegram!</h1>
                <p className='title mt-3'>Love news? So do 3 million others! Join our Telegram channel for quick access to the latest updates and daily newspapers.</p>
                <a href='https://t.me/topicalepaper' target='_blank' className="btnTheme text mt-3 py-2 "> <span> Join now</span></a>
              </div>
              <div className='mt-2 mt-md-0'>
                <figure>
                  <img src={Telegram} loading="lazy" alt="" />
                </figure>
              </div>

            </div>
      </div>
    </div>
    
  )
}

export default CallToAction