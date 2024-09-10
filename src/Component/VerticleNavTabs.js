import React from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { NavLink } from "react-router-dom";

const VerticleNavTabs = () => {
  return (
    <>
      <ul className="p-0 mt-3">
        <li className="mb-2 ">
          <NavLink className="text-decoration-none font-size-16 text-dark font-weight-400 ">
            <HomeOutlinedIcon className="me-3 fs-3 primary-color" />
            Home
          </NavLink>
        </li>
        <li className="mb-2 ">
          <NavLink
            to="/about"
            className="text-decoration-none font-size-16 text-dark font-weight-400"
          >
            <AccountCircleOutlinedIcon className="me-3 fs-3 yellow-color" />
            About
          </NavLink>
        </li>
        <li className="mb-2 ">
          <NavLink
            to="/post"
            className="text-decoration-none font-size-16 text-dark font-weight-400"
          >
            <OndemandVideoOutlinedIcon className="me-3 fs-3 red-color" />
            Post
          </NavLink>
        </li>
        <li className="mb-2 ">
          <NavLink
            to="/photos"
            className="text-decoration-none font-size-16 text-dark font-weight-400"
          >
            <AddPhotoAlternateOutlinedIcon className="me-3 fs-3 green-color" />
            Photos
          </NavLink>
        </li>
        <li className="mb-2 ">
          <NavLink to="/connections" className="text-decoration-none font-size-16 text-dark font-weight-400">
            <PersonAddAltOutlinedIcon className="me-3 info-color" />
            All Connections
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default VerticleNavTabs;
