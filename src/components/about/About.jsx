import React from 'react';
import './about.css';
import Three from '../../assets/three.jpeg';
import { FaAward } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Three} alt='img' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10 Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequuntur provident vero eos dolorum at culpa nam, quidem, rem ipsam perferendis fugiat odio officiis quis tenetur debitis nostrum! Sed, distinctio.</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About;
