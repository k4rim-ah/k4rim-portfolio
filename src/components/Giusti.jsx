import React from 'react'
import agostina from '../assets/agostina.jpg'
export const Giusti = () => {
  return (
    <div class=' bg-[#181818] pb-12'>
      <div class=''>
      <div class=''>
      <div class=' lg:row-span-full  row-span-1 mx-auto w-full justify-center flex  '>
        <div class='grid grid-rows-2 py-12'>
          <p class='text-[#ffff] text-center py-2 text-3xl md:text-4xl font-bold decoration-4 underline underline-offset-8'>PCTO - I GIUSTI TRA LE NAZIONI</p>
          <div class='text-xl md:text-2xl text-center font-bold text-[#b3b3b3] '>
            <p>Realizzazione di un docufilm</p>
          </div>
        </div>
        </div>
      </div>
      <div class='flex justify-center place-items-center text-[#ffff] my-12 '>
      <div class='grid lg:grid-cols-2 w-[80vw] bg-black rounded-xl place-items-center'>
      <div class=' mx-auto py-4 lg:py-0 place-items-center'>
          <p class=' font-bold text-[1.5rem] md:text-[2rem] text-center '>Introduzione</p>
            <p class='  lg:w-[30vw] p-4 md:p-12 lg:p-8 text-[1rem] md:text-[1.2rem] text-justify '>
            Durante il periodo di alternanza scuola lavoro 2020-2021 ho partecipato a un progetto, 
            riguardante la realizzazione di un docu-film sulla storia dei Giusti desiani, 
            organizzato dalle docenti Federica Barile e Annamaria Milicia, promosso dall’ente comunale Hub Desio che si occupa di creare un collegamento 
            tra i giovani e il territorio.  
            </p>
            </div>
        <div>
          <img src={agostina} alt='interview extract ' class='rounded-b-lg lg:rounded-l-none lg:rounded-r-lg'></img>
        </div>
      </div>
      </div>
      <div class='flex justify-center place-items-center my-12'>
      <div class=' mt-[10vh]  w-[80vw]'>
        <div class='grid lg:grid-cols-3 place-items-center gap-12'>
          <div class='rounded-lg bg-black text-[#ffff]'>
            <div class='py-6'>
            <div class='font-bold text-[1.5rem] md:text-[2rem] text-center '> Attività svolte</div>
            <div class='p-4 md:p-12 lg:p-8 text-justify text-[1rem] md:text-[1.2rem]'>L’alternanza si è svolta all’interno del nostro istituto, con la supervisione della nostra Tutor Milicia.
               Il lavoro è stato svolto da quattro studenti, divisi per coppie, delle classi 3T e 4T.
                Le principali mansioni svolte sono state la raccolta di materiali e di informazioni utili
                 per avere una chiara comprensione dell’argomento del documentario, la realizzazione di un
                photobook con la piattaforma di impaginazione professionale Adobe InDesign, le riprese
                   della testimonianza della signora Agostina Tagliabue, nipote del Giusto desiano Luigi Tagliabue,
                    il montaggio del docu-film tramite l’applicazione di editing Adobe Premiere Pro. </div>
          </div>
          </div>
          
          <div class='text-[#ffff] rounded-lg bg-black'>
          <div class='py-6'>
            <div class='font-bold text-[1.5rem] md:text-[2rem] text-center '>Punti di forza</div>
            <div class='p-4 md:p-12 lg:p-8 text-justify text-[1rem] md:text-[1.2rem]'> Il tempo per svolgere questo progetto è stato uno dei punti forti dell’alternanza. La nostra tutor
               ci ha dato la possibilità di organizzare da soli i  nostri orari di lavoro, senza imporci particolari limiti e lasciandoci molta flessibilità.
              Questo approccio è stato fondamentale per poter lavorare in tranquillità e puntare sulla qualità del lavoro. 
              L'esperienza è stata molto utile perché mi ha aiutato ad approfondire la passione per il mondo
               dell’editing e dell’impaginazione. In principio avevo una conoscenza molto limitata degli ambienti di montaggio,
                ero spaventato dal lavoro che avrei dovuto fare, ma grazie a un corso online ho appreso tutto ciò che c’era
                 da sapere per la realizzazione del documentario. Non è stato facile ma sono molto contento di essermi messo alla 
                 prova con una sfida così grande. L’alternanza ha aiutato anche a creare un bellissimo rapporto con la nostra 
                 Tutor che si è resa sempre disponibile, seguendoci passo dopo passo e includendoci a trecentosessanta gradi 
                 nel progetto. 
          </div>
          </div>
          </div>

         
          <div class='text-[#ffff] rounded-lg bg-black'>
          <div class='py-6'>
            <div class='font-bold text-[1.5rem] md:text-[2rem] text-center '>Conclusioni</div>
            <div class='p-4 md:p-12 lg:p-8 text-justify text-[1rem] md:text-[1.2rem]'>
               Oltre alle conoscenze informatiche apprese nel corso dell’alternanza, abbiamo ascoltato 
              Agostina che ci ha raccontato la storia di suo nonno - Luigi Tagliabue, Giusto desiano - e della famiglia che lui ha salvato. È stato molto toccante ascoltare
              questa storia, mi è servito a ricordare quanto il fascismo abbia toccato e stravolto la vita 
              delle persone e a comprendere che le cose che ci sembrano più assurde e lontane da noi, sono successe
               in tempi non così lontani.  
              Certamente non  dimenticherò mai di quanto appreso in questo stage, 
              sono felice di poter dire che è stata una esperienza molto positiva sia a livello scolastico
               che personale, è stato molto stimolante poter lavorare in un ambiente che fosse serio ma al tempo 
               stesso sereno e motivante. 

          </div>
          </div>
          </div>
          
          

        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Giusti