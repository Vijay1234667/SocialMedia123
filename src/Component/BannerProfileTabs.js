import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const BannerProfileTabs = () => {
    return (
        <>
            <section >
                <Container>
                    <div className='bannerprofiletabs d-flex' >
                        <NavLink to="/post">
                            <button className='btn border-0 border-end'>Posts</button>
                        </NavLink>
                        <NavLink to="/about">
                            <button className='btn border-0 border-end'>About</button>
                        </NavLink>
                        <NavLink to="/photos">
                            <button className='btn border-0 border-end'>Photos</button>
                        </NavLink>
                        <NavLink to="/connections">
                            <button className='btn border-0'>Connection</button>
                        </NavLink>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BannerProfileTabs
