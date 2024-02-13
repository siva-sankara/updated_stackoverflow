import React from "react";
import "./StartPage.css";
import { Link } from "react-router-dom";
import startLogo from "../../asserts/bgm1.png";
import smokevideo from "../../asserts/pexels_video.mp4";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
const StartPage = () => {
  var user = useSelector((state) => state.currentUserReducer);
  console.log(user);
  return (
    <div>
      <div className="stratpage-container">
        <video
          id="background-video"
          className="bg-vedio"
          src={smokevideo}
          autoPlay
          muted
        ></video>
        <section className="startpage-heading">
          <h1 className="main-heading-startpage">
            <span>StudyBuddy</span>
          </h1>
        </section>
        <div className="sub-start-conatiner">
          <div className="conatiner-1">
            <img src={startLogo} width="400px" height="400px" />
          </div>
          <div className="container-2">
          <p className="typeHello-media">Hai hello everyone....|</p>
            <p>
              {" "}
              By utilizing the Study Buddy project, students can create a collaborative and interactive learning space tailored to their academic needs. The platform facilitates communication, resource-sharing, and collaboration, ultimately fostering a supportive community for academic success.
            </p>
            <p className="typeHello">Hai hello everyone....|</p>
            <div className="navigation">
              {user ? (
                <div>
                  {" "}
                  <Link to="/home" className="navigation-btn">
                    Get Started  ➡️
                  </Link>
                 
                </div>
              ) : (
                <div style={{display:"flex"}}>
                  {" "}
                  <Link to="/home" className="navigation-btn">
                    Get Started <span className="arrow">➡️</span>
                  </Link>
                  <Link to="/Auth" className="navigation-btn">
                    Log In <span className="arrow">➡️</span>
                    </Link>
                  <Link to="/Auth" className="navigation-btn">
                    Sign Up <span className="arrow">➡️</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default StartPage;
