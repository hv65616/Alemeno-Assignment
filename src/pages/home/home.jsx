import React from "react";
import "./home.css";
import { Navbar } from "../../components/navbar/navbar";
import Banner from "../../assets/home-banner-img.png";
import SecondBanner from "../../assets/home-second-banner.png";
import Svg1 from "../../assets/svg1.svg";
import Svg2 from "../../assets/svg2.svg";
import Svg3 from "../../assets/svg3.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <Navbar />
        <div className="home-page">
          <section className="home-top-banner-wrapper">
            <div className="home-top-banner">
              <div className="home-top-banner-left">
                <div className="home-top-banner-left-heading">
                  Knowledge Connection <br /> Open the Door to the Future
                </div>
                <div className="home-top-banner-left-subheading">
                  Giving every student the opportunity to access the best
                  education and open the door to the world of knowledge. Start
                  your learning journey today with Edudu to become an
                  outstanding student in our learning community.
                </div>
                <div className="home-top-banner-left-button">
                  <div className="home-top-banner-left-button-text">
                    <Link to={"/courses"}>Get Started!</Link>
                  </div>
                </div>
              </div>
              <div className="home-top-banner-right">
                <div className="home-top-banner-right-img">
                  <img className="home-banner" src={Banner} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="home-third-section-wrapper">
            <div className="home-third-section">
              <div className="home-third-section-top">
                <div className="home-third-section-top-heading">
                  Why should you choose Edudu?
                </div>
              </div>
              <div className="home-third-section-bottom">
                <div className="home-third-section-bottom-cards-wrapper">
                  <div className="home-third-section-bottom-cards">
                    <div className="home-third-section-bottom-cards-top">
                      <img
                        className="home-third-section-bottom-cards-top-svg"
                        src={Svg1}
                        alt=""
                      />
                    </div>
                    <div className="home-third-section-bottom-cards-bottom">
                      <div className="home-third-section-bottom-cards-bottom-heading">
                        Experienced teacher
                      </div>
                      <div className="home-third-section-bottom-cards-bottom-content">
                        Instructors from all over Vietnam and around the world,
                        providing quality learning experiences and helping
                        students develop their full potential
                      </div>
                    </div>
                  </div>
                  <div className="home-third-section-bottom-cards">
                    <div className="home-third-section-bottom-cards-top">
                      <img
                        className="home-third-section-bottom-cards-top-svg"
                        src={Svg2}
                        alt=""
                      />
                    </div>
                    <div className="home-third-section-bottom-cards-bottom">
                      <div className="home-third-section-bottom-cards-bottom-heading">
                        Creative program
                      </div>
                      <div className="home-third-section-bottom-cards-bottom-content">
                        Flexible payment, suitable to personal financial
                        situation and study schedule. Pay monthly, by course or
                        “study now, pay later”
                      </div>
                    </div>
                  </div>
                  <div className="home-third-section-bottom-cards">
                    <div className="home-third-section-bottom-cards-top">
                      <img
                        className="home-third-section-bottom-cards-top-svg"
                        src={Svg3}
                        alt=""
                      />
                    </div>
                    <div className="home-third-section-bottom-cards-bottom">
                      <div className="home-third-section-bottom-cards-bottom-heading">
                        Appropriate cost
                      </div>
                      <div className="home-third-section-bottom-cards-bottom-content">
                        Design curriculum based on each student's abilities and
                        needs, attractive learning activities, and continuous
                        two-way interaction.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
