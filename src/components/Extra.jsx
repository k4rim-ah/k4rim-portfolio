import React from 'react';
import '../index.css';
import educivica from '../assets/extra/humanrights.pdf';
import educivica2 from '../assets/extra/genderequality.pdf';
import relaz from '../assets/extra/relazlab.pdf';
import drugs from '../assets/extra/droghe.pdf';
import ecstasy from '../assets/extra/ecstasy.pdf';
import hd from '../assets/extra/hd.pdf';
import nanopart from '../assets/extra/nanoparticles.pdf';
import peptides from '../assets/extra/peptides.pdf';

const Extra = () => {
  return ( 
    <div class='w-full bg-[#181818] text-white pb-14'>
        
        <div className='p-14 w-full flex justify-center  '>
            <p className='text-4xl font-bold inline underline underline-offset-8 '>Extra Stuff</p>
        </div> 
        
        <div class='flex justify-center text-[1rem] md:text-[1.2rem] font-semibold'>
            {/*educazione civica*/}
            <div class='grid lg:grid-cols-2 gap-8 grid-rows-1'>
            <div clas=''>
            <p class='font-bold text-3xl text-center py-4'>Educazione Civica</p>
            <div class='grid grid-rows-2 gap-4'>
                <a href={educivica} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                Human Rights and New Forms of Activism 
                </a>
                <a href={educivica2} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                Gender Equality
                </a>
            <p class='font-bold text-3xl text-center py-3'>PCTO </p>
            <div class='grid grid-rows-2 gap-4'>
                <a href={peptides} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                Sintesi di Peptidi
                </a>
                <a href={nanopart} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                Nanoparticelle 
                </a>
                <a href={hd} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                Presentazione sulla malattia di Huntington 
                </a>
                <a href={drugs} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                Incontro sulle sostanze d'abuso 
                </a>
                <a href={ecstasy} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                Incontro sugli effetti nefasti dell'ecstasy
                </a>
                
            </div>
            </div>
            </div>
            {/*Laboratorio*/}
            <div > <p class='font-bold text-3xl text-center py-4'>Relazioni</p>
            <div class='grid grid-rows-8 gap-4'>
                <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    Saggio idrocarburi alifatici saturi e insaturi
                 </a>
                 <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    Sintesi del limoncello
                 </a>
                 <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    ELISA p24
                 </a>
                 <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    Sintesi PLA
                 </a>
                 <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    Degradazione e riconversione PLA
                 </a>
                 <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    Sintesi colla ecologica
                 </a>
                 <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    Sintesi Nailon 6.6
                 </a>
                 <a href={relaz} target='_blank' className=' flex p-4 bg-[#242424] rounded-lg hover:bg-[#b3b3b3] hover:text-black'>
                    Tecniche di biologia biomolecolare
                 </a>
                 
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Extra