import React, { useEffect } from "react";
import "./hero-style.css";

function Hero() {
  useEffect(() => {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const imageHero = document.getElementById("imageHero");

    function changeImage(nameImage, id) {
      imageHero.src = `images/${nameImage}.png`;
      const circle = document.getElementById(`img${id}`);
      circleDisabled();
      circle.classList.add("active");
    }

    function circleDisabled() {
      img1.classList.remove("active");
      img2.classList.remove("active");
      img3.classList.remove("active");
    }

    img1.addEventListener("click", () => {
      changeImage("mulan", "1");
    });
    img2.addEventListener("click", () => {
      changeImage("raya", "2");
    });
    img3.addEventListener("click", () => {
      changeImage("unidos", "3");
    });
  }, []);

  return (
    <div className="hero" aria-label="hero">
      <img src="images/mulan.png" id="imageHero" alt="image mulan hero" />
      <div className="slider-circle">
        <div className="circle active" id="img1"></div>
        <div className="circle" id="img2"></div>
        <div className="circle" id="img3"></div>
      </div>
    </div>
  );
}

export default Hero;
