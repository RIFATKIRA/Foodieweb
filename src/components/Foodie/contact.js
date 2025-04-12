import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">

        <h1 className="primary-heading">Have Question in Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
    
        <div className='textandbutton'>
            <input type="Text" placeholder='Yourmail@gmail.com'></input>
            <button className="secondary-button">Submit</button>
        </div>
    </div>
  )
}

export default Contact