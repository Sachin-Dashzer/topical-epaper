

import React from 'react'

const ShortBanner = (promps) => {
  return (
    <div className='shortBanner'>

        <div className="shortBannerBox"></div>

        <div className="shortBanner-Content">
            <h1 className='large_heading font-heading fontWeight800 text-center text-white pt-5'>{promps.name}</h1>
        </div>



    </div>
  )
}

export default ShortBanner