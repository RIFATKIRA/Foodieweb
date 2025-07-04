import React from 'react'
import Photo from '../Assests/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';
import './testimonial.css'


const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What Thay are Saying</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={Photo} alt=""></img>
            <p> Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
            <div className="testimonials-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
        </div>
        <h2>John Doe</h2>
    </div>

    </div>
  )
}

export default Testimonial