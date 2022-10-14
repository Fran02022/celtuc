import React from "react";

import iphone14p from '../../media/iphone14p.jpg'
import './../About/About.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Iphone 14 Pro</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          assumenda in soluta, adipisci placeat sunt architecto voluptas est
          aspernatur fugiat, veritatis laudantium sapiente at perspiciatis eaque
          distinctio impedit iure inventore quibusdam! Cumque perferendis
          exercitationem sapiente autem, adipisci quibusdam sit ipsam.
        </p>
      </div>
      <div className="about-img">
        <img src={iphone14p} alt="iphone 14 pro" />
      </div>
    </div>
  );
}

export default About;
