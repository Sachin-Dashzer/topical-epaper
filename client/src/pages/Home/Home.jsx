import React from 'react'
import HeroBanner from './HeroBanner'
import LatestUploads from './LatestUploads.jsx'
import AboutDetails from './AboutDetails'
import CallToAction from './CallToAction.jsx'
import Form from './Form.jsx'
import Textslider from './Textslider.jsx'

const Home = () => {
    return (
        <>
            <HeroBanner/>
            <LatestUploads />
            {/* <AboutDetails /> */}
            <CallToAction />
            <Textslider />
            <Form />
            
            

        </>

    )
}

export default Home