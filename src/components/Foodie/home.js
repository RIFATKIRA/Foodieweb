import React from 'react'
import BannerBackGround from '../Assests/home-banner-background.png';
import BannerImage from '../Assests/home-banner-image.png';
import Navbar from './navbar';
import { FiArrowRight } from 'react-icons/fi';
import './home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
            <div className='home-banner-Image-container'>
                <img src={BannerBackGround} alt=""></img>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                    Your Favourite Food Delivered Hot & Fresh
                </h1>
                <p className="primary-text">
                    Healthy switcher chefs do all the prep work, like peeding, chopping
                    & marinating, so you can cook a fresh food.
                </p>
                <button className="secondary-button">
                    Order Now <FiArrowRight />{" "}
                </button>
            </div>
            <div className="home-image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Home