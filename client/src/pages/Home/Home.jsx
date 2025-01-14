import React from 'react'


import { Suspense, lazy } from 'react';
const HeroBanner = lazy(() => import('./HeroBanner.jsx'));

// In parent component


import LatestUploads from './LatestUploads.jsx'
import AboutDetails from './AboutDetails'
import CallToAction from './CallToAction.jsx'
import Form from './Form.jsx'
import Textslider from './Textslider.jsx'

const Home = () => {
    return (
        <>
            <Suspense fallback={<div className="hero-section" />}>
                <HeroBanner />
            </Suspense>
            <LatestUploads />
            {/* <AboutDetails /> */}
            <CallToAction />
            <Textslider />
            <Form />



        </>

    )
}

export default Home