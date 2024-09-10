import React from 'react'
import { useUserContext } from './Context/UsersContext';
import NavUser from './assets/NavUser.jpg';
import { NavLink } from 'react-router-dom';



const UserProfile = () => {
    const { handleFollowClick, isFollowing, followers } = useUserContext();

    return (
        <>
            <div className='d-flex align-items-center'>
                <img src={NavUser} className='img-fluid current-user-profile rounded-radius-md' alt="user" />
                <div className='ms-2'>
                    <h3 className='font-size-18 font-weight-500'>UserName</h3>
                    <span className='font-size-14'> 0 Followers</span> <span className='font-size-14 ms-2'>{followers} Following</span>
                    <NavLink className='text-center mt-2 d-block'>
                        <button
                            onClick={handleFollowClick}
                            className='gradient-btn font-size-15 font-weight-600'
                        >
                            {isFollowing ? 'Unfollow' : 'Follow'}
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default UserProfile
