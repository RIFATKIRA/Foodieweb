import React from 'react'
import Pickmeal from '../Assests/pick-meals-image.png';
import Chooseoften from '../Assests/choose-image.png';
import Delivery from '../Assests/delivery-image.png';
import './work.css'

const Work = () => {

  const workdata = [
    {
      image: Pickmeal,
      title:"Pick Meals",
      desc:"Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum",
    },

    {
      image: Chooseoften,
      title:"Choose How Often",
      desc:"Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum",
    },

    {
      image: Delivery,
      title:"Fast Delivery",
      desc:"Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum",
    },
  ]

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className='work-section-bottom'>
        {workdata.map((data)=>(
          <div className="work-section-info" key={data.title}>
            <div  className="info-boxes-img-container">
              <img src={data.image} alt=''/>
            </div>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work