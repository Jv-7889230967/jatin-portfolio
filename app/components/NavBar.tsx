"use client"
import React from 'react';
import { Link } from 'react-scroll';

const NavBar: React.FC = () => {
    return (
        <nav className='navbar'>
            <div className='small-nav-items sm:nav-items'>
                <Link className='cursor-pointer' to='about' smooth={true} duration={900} >About</Link>
                <Link className='cursor-pointer' to='skills' smooth={true} offset={-75} duration={900} >Skills</Link>
                <Link className='cursor-pointer' to='experience' smooth={true} offset={-90} duration={900} >Experience</Link>
                <Link className='cursor-pointer' to='contact' smooth={true} duration={900} >Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
