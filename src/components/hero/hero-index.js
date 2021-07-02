import React, { useRef, useEffect } from "react";
import "./hero-style.css";

function Hero() {
  const image = useRef(null);
  const button1 = useRef(null);
  const button2 = useRef(null);
  const button3 = useRef(null);

  function circleDisabled() {
    button1.current.classList.remove("active");
    button2.current.classList.remove("active");
    button3.current.classList.remove("active");
  }
  function removeClass() {
    image.current.classList.remove("hero-img");
    image.current.classList.remove("mulan");
    image.current.classList.remove("raya");
    image.current.classList.remove("unidos");
  }

  function mulan() {
    image.current.src = `images/mulan.png`;
    // removeClass();
    // image.current.classList.add("mulan");
    circleDisabled();
    button1.current.classList.add("active");
  }

  function raya() {
    image.current.src = `images/raya.png`;
    // removeClass();
    // image.current.classList.add("raya");
    circleDisabled();
    button2.current.classList.add("active");
  }

  function unidos() {
    image.current.src = `images/unidos.png`;
    // removeClass();
    // image.current.classList.add("unidos");
    circleDisabled();
    button3.current.classList.add("active");
  }

  return (
    <div className="hero" aria-label="hero">
      <img
        src="images/mulan.png"
        className="mulan"
        id="imageHero"
        alt="image mulan hero"
        ref={image}
      />
      <div className="slider-circle">
        <div
          className="circle active"
          id="img1"
          onClick={mulan}
          ref={button1}
        ></div>
        <div className="circle" id="img2" onClick={raya} ref={button2}></div>
        <div className="circle" id="img3" onClick={unidos} ref={button3}></div>
      </div>
    </div>
  );
}

export default Hero;
