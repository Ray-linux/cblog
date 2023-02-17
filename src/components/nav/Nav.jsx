import { useState } from 'react';
import { useRef } from 'react'
import {FaBars, FaSadCry, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './nav.css'
import { useNavigate } from "react-router-dom";


export default function Nav({isAuthenticated, isUserAuthenticated}) {
    // const navRaf = useRef();
    const[isMobile, setIsMobile] = useState(false)

    const showNavbar = () => {
        // navRaf.current.classList.toggle("responsive_nav");
        setIsMobile(true)
    }

    const navigate = useNavigate();

    const logOut = () => {
      sessionStorage.clear()
      isUserAuthenticated(false)
      setIsMobile(false)
      navigate("/")
    }
  return (
    <header>
        <h3>LOGO</h3>
        <nav  className={!isMobile?'':'responsive_nav'}>
            <Link to='/' onClick={() => setIsMobile(false)}>Home</Link>
            <Link to='/about' onClick={() => setIsMobile(false)}>About</Link>
            <Link to='/contact' onClick={() => setIsMobile(false)}>Contact</Link>
            {
              isAuthenticated ? <Link to='/' onClick={() => logOut()}>Logout</Link> : <Link to='/login' onClick={() => setIsMobile(false)}>Login</Link>
            }
            
            
            <button className='nav_btn nav_close_btn' onClick={() => setIsMobile(false)} ><FaTimes/></button>
        </nav>
            <button className='nav_btn' ><FaBars onClick={() => setIsMobile(true)}/></button>
    </header>
  )
}
