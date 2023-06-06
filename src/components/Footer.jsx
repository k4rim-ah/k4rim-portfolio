import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
let copyright = String.fromCodePoint(0x00A9);
const year = 'June 2023';
  const companyName = 'Karim Ahmed';
export const Footer = () => {
  return (
    
    <div class='bg-[#6d6d6d]  '>
  <div class='grid grid-rows-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 text-white text-[1rem] md:text-[1.2rem]
   font-semibold py-6 items-center md:items-start '>

    <div class=''>
      <div class='mb-4 w-full text-center text-[120%]'>My Portfolio</div>
      <div class=' flex w-full justify-center'>
      <div class='text-justify w-[80%] bg-[#8c8c8cbb] rounded-lg p-2'>"Thank you for visiting my portfolio! I hope you've enjoyed exploring my work. 
        Feel free to reach out if you have any questions or if you'd like to collaborate. 
        I look forward to connecting with you!"</div>
    </div>
    </div>
    <div class='row-span-full lg:row-span-1'>
      <div class='w-full text-center text-[120%]'>Contacts</div>
      <div class='grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 place-items-center '>

        <div class='p-4  lg:w-full '>
        <a href='https://www.facebook.com/profile.php?id=100012815921891' target='blank'
            className=' flex justify-between items-center  p-4 bg-[#8c8c8cbb] rounded-lg '>
            <FaFacebook size={40} class='mr-4' /> Facebook 
        </a>
        </div>
        <div class='p-4 lg:w-full  '>
        <a href='https://www.linkedin.com/in/karim-ahmed-bb178522b' target='blank'
            className=' flex justify-between items-center  p-4 bg-[#8c8c8cbb] rounded-lg '>
            <FaLinkedin size={40} class='mr-4' /> Linkedin 
        </a>
        </div>
        <div class='p-4 lg:w-full ' >
        <a href='https://github.com/k4rim-ah' target='blank'
            className=' flex justify-between items-center p-4 bg-[#8c8c8cbb] rounded-lg '>
            <FaGithub size={40} class='mr-4' /> Github 
        </a> 
        </div>
        <div class='p-4  lg:w-full '>
        <a href='/contact'
            className=' flex justify-between items-center   p-4 bg-[#8c8c8cbb] rounded-lg '>
            <HiOutlineMail size={40} class='mr-4' /> Write Me 
        </a>   
        </div>
        </div>
    </div>
    <div class='p-4 lg:p-0'>
      <div class='mb-4  w-full text-center text-[120%]'>Copyright</div>
      <div class=' flex w-full justify-center'>
      <div class='bg-[#8c8c8cbb] rounded-lg p-2 w-[80%] text-center '> {`${copyright} ${year} ${companyName}`}</div>
      </div>
    </div>
  </div>
</div>
  )
}
export default Footer