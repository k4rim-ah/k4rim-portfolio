import React from 'react';
import Copertina from '../assets/documentario.jpg';
import Edificio from '../assets/edificio.jpg';
import Me from '../assets/aboutcut.jpg';
import Pattern from '../assets/pattern.jpg'




const Home = () => {
  return (
    <div  className='bg-[#181818]  text-white pb-14'>
            {/*container*/}
                <div class='  w-full text-center py-14'>
                <div><h1 className='text-4xl sm:text-7xl font-bold text-[#ffff] '>Karim Ahmed</h1></div>
                <div><h2 className='text-center text-2xl 
                sm:text-3xl font-bold text-[#b3b3b3]'>portfolio</h2></div>
                </div>
                
                {/**Highlights  */}
                <div class=' '>
                  
                  <div class='text-center text-3xl md:text-4xl font-bold  text-white pt-4 underline underline-offset-8 decoration-4'>Highlights</div>
                
                  <div class='flex justify-center place-items-center py-4'>
                    <div class='grid lg:grid-cols-4
             gap-12 mt-12  w-[70vw] lg:w-[90vw] place-items-center'>
                    <div>
                  <a href='/about'> 
                        <div className=' h-fit bg-black rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                        <div className='  m-auto'>
                                <img src={Me} class=' w-[200vh] h-54  lg:h-60 object-fill rounded-t-xl' alt='Giardino giusti'></img> 
                            <div class='lg:text-2xl font-bold p-4 h-[10vh] flex justify-center place-items-center '> 
                                <p className=''>ABOUT ME </p>
                            </div> 
                         </div>
                    </div></a>
                  </div>
                  <div>
                  <a href='/work/marionegri'> 
                        <div className=' h-fit bg-black rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                        <div className='grid  m-auto'>
                                <img src={Edificio} class='w-[200vh] h-54  lg:h-60 object-fill rounded-t-xl' alt='Giardino giusti'></img> 
                            
                            <div class='text-center lg:text-2xl font-bold p-4 h-[10vh]  '> 
                                <p className=''>PCTO </p>
                                <p className=''>IRCCS MARIO NEGRI</p>
                            </div> 
                         </div>
                    </div></a>
                  </div>
                  <div>
                  <a href='/work/giusti'> 
                        <div className=' h-fit bg-black rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                        <div className='grid  m-auto'>
                                <img src={Copertina} class='w-[200vh] h-54  lg:h-60 object-fill rounded-t-xl' alt='Giardino giusti'></img> 
                            
                            <div class='text-center lg:text-2xl font-bold p-4 h-[10vh]  '> 
                                <p className=''>PCTO </p>
                                <p className=''>I GIUSTI TRA LE NAZIONI</p>
                            </div> 
                         </div>
                    </div></a>
                  </div>
                  <div>
                  <a href='/work/extra'> 
                        <div className='   h-fit bg-black rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                        <div className='grid  m-auto'>
                                <img src={Pattern} class=' w-[200vh] h-54  lg:h-60 object-fill rounded-t-xl' alt='Giardino giusti'></img> 
                            
                            <div class='flex place-items-center justify-center lg:text-2xl font-bold p-4 h-[10vh]  '> 
                                <p className=''> EXTRA STUFF</p>
                                
                            </div> 
                         </div>
                    </div></a>
                  </div>
                  </div>
                  </div>
                </div>
          </div>
   
  )
}

export default Home