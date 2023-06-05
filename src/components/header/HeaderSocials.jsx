import React from 'react'
import { BsGithub } from "react-icons/bs"
import { TbBrandLinkedin } from "react-icons/tb"
import { BsInstagram } from "react-icons/bs"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://in.linkedin.com/' target='blank'><TbBrandLinkedin /></a>
            <a href='https://github.com/Sai-Aravind-Modukuru/movie-imdb' target='blank'><BsGithub /></a>
            <a href='https://www.instagram.com/' target='blank'><BsInstagram /></a>

        </div>
    )
}

export default HeaderSocials
