import React from 'react'
{/**GrDocumentPdf */}

const Work = () => {
  return (
    <div name="work" className='w-full h-screen  bg-[#181818]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline underline underline-offset-8 text-zinc-200'>Works and Projects</p>
                <p className='py-4 text-xl text-[#b3b3b3] z-0'>Check out some of my recent works</p>
            </div>
            <div className='w-full h-screen grid md:grid-cols-2 gap-12 place-content-center '> 
                   
                    <a href='/work/marionegri'> <div className=' bg-gray-300 flex h-[10vh] md:h-[20vh] rounded-lg'>
                     <div className='grid grid-rows-2  m-auto'>
                     <p className='flex mx-auto text-grey-200 text-xl font-bold '>PCTO </p>
                     <p className='flex mx-auto text-grey-200 text-xl font-bold '>IRCCS MARIO NEGRI</p>
                     </div>
                    </div></a>
                    
                   
                    <a href='/work/giusti'> <div className=' bg-gray-300 flex  h-[10vh] md:h-[20vh] rounded-lg'>
                     <div className='grid grid-rows-2 m-auto'>
                     <p className=' text-center flex m-auto text-grey-200 text-xl font-bold '>PCTO </p>
                     <p className=' text-center flex m-auto text-grey-200 text-xl font-bold px-2 '>"I GIUSTI TRA LE NAZIONI"</p>
                     </div> 
                    </div></a>
                    

                    
                    
                </div>
            </div>
        </div>
    
  )
}

export default Work