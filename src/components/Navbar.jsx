import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import { Outlet} from 'react-router-dom';
import Resume from '../assets/resume.pdf'
const Navbar = () => {
    const [nav, setNav]=useState(false); 
    const handleClick = () => setNav(!nav);
let iconStyles = {color: '#ffff' , fontSize: '1.6rem'}
  return (
    <>
   
    <div className='flex justify-center bg-[#181818] h-[7.7vh] md:h-[7.3vh]'>
        <div class='fixed w-full z-20'>
    <div className='w-full px-4 
    bg-[#8c8c8cbb] backdrop-blur-sm  text-black-300  py-4 flex items-center justify-center '>
        <div class='grid grid-cols-2 lg:grid lg:grid-cols-6 lg:justify-center'> 
        <div className=' flex justify-end '> {/* logo container */}
            <a href='/'>
            <img src={Logo} className=' w-[35px] md:w-[45px]  '></img>
            </a>
        </div>
        {/* menu container */}
        <div className='hidden  lg:flex mx-auto   justify-center
         place-items-center col-span-5 z-10'>
            <ul className='hidden lg:flex text-white text-[2.4vh] font-semibold'>
                <li className='hover:text-[#242424] hover:font-bold'>
                    <a href='/' >Home</a>
                </li>
                <li className='hover:text-[#242424] hover:font-bold'>
                    <a href='/about'>About</a>
                </li>
                <li className='hover:text-[#242424] hover:font-bold'>
                    <a href='/services'>Skills</a>
                </li>
                <li className='hover:text-[#242424] hover:font-bold'>
                    <a href='/work'>Works</a>
                </li>          
                <li className='hover:text-[#242424] hover:font-bold'>
                    <a href='/contact'>Contact Me</a>
                </li>
            </ul>
        </div>
        
        {/*Hamburger*/}
        <div  className='lg:hidden ml-14 place-items-center justify-center  flex z-50 '>
        <div onClick={handleClick} className='  lg:hidden'>
                {!nav ? <FaBars style={iconStyles}/> :<FaTimes style={iconStyles}/> }
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : '  left-0 w-full  font-semibold h-screen  bg-[#b3b3b3c0] backdrop-blur-sm text-[#ffff] flex flex-col  items-center z-1 fixed' }>
                <li  className='py-6 text-3xl hover:text-white '>
                    <a href='/'>Home </a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/about'>About</a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/services'>Skills</a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/work'>Works</a>
                </li>
                <li className='py-6 text-3xl hover:text-white'>
                    <a href='/contact'>Contact Me</a>
                </li>
        </ul>
        {/*Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a href='https://www.facebook.com/profile.php?id=100012815921891' target='blank'
                    className='w-[130%] px-1 py-1 flex justify-between items-center  text-zinc-200 bg-[#8c8c8cbb] rounded-lg '>
                        Facebook <FaFacebook size={40} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a href='https://www.linkedin.com/in/karim-ahmed-bb178522b' target='blank'
                    className='w-[130%] px-1 py-1 flex justify-between items-center  text-zinc-200 bg-[#8c8c8cbb] rounded-lg '>
                        Linkedin <FaLinkedin size={40} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a  href='https://github.com/k4rim-ah' target='blank'
                        className='w-[130%] px-1 py-1 flex justify-between items-center  text-zinc-200 bg-[#8c8c8cbb] rounded-lg'>
                        Github <FaGithub size={40}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a  href='/contact'
                        className='w-[130%] px-1 py-1 flex justify-between items-center  text-zinc-200 bg-[#8c8c8cbb] rounded-lg'>
                        Email <HiOutlineMail size={40}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a  href={Resume}
                        className='w-[130%] px-1 py-1 flex justify-between items-center  text-zinc-200 bg-[#8c8c8cbb] rounded-lg '>
                        Resume <BsFillPersonLinesFill size={40}/>
                    </a>
                </li>
            </ul>
        </div>
       
        <Outlet />
        </>
  );
};

export default Navbar