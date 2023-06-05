import React from 'react'
import "./projects.css";
import SC from "../../assets/SC1.png"

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={SC} alt=''/>
          </div>
          <h3>Movies App</h3>
          <a href="https://github.com/Sai-Aravind-Modukuru/movie-imdb" className='btn_1' target='blank'>Git Hub</a>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={SC} alt='' onClick={SC}/>
          </div>
          <h3>This is Project Title</h3>
          <a href="https://github.com/Sai-Aravind-Modukuru/movie-imdb" className='btn_1' target='blank'>Git Hub</a>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={SC} alt=''/>
          </div>
          <h3>This is Project Title</h3>
          <a href="https://github.com/Sai-Aravind-Modukuru/movie-imdb" className='btn_1' target='blank'>Git Hub</a>
        </article>

      </div>
    </section>
  )
}

export default Projects;
