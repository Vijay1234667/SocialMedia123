import React, { useState } from 'react';
import NavUser from './assets/NavUser.jpg';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useUserContext } from './Context/UsersContext';
import SendIcon from '@mui/icons-material/Send';

import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-bootstrap';


const UserCommentBox = () => {
    const [show, setShow] = useState(false);

    const { title, handleTitleChange, handleImageUpload, handleSubmit, imagePreview } = useUserContext();
    return (
        <>
            <div className='card border-0 rounded-radius-sm py-4 mb-5'>
                <div className='d-flex mb-4'>
                    <img src={NavUser} className='img-fluid rounded-radius-sm ms-3' width="60px" alt="NavUser" />
                    <div className='usercommentbox-input ms-5'>
                        <input type="text" value={title} onChange={handleTitleChange} className="form-control rounded-radius-sm" placeholder="Enter post title" id="floatingTextarea"></input>
                    </div>
                </div>
                <div className='d-flex justify-content-around'>
                    <label>
                        <AddPhotoAlternateOutlinedIcon className='green-color' />
                        <span className=' grey-color font-size-13 font-weight-500'>Add Photo/Video</span>
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            accept="image/*,video/*"
                            onChange={handleImageUpload}
                        />
                    </label>

                    <label>
                        <TagFacesOutlinedIcon className='yellow-color' />
                        <span className='grey-color font-size-13 font-weight-500'>Feelings/Activity</span>
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            accept="image/*,video/*"
                        />
                    </label>
                    <button onSubmit={handleSubmit} className='bg-primary-color text-white font-weight-600 font-size-14 px-2 py-1'>Add Post +</button>
                </div>
            </div>

            <div className='card px-1 py-2 bg-transparent'>
                {imagePreview && (
                    <div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center mb-2'>
                                <img src={NavUser} className='img-fluid rounded-circle  me-2' width="50px" alt="" />
                                <div className='ms-2'>
                                    <h4 className='font-size-18 font-weight-600 mb-0'>UserName</h4>
                                    <span className=' font-size-13 font-weight-500 primary-color'>Active</span>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => setShow(true)} className='bg-primary-color text-white font-size-12 px-2 py-1'>Edit Post</button>
                            </div>
                            <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                className='usereditbox-modal'
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                     <h4 className='font-size-18 font-weight-500'>Edit Post</h4>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form action="">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">UseName</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Username" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Profile</label>
                                            <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Post</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <input type="submit" class="form-control bg-black text-white" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <p className='font-size-14 font-weight-400'>consectetur, adipisicing elit. Consequuntur, sed?</p>
                        <img className='img-fluid mb-3' src={imagePreview} alt="Preview" />
                        <div className='d-flex justify-content-around align-items-center usercommentinput'>
                            <div>
                                <img src={NavUser} className='img-fluid rounded-circle  me-2' width="50px" alt="" />
                            </div>
                            <input type="text" placeholder='Write Comment Here' className='w-75 py-2 rounded-radius-md' name="" id="" />
                            <div>
                                <SendIcon className='info-color' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserCommentBox;
