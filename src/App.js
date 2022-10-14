import React, { useState, useEffect } from "react";
import Portada from "./components/Portada/Portada";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/Footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <div className="App">
      <Navbar isScrolling = {scrollHeight} />
      <Portada />
      <About/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
