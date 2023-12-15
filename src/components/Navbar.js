import React, { useState } from 'react';
import './NavbarStyle.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/images/logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false)



    const handleClick = () => {
        setClick(!click)
    }
  return (
    <header>
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt='Logo'/>  
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/'>Pricing</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/'>FAQ</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {
                    click ? (<FaTimes size={20} style={{color: '#ffffff'}}/>) : (<FaBars size={20} style={{color: '#ffffff'}}/>)
                }
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar