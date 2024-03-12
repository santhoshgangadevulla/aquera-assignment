import React from "react"
import './header.css';

const Header = () => {
    return(
        <div className="aa-header h-20 md:h-24 shadow-lg md:w-4/5 m-auto w-11/12 flex flex-col justify-center items-start">
            <a href="/"><img className="aa-header-logo" src="/logos/star-wars.svg" alt="Logo"/></a>
        </div>
    )
}

export default Header