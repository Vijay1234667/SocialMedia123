import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserCommentBox from './UserCommentBox'
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import VerticleNavTabs from './VerticleNavTabs'
import { useUserContext } from './Context/UsersContext'

const Posts = () => {
    const {imagePreview} = useUserContext();
    return (
        <>
            <section className='post-section mt-4'>
                <Container>
                    <div className="row">
                        <div className="col-lg-3 bg-white rounded-radius-sm py-2">
                            <h4 className='font-size-18 font-weight-600 mb-2'>Post</h4>
                            <p className='font-size-14 font-weight-400'>Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent.</p>
                            <Link href="/" className='text-decoration-none normal-btn d-block w-75 text-center font-size-14'><EditCalendarOutlinedIcon />Edit Bio
                            </Link>
                            <VerticleNavTabs/>
                        </div>
                        <div className="col-lg-6">
                            <UserCommentBox />
                        </div>
                        <div className="col-lg-3 ">
                            <div className="row">
                                <div className='d-flex justify-content-between align-items-baseline mb-2'>
                                    <h4 className='font-size-18 font-weight-600'>Photos</h4>
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <img src={imagePreview} className='img-fluid rounded-radius-sm' alt="postphoto1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Posts
