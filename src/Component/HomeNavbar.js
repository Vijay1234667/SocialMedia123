import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useLocation } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import Logo from "./assets/Logo.png";
import NavUser from "./assets/NavUser.jpg";
import { Button } from "react-bootstrap";

const HomeNavbar = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  else {
    return (
      <>
        <Navbar expand="lg" className="shadow-md navbar">
          <Container>
            <Link>
              <img className="img-fluid" src={Logo} width="160" alt="Logo" />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto  my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink className="navchat-process-icon" to="/home">
                  <HomeOutlinedIcon className="fs-2 primary-color" />
                </NavLink>
                <NavLink className="navchat-process-icon" to="/messages">
                  <TextsmsOutlinedIcon className="fs-2 yellow-color" />
                </NavLink>
                <NavLink className="navchat-process-icon" to="/notification">
                  <NotificationsActiveOutlinedIcon className="fs-2 primary-color" />
                </NavLink>
                <NavLink className="navchat-process-icon" to="/feeds">
                  <OndemandVideoOutlinedIcon className="fs-2 red-color" />
                </NavLink>
              </Nav>
              <Button onClick={() => setShow(true)} className="navbarlive-user-body bg-transparent border-0">
                <img
                  src={NavUser}
                  className="img-fluid rounded-circle"
                  width="40"
                  alt="NavUser"
                />
                <span className="livegreen-circle"></span>
              </Button>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                className="HomeNavProfile"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex align-items-center">
                    <img src={NavUser} width="60px" className="img-fluid rounded-circle me-3" alt="" />
                    <div>
                      <h4 className="font-size-18 mb-0">UserName</h4>
                      <span className="font-size-14">Designation</span>
                      <div>
                        <NavLink to="/about" className=" add-friend-btn button-bg-color text-decoration-none text-white font-size-11 px-2 py-1">
                          View Profile
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3">
                    <NavLink to="/SettingPrivacy" className="font-size-15 text-decoration-none text-dark"><SettingsIcon className="me-1"/>Setting & Privacy</NavLink>
                  </div>
                  <div className=" mt-1">
                    <NavLink to="/" className="font-size-15 text-decoration-none text-dark"><LogoutIcon className="me-1" />Sign Out</NavLink>
                  </div>
                </Modal.Body>
              </Modal>
              <span className="ms-2 font-size-12">Welcome Username</span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
};

export default HomeNavbar;
