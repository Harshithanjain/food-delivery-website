import React from "react";
import Navbar from "./Navbar";
// import About from "./About";
import BannerBackground from "../assets/BannerBackground.svg";
import HomePageBanner from "../assets/HomePageBanner.svg";
import { fiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <fiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={HomePageBanner} alt="" />
        </div>
      </div>
      {/* <About /> */}
    </div>
  );
};

export default Home;
