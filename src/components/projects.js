import React from 'react';
import brooklyn from '../images/brooklyn.jpg'
import split from '../images/split.png'
import splitb from '../images/split-b.png'
import gostamp from '../images/go-stamp.png'
import stampb from '../images/stamp-b.png'
import game from '../images/game.png'
import yofun from '../images/yo-fun.png'
import around1 from '../images/around1.png'
import around2 from '../images/around2.png'

const Project = () => {
  return (
    <div className="works">
      <h3>Projects</h3>

      <div className="project-box left-side">
        <div className="img-box left">
          <img className="img-bg" src={around1} alt="brooklyn-bridge"/>
          <img className="img-main" src={around2} alt="around-you-app"/>
        </div>
        <div className="description">
          <h3>Around You</h3>
          <p className="introduction">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli</p>
          <p className="time">February 2019</p>
          <a href="https://around-you1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Live Website</div></a>
          <a href="https://github.com/linh4/around-you" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Github</div></a>
        </div>
      </div>

      <div className="project-box right-side">
        <div className="description">
          <h3>Yo Fun</h3>
          <p className="introduction">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli</p>
          <p className="time">January 2019</p>
          <a href="https://youtu.be/L3JX8N0bkkE" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Video Demo</div></a>
          <a href="https://github.com/linh4/yo-fun" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Github</div></a>
        </div>
        <div className="img-box right">
          <img className="img-bg" src={brooklyn} alt="brooklyn-bridge"/>
          <img className="img-main" src={yofun} alt="yo-fun-app"/>
        </div>
      </div>

      <div className="project-box left-side">
        <div className="img-box left">
          <img className="img-bg" src={splitb} alt="brooklyn-bridge"/>
          <img className="img-main" src={split} alt="split-b-app"/>
        </div>
        <div className="description">
          <h3>Split B</h3>
          <p className="introduction">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli</p>
          <p className="time">November 2018</p>
          <a href="https://split-b.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Live Website</div></a>
          <a href="https://github.com/linh4/split-b-front-end" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Github</div></a>
        </div>
      </div>


      <div className="project-box right-side">
        <div className="description">
          <h3>Go Stamp!</h3>
          <p className="introduction">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli</p>
          <p className="time">October 2018</p>
          <a href="https://go-stamp-card-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Live Website</div></a>
          <a href="https://github.com/linh4/go-stamp-front-end" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Github</div></a>
        </div>
        <div className="img-box right">
          <img className="img-bg" src={stampb} alt="brooklyn-bridge"/>
          <img className="img-main" src={gostamp} alt="go-stamp-app"/>
        </div>
      </div>

      <div className="project-box left-side">
        <div className="img-box left">
          <img className="img-bg" src={brooklyn} alt="brooklyn-bridge"/>
          <img className="img-main" src={game} alt="game-app"/>
        </div>
        <div className="description">
          <h3>Tic Tap Tone</h3>
          <p className="introduction">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli</p>
          <p className="time">September 2018</p>
          <a href="https://tic-tap-tone.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Live Website</div></a>
          <a href="https://github.com/linh4/tic-tap-tone-front-end" target="_blank" rel="noopener noreferrer" className="project-btn"><div>Github</div></a>
        </div>
      </div>


    </div>
  )
}

export default Project;
