import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen  bg-[#181818]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffff] text-[#ffff]'>Works</p>
                <p className='py-6 text-[#b3b3b3]'>Check out some of my recent work</p>
            </div>
           
            {/*project cards container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*grid item */}
                <div style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#b3b3b3] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                {/*Hover*/}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold tracking-wider text-[#ffff]'>
                       React Js Application 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
                {/*grid item */}
                <div style={{backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#b3b3b3] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                {/*Hover*/}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold tracking-wider'>
                       React Js Application 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
                 {/*grid item */}
                 <div style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#b3b3b3] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                {/*Hover*/}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold tracking-wider'>
                       React Js Application 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
                {/*grid item */}
                <div style={{backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#b3b3b3] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                {/*Hover*/}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold tracking-wider'>
                       React Js Application 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
                 {/*grid item */}
                 <div style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#b3b3b3] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                {/*Hover*/}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold tracking-wider'>
                       React Js Application 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
                {/*grid item */}
                <div style={{backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#b3b3b3] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                {/*Hover*/}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold tracking-wider'>
                       React Js Application 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ffff] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work