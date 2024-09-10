import React from "react";
import { Container, NavLink } from "react-bootstrap";
import UserCommentBox from "./UserCommentBox";
import UserProfile from "./UserProfile";
import NavUser from './assets/NavUser.jpg';

import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import Slider2 from "../Component/assets/Slider2.jpg"
import Slider3 from "../Component/assets/Slider3.jpg"
import Slider4 from "../Component/assets/Slider4.jpg"
import Slider5 from "../Component/assets/Slider5.jpg"
import Slider6 from "../Component/assets/Slider6.jpg"



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';


import VerticleNavTabs from "./VerticleNavTabs";

const Home = () => {
  return (
    <>
      <section className="mt-3">
        <Container>
          <div className="row">
            <div className="col-lg-3">
              <h4 className="font-size-18 font-weight-600 mb-3">Profile</h4>
              <UserProfile />
              <VerticleNavTabs />
            </div>
            <div className="col-lg-6">
              <div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  hashNavigation={{
                    watchState: true,
                  }}
                  breakpoints={{
                    576: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation, HashNavigation]}
                  className="mySwiper"
                >
                  <SwiperSlide data-hash="slide1">
                    <div className="addstory-box">
                      <img src={Slider2} className="img-fluid rounded-radius-md" alt="Slider2" />
                      <NavLink className="add-new-story text-center">
                        <ControlPointOutlinedIcon className="fs-2" />
                        <span className="font-size-12 font-weight-500 d-block text-white">Add Story</span>
                      </NavLink>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide data-hash="slide1">
                    <img src={Slider3} className="img-fluid rounded-radius-md" alt="Slider2" />
                  </SwiperSlide>
                  <SwiperSlide data-hash="slide1">
                    <img src={Slider4} className="img-fluid rounded-radius-md" alt="Slider2" />
                  </SwiperSlide>
                  <SwiperSlide data-hash="slide1">
                    <img src={Slider5} className="img-fluid rounded-radius-md" alt="Slider2" />
                  </SwiperSlide>
                  <SwiperSlide data-hash="slide1">
                    <img src={Slider6} className="img-fluid rounded-radius-md" alt="Slider2" />
                  </SwiperSlide>

                </Swiper>
              </div>
              <UserCommentBox />
            </div>
            <div className="col-lg-3">
              <h4 className="font-size-18 font-weight-600 mb-3">Chat</h4>
              <div className=" d-flex align-items-center">
                <img src={NavUser} className="img-fluid rounded" alt="" width="40px" />
                <h4 className="font-size-16 font-weight-500 ms-2">UserName</h4>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
