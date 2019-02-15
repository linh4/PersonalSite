import React from 'react';
import Layout from "../components/layout"
import map from '../images/mapvn.png'
import ny2 from '../images/ny.png'
import ca from '../images/ca.jpg'
import pic from '../images/pic.jpg'
import slides from '../data/slides.json'
import quotes from '../data/quotes.json'

const About = () => (
  <>
    <Layout>
      <div className="about-top">
        <div className="ab-header">
          <h2><strong>Hi I am Linh!</strong><br/>
            Full Stack Developer, Home Chef, Experienced Traveler and Bubble Tea Addict. <br/>
            I am a fun loving former tour guide; <br/>
            a creative and flexible human being with a burning passion for perfection and analytical thinking.
          </h2>
          <div className="ab-img">
            <img className="vn-map" src={map} alt="map of vietnam"/>
            <img className="ny-map" src={ny2} alt="map of nyc"/>
          </div>
        </div>
      </div>
      <div className="about-middle-next">
        <div className="ab-img-left">
          <img src={ca} alt="yosemite in CA"/>
        </div>
        <div className="ab-img-right">
          <div>You may think: what's going on with all the illustrations about food and Saigon.<br/> Well, if we have a chance to meet me, I'll tell you all about that. Why I'm proud of where I'm from and the beauty of Vietnamese food.</div>
        </div>
      </div>
      <div className="about-bottom">
        <h3>My philosophy</h3>
        <p>
          My passion is creating apps to help real people. Technology often intimidates us.  Many people fear the rise of AI will soon make the human experience obsolete.  I disagree!  I personally believe that technology, if done properly, is a tool to supplement human creativity and ingenuity.  For this simple reason my philosophy is to always create sleek user-friendly apps, that are designed to enable users to accomplish very human tasks, with machine efficiency!  Ultimately I want to make my mark on bridging the gap between humans and robots!
        </p>
        <img src={pic} alt="pic of me"/>
      </div>
      <div className="about-bottom-last">
        <h1>A more of me</h1>
        <div className="img-list">
          {slides.map(slide => (<div key={slide.name}>
            <img src={slide.url} alt={slide.name}/>
            <p>{slide.title}</p>
          </div>))}
        </div>
        <div className="about-bottom end">
          <h3>Just a bit more...</h3>
          <p>I am very social and I love listening to other people’s experiences, as well as sharing my own.  My favorite things to talk about are food, restaurants, traveling, and the latest in tech!</p>
          <h4>My favorites quotes are:</h4>
          {quotes.map(quote => <blockquote key={quote}>{quote}</blockquote>)}
        </div>
      </div>
    </Layout>
  </>
)

export default About;
