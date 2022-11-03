import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../space-tourism-website-main/space-tourism-website/starter-code/shared/logo.svg'
import './CSS-FOLDER/nav.css'
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {
    
    const handleClick = () => {
        const navBar = document.querySelector('.link')
        const listItem = document.querySelectorAll('.listItem')

        navBar.classList.toggle('open')

        listItem.forEach((item) =>
            item.addEventListener('click', () => navBar.classList.remove('open'))
        )
    }


  return (
    <>
        <nav className='header '>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='link'>
                <ul>
                    <li className='listItem'>
                        <Link to= "/" className=''><span >00 </span> HOME</Link>
                    </li>
                    <li className='listItem'>
                        <Link to= "/destination"className='' ><span>01</span> DESTINATION</Link>
                    </li>
                    <li className='listItem'>
                        <Link to= "/crew" className=''><span >02</span> CREW</Link>
                    </li>
                    <li className='listItem'>
                        <Link to= "/technology"className='' ><span>03</span> TECHNOLOGY</Link>
                    </li>
                    {/* <i className="fa-solid fa-xmark" id="close"></i> */}
                </ul>
                
            </div>
            <div className='menuIcon'>
            <FiMenu onClick={handleClick} className='text-white text-4xl'/>
            </div>
        </nav>
    </>
  )
}

export default Navbar