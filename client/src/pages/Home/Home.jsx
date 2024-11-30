import React from 'react'
import HeroBanner from './HeroBanner'
import LatestUploads from './LatestUploads.jsx'
import AboutDetails from './AboutDetails'
import CallToAction from './CallToAction.jsx'

const Home = () => {
    return (
        <>
            <HeroBanner/>
            <LatestUploads />
            <AboutDetails />
            <CallToAction />
            

        </>

    )
}

export default Home