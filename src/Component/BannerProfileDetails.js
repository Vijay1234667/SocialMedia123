import React from 'react';
import { Container, NavLink } from 'react-bootstrap';
import UserProfile from './UserProfile';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

const BannerProfileDetails = () => {
    
    return (
        <>
            <section className='bannerprofile-section mt-3'>
                <Container>
                    <div className='d-flex justify-content-between align-items-baseline'>
                        <UserProfile />
                        <div className='d-flex'>
                            <NavLink>
                                <button className='normal-btn rounded-radius-sm'><EditCalendarOutlinedIcon className='me-2'/>Edit Profile</button>
                            </NavLink>
                            <NavLink className='ms-3'>
                                <button className='normal-btn rounded-radius-sm'>---</button>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default BannerProfileDetails;
