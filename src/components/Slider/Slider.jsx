import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from "./Slide";
import './Slider.css'
function Slider() {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My proyect</h2>
      </div>
      <Carousel
        arrows
        slidePerPage={3}
        infinte
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
      />
    </div>
  );
}

export default Slider;
