import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [onclick, setClick] = useState(false);

  const handleClick = () => setClick(!onclick);

  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  const showButton = () => {if(window.innerWidth <= 960){
    setButton(false)
  }else {
    setButton(true)
  }
};

window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Aayan <i className="fab fa-typo3"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className="material-icons">
            {onclick ? 'close' : 'menu'}
          </i>
        </div>
        <ul className = {onclick ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Experience' className='nav-links' onClick={closeMobileMenu}>
            Experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
            Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
          </li>
        </ul>
        {button && <Button 
          buttonStyle='btn-outline'
          buttonSize = "btn--medium"
          type='button'
          onClick={() => {/*button click*/}}
          >
          RESUME
          </Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar
