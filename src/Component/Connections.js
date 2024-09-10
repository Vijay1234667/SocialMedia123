import React from 'react'
import HeaderPage from './HeaderPage'
import NavUser from './assets/NavUser.jpg';
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Dropdown from 'react-bootstrap/Dropdown';



import { Container } from 'react-bootstrap'
import VerticleNavTabs from './VerticleNavTabs'

const Connections = () => {
    return (
        <>
            <section>
                <Container>
                    <HeaderPage />
                    <div className="row">
                        <div className="col-lg-3">
                            <VerticleNavTabs />
                        </div>
                        <div className="col-lg-9">
                            <div className="row gap-3">
                                <div className="col-lg-3 card mb-3">
                                    <img src={NavUser} className='img-fluid rounded-radius-sm mb-2' alt="" />
                                    <div className='d-flex justify-content-between'>
                                        <button className='add-friend-btn bg-info-color'>Add Friend</button>
                                        <div><button><Dropdown>
                                            <Dropdown.Toggle >
                                                <MoreHorizOutlinedIcon />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>UnFriend</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Connections
