import React from 'react';
import Edificio from '../assets/edificio.jpg';
import Copertina from '../assets/documentario.jpg';
import Pattern from '../assets/pattern.jpg'
const Work = () => {
  return (
    <div name="work" className='w-full py-14 bg-[#181818] text-white flex place-items-center justify-center'>
        <div className='w-[80vw]  '>

            <div className='pb-8 w-full '>
                <p className='text-4xl font-bold inline underline underline-offset-8 '>Works and Projects</p>
                <p className='py-4 text-xl text-[#b3b3b3] z-0'>Check out some of my recent works</p>
            </div>
        {/*card*/}
        


            <div class='flex justify-center place-items-center py-14'>
            <div className='grid lg:grid-cols-3
             gap-12 mt-12  w-[70vw] place-items-center'> 

                    <a href='/work/marionegri'> <div className=' bg-black    rounded-lg'>
                        <div className='grid  '>
                            <img src={Edificio} class='  h-54  lg:h-60 object-fill rounded-t-xl row-span-full '></img> 
                            <div class='text-center lg:text-3xl font-bold p-4 h-[10vh] '> 
                                <p className=''>PCTO </p>
                                <p className=''>IRCCS MARIO NEGRI</p>
                            </div> 
                         </div>
                    </div></a>
                    {/**GrDocumentPdf */}
                   
                    <a href='/work/giusti'> 
                        <div className=' h-fit bg-black rounded-lg'>
                        <div className='grid  m-auto'>
                                <img src={Copertina} class=' h-54  lg:h-60 object-fill rounded-t-xl'></img> 
                            
                            <div class='text-center lg:text-3xl font-bold p-4 h-[10vh] '> 
                                <p className=''>PCTO </p>
                                <p className=''>I GIUSTI TRA LE NAZIONI</p>
                            </div> 
                         </div>
                    </div></a>

                    <a href='/work/'> 
                        <div className=' bg-black  h-full  rounded-lg'>
                        <div className='grid grid-rows-2  m-auto'>
                            <div class=' row-span-full'>
                                <img src={Pattern} class=' h-54  lg:h-60 object-fill rounded-t-xl'></img> 
                            </div>
                            <div class=' flex justify-center place-items-center lg:text-3xl font-bold p-4 h-[10vh] '> 
                                <p className=''>EXTRA </p>
                                
                            </div> 
                         </div>
                    </div></a>
                    
              

                    
                    
                </div>
            </div>
            </div>
        </div>
    
  )
}

export default Work