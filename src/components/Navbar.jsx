import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import {Link, Outlet} from 'react-router-dom';
const Navbar = () => {
    const [nav, setNav]=useState(false); 
    const handleClick = () => setNav(!nav);
let iconStyles = {color: '#ff0000' , fontSize: '1.5em'}
  return (
    <>
   
    <div className='flex justify-center bg-[#181818] h-28'>
    <div className=' absolute mt-5 w-[90%] h-[60px] flex justify-center items-center px-4 
    bg-[#212121] place-content-center text-black-300 rounded-3xl '>
        <div className='float-left'> {/* logo container */}
            <a href='/'>
            <img src={Logo} className='max-w-[70%] hover:max-w-[75%] '></img>
            </a>
        </div>
        {/* menu container */}
        <div className='hidden md:flex mr-[2%]'>
            <ul className='hidden md:flex text-[#ff0000] text-2xl'>
                <li className='hover:text-white'>
                    <a href='/' >Home</a>
                </li>
                <li className='hover:text-white'>
                    <a href='/about'>About</a>
                </li>
                <li className='hover:text-white'>
                    <a href='/services'>Services</a>
                </li>
                <li className='hover:text-white'>
                    <a href='/work'>Works</a>
                </li>
                <li className='hover:text-white'>
                    <a href='/contact'>Contacts</a>
                </li>
            </ul>
        </div>
        </div>
        
    
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-28 left-0 w-full h-screen  bg-[#181818] text-[#ff0000] flex flex-col justify-center items-center' }>
                <li  className='py-6 text-3xl hover:text-white '>
                    <a href='/'>Home </a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/about'>About</a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/services'>Services</a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/work'>Works</a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/contact'>Contacts</a>
                </li>
        </ul>
        {/*Hamburger*/}
        <div  className='absolute right-[28vw]'>
        <div onClick={handleClick} className=' flex mt-10 md:hidden'>
                {!nav ? <FaBars style={iconStyles}/> :<FaTimes style={iconStyles}/> }
            </div>
        </div>
        </div>
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
       
        <Outlet />
        </>
  );
};

export default Navbar