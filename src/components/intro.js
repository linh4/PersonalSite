import React from "react";
import food from "../images/food.jpg"
import saigon from "../images/saigon.png"

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="text-box">
          <h1><span>Linh</span><br/><span>Huynh</span></h1>
          <h3>Full Stack Developer based in NYC</h3>
          <p>My passion is creating practical tools to help real people.</p>
          <hr/>
          <div className="credits">Illustration by <span><a href="https://www.behance.net/gallery/30326605/Vietnamese-food" target="_blank" rel="noopener noreferrer">Vietnamese Food</a></span> & <span><a href="https://www.behance.net/gallery/46453885/Sai-Gon-sau-vai" target="_blank" rel="noopener noreferrer">Saigon</a></span></div>
        </div>
      </div>
      <div className="intro-img">
        <img className="food-img" src={food} alt="food-background"/>
        <img className="sg-img" src={saigon} alt="saigon"/>
      </div>
    </div>
  )
}

export default Intro;
