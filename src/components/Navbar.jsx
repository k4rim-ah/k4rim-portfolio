import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import {Link, Outlet} from 'react-router-dom';
const Navbar = () => {
    const [nav, setNav]=useState(false); 
    const handleClick = () => setNav(!nav);
let iconStyles = {color: '#edfe58' , fontSize: '1.5em'}
  return (
    <>
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#d731ff] text-black-300'>
        <div> {/* logo container */}
            <div className='text-5xl text-[#edfe58] font-bold '>k4rim</div>
        </div>
        {/* menu container */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex text-[#edfe58]'>
                <li>
                    <a href='/' >Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/services'>Services</a>
                </li>
                <li>
                    <a href='/work'>Works</a>
                </li>
                <li>
                    <a href='/contact'>Contacts</a>
                </li>
            </ul>
        </div>
    

    {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars style={iconStyles}/> :<FaTimes style={iconStyles}/> }
        </div>
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : '  absolute top-0 left-0 w-full h-screen bg-[#d731ff] text-[#edfe58] flex flex-col justify-center items-center' }>
                <li  className='py-6 text-4xl hover:text-[#181818] '>
                <li >
                    <a href='/'>Home </a>
                </li>
                </li>
                <li className='py-6 text-4xl hover:text-[#181818]'>
                    <a href='/about'>About</a>
                </li>
                <li className='py-6 text-4xl hover:text-[#181818]'>
                    <a href='/services'>Services</a>
                </li>
                <li className='py-6 text-4xl hover:text-[#181818]'>
                    <a href='/work'>Works</a>
                </li>
                <li className='py-6 text-4xl hover:text-[#181818]'>
                    <a href='/contact'>Contacts</a>
                </li>
        </ul>
        {/*Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg '>
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg '>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg '>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg  '>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        <Outlet />
        </>
  );
};

export default Navbar