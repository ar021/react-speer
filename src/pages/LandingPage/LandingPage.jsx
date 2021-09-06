import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div class="img-slider">
        <div class="slider-container">
          <div class="slide">
            <img
              alt="image1"
              src="https://nomorsiapa.com/images/down/hdqwalls.com/wallpapers/kygo-24.jpg"
            />
          </div>

          <div class="slide">
            <img
              alt="image2"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2b6a229-a1e6-47d8-b6af-7e3dc487994b/dd6t9d2-bc7ec817-523c-40cb-86b2-6b3a78817f6d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyYjZhMjI5LWExZTYtNDdkOC1iNmFmLTdlM2RjNDg3OTk0YlwvZGQ2dDlkMi1iYzdlYzgxNy01MjNjLTQwY2ItODZiMi02YjNhNzg4MTdmNmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w_nwVx3rGLXPXAWhC5dZHCqVOQBCsHWqQu7lOi0N-BA"
            />
          </div>

          <div class="slide">
            <img
              alt="image3"
              src="https://wallpapercave.com/wp/wp2793839.jpg"
            />
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
      <Navbar />
    </div>
  );
}
