import React from "react";
import { Container, NavLink } from "react-bootstrap";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const AboutBio = () => {
    return (
        <>
            <section className="mt-4">
                <Container>
                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptates, natus?
                                </p>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h5 className="font-size-18 font-weight-400">
                                            <CodeOutlinedIcon className="me-2" />
                                            Developer
                                        </h5>
                                    </div>
                                    <div>
                                        <PublicOutlinedIcon className="me-2" />
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h5 className="font-size-18 font-weight-400">
                                            <SchoolOutlinedIcon className="me-2" />
                                            Master's degree
                                        </h5>
                                    </div>
                                    <div>
                                        <PublicOutlinedIcon className="me-2" />
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h5 className="font-size-18 font-weight-400">
                                            <EmailOutlinedIcon className="me-2" />
                                            test@mail.com
                                        </h5>
                                    </div>
                                    <div>
                                        <PublicOutlinedIcon className="me-2" />
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h5 className="font-size-18 font-weight-400">
                                            <MyLocationOutlinedIcon className="me-2" />
                                            www.wisoky.com
                                        </h5>
                                    </div>
                                    <div>
                                        <PublicOutlinedIcon className="me-2" />
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h5 className="font-size-18 font-weight-400">
                                            <AddIcCallOutlinedIcon className="me-2" />
                                            (316) 555-0116
                                        </h5>
                                    </div>
                                    <div>
                                        <PublicOutlinedIcon className="me-2" />
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h5 className="font-size-18 font-weight-400">
                                            <AddLocationAltOutlinedIcon className="me-2" />
                                            Mumbai
                                        </h5>
                                    </div>
                                    <div>
                                        <PublicOutlinedIcon className="me-2" />
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <h5 className="font-size-18 font-weight-400">
                                            <BusinessOutlinedIcon className="me-2" />
                                            775 Rolling Green Rd.
                                        </h5>
                                    </div>
                                    <div>
                                        <PublicOutlinedIcon className="me-2" />
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h4 className=" font-size-18 font-weight-600">About</h4>
                            <p className="font-size-14">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos illo asperiores nostrum hic, numquam architecto aut delectus quia amet iusto voluptatem.
                            </p>
                            <NavLink className="">
                                <button className="normal-btn w-50 font-size-14"> Edit Bio</button>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default AboutBio;
