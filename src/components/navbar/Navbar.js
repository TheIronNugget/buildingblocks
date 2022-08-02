import React, {useState} from 'react';

import {HiOutlineMenu} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {GiMoonOrbit} from 'react-icons/gi';


import './Navbar.scss';
const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
      <div className="con">
        <h1>
          <span>
            <GiMoonOrbit className='iconic' />
            Outer
          </span>
          Space
        </h1>
        {/* <button className="btn">Sign In</button> */}
        <ul className={click ? 'nav-menu alive' : 'nav-menu'}>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Search</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <div className="hammy" onClick={handleClick}>
            {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenu className='icon' />)}
        </div>
      </div>
    </div>
  )
}

export default Navbar;