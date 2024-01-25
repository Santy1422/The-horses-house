import { Footer } from '@/components/landingReusableComponents/Footer'
import { Header } from '@/components/landingReusableComponents/Header'
import FreeTrialSection from '@/components/landingpageComponents/FreeTrialSection'
import React from 'react'

const index = () => {
    return (
        <>
            <Header variant='fixed' />

            <FreeTrialSection />
            <Footer />
        </>
    )
}

export default index