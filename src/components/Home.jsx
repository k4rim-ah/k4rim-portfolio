import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#181818]'>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
               
                <p className='text-lg sm:text-xl font-semibold text-[#b3b3b3]'>Portoflio</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ffff] '>Karim Ahmed</h1>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#ffff]'>I am a self-taught developer</h2>
                <p className=' py-4 max-w-[700px] text-[#b3b3b3]'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              
           
            </div>
    </div>
  )
}

export default Home