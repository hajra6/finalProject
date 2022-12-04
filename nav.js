import React, { useState, useEffect } from 'react'
import "./nav.css"

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
       return () => {
        // window.removeEventListener("scroll")
       }
    }, []);

  return (

    <div className={`nav ${show && "nav__black"}`}>

        <img className='nav__logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="Netflix Logo" />

        <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />

    </div>

  )
}

export default Nav
