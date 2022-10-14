import React from "react";
import "./Slider.css"
const slideInfo = [
  {
    src: "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_960_720.jpg",
    alt: "imagen carousel 1",
    desc: "celtuc 1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479303_960_720.jpg",
    alt: "imagen carousel 2",
    desc: "celtuc 2 ",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/09/30/00/33/smartphone-7488369_960_720.jpg",
    alt: "imagen carousel 3",
    desc: "celtuc 3",
  },
];

const slides = slideInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
