import React from 'react'
import BackgroundAbout from '../Assests/about-background.png';
import BackgroundImage from '../Assests/about-background-image.png';
import { BsFillPlayCircleFill } from "react-icons/bs";
import './about.css';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={BackgroundAbout} alt=""></img>
        </div>
        <div className="about-section-image-container">
            <img src={BackgroundImage} alt=""></img>
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">Food Is An Important Part of a Balanced Diet</h1>
            <p className="primary-text"> Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
            <p className="primary-text">
                Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                facilisis at fringilla quam.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
                <button className="watch-video-button">
                <BsFillPlayCircleFill /> Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About