import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
    <div className='hero'>
    <nav>
       <h2 className='logo'>Portfo<span>lio</span></h2>

      <ul className='listItems'>
        <li><Link to='/' exact>Home</Link></li>
        <li><Link to='/aboutUs'>About Us</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/contactUs'>Contact Us</Link></li>
      </ul>
     
 <div className='button'>Subscribe</div>
      
  </nav>

  <div className='content'>
    <h4>Hello, my name is</h4>
    <h1>Mac Daniels</h1>
    <h3>I'm a Software Engineer</h3>
  </div>
  <div className='newsletter'>
    <form>
      <input type='email' name='email' placeholder='Enter Your Email'/>
      <input type='Submit' name='submit' value="let's start"/>
    </form>
  </div>
    

    </div>
    </header>
  )
}

export default Header;