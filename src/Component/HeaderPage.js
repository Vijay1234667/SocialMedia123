import React from 'react'
import { Container } from 'react-bootstrap'
import BannerProfileDetails from './BannerProfileDetails'
import BannerProfileTabs from './BannerProfileTabs'

const HeaderPage = () => {
    return (
        <>
            <section className='banner-section'>
                <Container>
                    <div className='banner-bg-cover rounded-radius-md'></div>
                </Container>
            </section>
            <BannerProfileDetails/>
            <BannerProfileTabs/>
        </>
    )
}

export default HeaderPage
