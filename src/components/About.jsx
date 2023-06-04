import React from 'react'
import Me from '../assets/About.jpg'

const About = () => {
  return (
    <div name='about' className=' w-full lg:h-screen h-[130vh] bg-[#181818] flex  justify-center place-items-center'>
        <div class=' w-[80vw] md:w-[50vw] grid grid-rows-2  lg:grid-rows-1 lg:grid-cols-2 place-items-center '>
            <div className=' flex items-center justify-center p-2'>
                <img src={Me} class=' rounded-lg  w-full   flex items-center justify-center' alt='me'></img>
            </div>        
            <div class=' lg:row-span-1 row-span-full items-center justify-center bg-black rounded-lg'>
                <div class='p-2 lg:p-0'>
                <div className='lg:px-12 lg:pt-12 py-2 text-center lg:py-0'>
                    <p className='md:text-4xl text-2xl text-white font-bold underline underline-offset-4'>Hi, I am Karim</p>
                </div>
                <div className='lg:p-12'>
                    <p className='text-l md:text-xl text-justify text-white'> Tech has been my passion since childhood, student in a high school of applied sciences, 
                        matriculated for the faculty of Computer Engineering at Politecnico di Milano, 
                        I began my way from web developer at the age of sixteen, 
                        my favorite language is JavaScript for its versatility and its frameworks. 
                        This web portfolio is entirely designed and developed with ReactJS and TailwindCSS.</p>
                </div>
                </div>
                </div>
        </div>
    
    
    
    
    
    
    </div>
  )
}

export default About