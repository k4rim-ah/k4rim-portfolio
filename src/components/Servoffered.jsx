import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Node from '../assets/node.png';
import Cpp from '../assets/c++.png';

const Servoffered = () => {
  return (
    <div name='skills' className='lg:h-screen bg-[#181818] text-zinc-200 py-12 '>
        {/*container */}
        <div className='lg:w-[20vw] mx-auto p-4 flex flex-col text-center justify-center '>
            <p className='text-4xl  font-bold inline underline underline-offset-8'>Skills</p>
            <p className='py-4 text-xl text-[#b3b3b3]'>These are thecnologies I work with</p>
        </div>
        <div className='w-[80vw] lg:w-[70vw] grid grid-cols-2  gap-20 lg:grid-cols-4 lg:gap-32 m-auto text-center py-8 place-items-center'>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-24 my-4 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4 font-bold'>HTML</p>
            </div>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200  rounded-lg hover:scale-110 duration-500 '>
                <img className='w-24 my-4  mx-auto' src={CSS} alt='CSS icon' />
                <p className='my-4 font-bold'>CSS</p>
            </div>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200  rounded-lg hover:scale-110 duration-500 '>
                <img className='w-24 my-4  mx-auto' src={JavaScript} alt='Javscript icon' />
                <p className='my-4 font-bold'>JavaScript</p>
            </div>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200  rounded-lg hover:scale-110 duration-500 '>
                <img className='w-24 my-4  mx-auto' src={Tailwind} alt='Tailwind icon' />
                <p className='my-4 font-bold'>Tailwind</p>
            </div>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-24 my-4 mx-auto' src={Github} alt='HTML icon' />
                <p className='my-4 font-bold'>Github</p>
            </div>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200  rounded-lg hover:scale-110 duration-500 '>
                <img className='w-24 my-4 mx-auto' src={ReactImg} alt='React icon' />
                <p className='my-4 font-bold'>React</p>
            </div>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200  rounded-lg hover:scale-110 duration-500 '>
                <img className='w-24 my-4 mx-auto' src={Node} alt='HTML icon' />
                <p className='my-4 font-bold'>NodeJs</p>
            </div>
            <div className='w-40 md:w-52 shadow-md shadow-zinc-200  rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 my-4 mx-auto object-fill' src={Cpp} alt='HTML icon' />
                <p className='my-4 font-bold'>C++</p>
            </div>
        </div>
    </div>
  )
}

export default Servoffered