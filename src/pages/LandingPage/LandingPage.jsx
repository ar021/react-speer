import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div class="img-slider">
        <div class="slider-container">
          <div class="slide">
            <img src="https://nomorsiapa.com/images/down/hdqwalls.com/wallpapers/kygo-24.jpg" />
          </div>

          <div class="slide">
            <img src="https://img2.goodfon.com/original/2560x1600/a/3e/devushka-pevica-aktrisa.jpg" />
          </div>

          <div class="slide">
            <img src="https://wallpapercave.com/wp/wp2793839.jpg" />
          </div>
        </div>
      </div>
      <div className="hero-section">
        <p class="hero-section-tittle">INTERACTIVE CONCERT EXPERIENCE</p>
        <p class="hero-section-subtittle">
          Experience your favourite artists like never
        </p>
        <p className="hero-section-subtittle">
          before and from the comfort of your own home
        </p>
        <a href="/">
          <button className="try-button"> TRY IT NOW</button>
        </a>
      </div>
    </div>
  );
}
