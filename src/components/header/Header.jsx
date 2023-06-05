import React from 'react'
import "./header.css"
import CTA from "./CTA"
import Four from "../../assets/four.jpeg"
import HeaderSocial from "./HeaderSocials"

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Sai Aravind</h1>
                <h5 className="text-light">FullStack Developer</h5>
            
                <CTA />
                
                <HeaderSocial/>

                <div className='me'>
                    <img src={Four} alt="me" />
                </div>

                <a href='#contact' className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header;