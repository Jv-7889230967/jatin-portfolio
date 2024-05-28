"use client"
import React from 'react';
import { Link } from 'react-scroll';

const NavBar: React.FC = () => {
    return (
        <nav className='navbar'>
            <div className='small-nav-items sm:nav-items'>
                <Link className='cursor-pointer' to='about' smooth={true} duration={500} >About</Link>
                <Link className='cursor-pointer' to='skills' smooth={true} duration={500} >Skills</Link>
                <Link className='cursor-pointer' to='experience' smooth={true} offset={-100} duration={500} >Experience</Link>
                <Link className='cursor-pointer' to='contact' smooth={true} offset={-100} duration={500} >Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
