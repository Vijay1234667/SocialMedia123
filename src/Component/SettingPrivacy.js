import React from 'react'
import { Container } from 'react-bootstrap'

import NavUser from './assets/NavUser.jpg';



import UserProfile from './UserProfile'
import VerticleNavTabs from './VerticleNavTabs'
import { Link } from 'react-router-dom';

const SettingPrivacy = () => {
  return (
    <>
      <section>
        <Container>
          <div className="row mt-3">
            <div className="col-lg-4">
              <UserProfile />
              <div>
                <VerticleNavTabs />
              </div>
            </div>
            <div className="col-lg-8">
              <div className='mb-3'>
                <h3 className='font-size-18 font-weight-600 mb-3'>Setting</h3>
                <div>
                  <h4 className='font-size-14'>Profile Image</h4>
                  <img src={NavUser} className='img-fluid rounded mb-2 mx-auto ms-3' width="70px" alt="" />
                  <div>
                    <Link className='font-size-14 text-decoration-none bg-info-color text-white py-1 px-1  p-0'>Change Profile</Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='font-size-18 font-weight-600 mb-3'>Cover Image</h3>
                <div className='usercover-image mb-2'>
                </div>
                <div>
                  <Link className='font-size-14 text-decoration-none bg-info-color text-white py-1 px-1  p-0'>Change Cover Photo</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default SettingPrivacy
