import React from "react";
import { Container } from "react-bootstrap";
import UserProfile from "./UserProfile";
import VerticleNavTabs from "./VerticleNavTabs";
import { useUserContext } from "./Context/UsersContext";

const Photos = () => {
  const {imagePreview} = useUserContext();

  return (
    <>
      <section className="mt-5">
        <Container>
          <div className="row">
            <div className="col-lg-3 bg-white">
              <UserProfile />
              <VerticleNavTabs />
            </div>
            <div className="col-lg-9">
              <div className="row">
              <h6 className="mb-3 font-size-18 font-weight-600"> All Photos</h6>

                <div className="col-lg-4 card">
                  <img
                    className="img-fluid"
                    src={imagePreview}
                    alt="postphoto1"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Photos;
