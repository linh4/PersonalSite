import React from 'react';
import projects from '../data/projects.json'

const projectList = () => projects.map((project, idx) => (idx % 2 === 0) ? (
  <div className="project-box left-side" key={idx}>
    <div className="img-box left">
      <img className="img-bg" src={project.bg} alt={project.title}/>
      <img className="img-main" src={project.main} alt={project.title}/>
    </div>
    <div className="description">
      <h3>{project.title}</h3>
      <p className="introduction">{project.description}</p>
      <p className="introduction">Built with: {project.tech}</p>
      <p className="time">{project.time}</p>
      <a href={project.left} target="_blank" rel="noopener noreferrer" className="project-btn"><div>Live Website</div></a>
      <a href={project.right} target="_blank" rel="noopener noreferrer" className="project-btn"><div>Github</div></a>
    </div>
  </div>
)
  : (
    <div className="project-box right-side" key={idx}>
      <div className="description">
        <h3>{project.title}</h3>
        <p className="introduction">{project.description}</p>
        <p className="introduction">Built with: {project.tech}</p>
        <p className="time">{project.time}</p>
        <a href={project.left} target="_blank" rel="noopener noreferrer" className="project-btn"><div>{project.title === "Yo Fun" ? "Video Demo" : "Live Website"}</div></a>
        <a href={project.right} target="_blank" rel="noopener noreferrer" className="project-btn"><div>Github</div></a>
      </div>
      <div className="img-box right">
        <img className="img-bg" src={project.bg} alt={project.title}/>
        <img className="img-main" src={project.main} alt={project.title}/>
      </div>
    </div>
  )
)


const Project = () => {
  return (
    <div className="works">
      <h3>Projects</h3>
      {projectList()}
    </div>
  )
}

export default Project;
