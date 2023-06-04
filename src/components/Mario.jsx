import React from 'react'
import Biot from '../assets/biotage.jpg'  
import uffGruppo from '../assets/fotouffmn.jpg'
import Nano from '../assets/nanoparticle.jpg'
import Datab from '../assets/database.png'
import M3 from '../assets/3M.webp'
import topi from '../assets/topi.jpg'
import mdma from'../assets/mdma.jpg'
import silvio from '../assets/gruppomn.jpg'
import me from '../assets/me.png'

const Mario = () =>{
  return (
  <div class=' w-full  bg-[#181818] text-[#ffff] scroll-smooth'>
     {/*title container*/}
     <div class=' justify-center place-items-center flex '>
      <div class=' lg:row-span-full  row-span-1 mx-auto w-full justify-center flex  '>
        <div class='grid grid-rows-2 py-12 '>
          <p class='text-center py-2 text-3xl md:text-4xl font-bold decoration-4 underline underline-offset-8'>PCTO - ATTIVITÀ DI RICERCA PRESSO IRCCS MARIO NEGRI</p>
          <div class='text-xl md:text-2xl text-center font-bold text-[#b3b3b3] '>
            <p>Dipartimento di Biochimica e Chimica delle Proteine</p>
            <p >13 Giugno - 29 Luglio 2022</p>
          </div>
        </div>
        </div>
      </div>
      {/*Introduction */}
      <div class=' flex w-[80vw] place-items-center mx-auto justify-center bg-black rounded-xl '>
        <div class='grid  grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-items-center'>
          <div class=' mx-auto py-4 m:py-0'>
          <p class=' font-bold text-[1.5rem] md:text-[2rem] text-center '>Introduzione</p>
            <p class='  lg:w-[30vw] px-12 text-[1rem] md:text-[1.2rem] text-justify '>
            Nei mesi di Giugno e Luglio 2022, alla fine del IV anno ho trascorso sette settimane
            nell'Istituto di Ricerca Mario Negri a Milano. <br></br>
            Con il progetto "Summer Students", il Mario Negri da diversi anni accoglie circa 15 studenti, inserendoli nei diversi
            laboratori dell'Istituto assegnandoli ad un tutor. 
            Come studente delle scuole superiori ho avuto la possibilità di seguire in prima linea 
            diversi progetti di ricerca nel campo della sperimentazione farmacologica gestiti dal mio 
            Tutor dr. Mario Salmona. <br></br>
            </p>
            </div>
           <div class='row-span-full lg:row-span-1 '>
           <div class='my-auto flex mx-auto p-4'>
              <img src={uffGruppo} className='rounded-lg mx-auto w-[80vw] md:w-[65vw] lg:w-[40vw]  flex' alt='foto di gruppo'></img>
        </div>
           </div>
          </div>
      </div>

{/*Attività svolte*/}
    
{/** Peptidi */}

      <div class='h-screen md:h-[140vh] lg:h-screen flex justify-center place-items-center '>
        <div class=' w-[80vw]  grid grid-rows-2 lg:grid-cols-2
         gap-4 lg:my-12 bg-black rounded-xl ]'>
        <div class='row-span-full place-items-center flex justify-center p-4'>
        <img src={Biot} className='  rounded-lg
         flex w-[80vw] md:w-[60vw] lg:[40vw] ' alt='Biotage Synthetizer'></img>
        </div>
        <div class='flex justify-center lg:row-span-full'>
          <div class=' grid-rows-2 grid  justify-self-end place-items-center'>
            <div class='row-span-full'>
              <div class=' md:p-4 lg:py-0 grid grid-rows-2 font-bold text-[1.5rem] md:text-[2rem] text-center'>
                  <div class='row-span-full'><p class=' decoration-4 underline uderline-offset-4' >Attività svolte</p></div>
                  <p class=''>Sintesi di Peptidi Biologicamente attivi</p>
                </div>
            </div>
            <div class=' row-span-1'>
              <div class='p-4 md:p-12 lg:p-8 text-justify text-[1rem] md:text-[1.2rem] '>
                  <p class=''>La sintesi dei peptidi è un processo fondamentale in un laboratorio
                    per creare modelli in vitro per studiare gli effetti
                    e l’interazione di particolari proteine.</p>
                  <p class=''>Nel laboratorio di Chimica delle proteine, con il dr. Alfredo Cagnotto, si è prodotto diverse 
                    volte un peptide della proteina Tau,  responsabile dell’aggregazione di mielina nelle cellule nervose in malattie
                    come la sindrome di Alzheimer, per testare gli effetti di un farmaco bloccante tale processo, 
                    somministrato per via intranasale. </p>
                  <p class='hidden md:inline'>Durante l’esperienza la sperimentazione del farmaco bloccante era giunta a un nuovo step, 
                    ho avuto la possibilità di partecipare alle riunioni tra i ricercatori e direttori del dipartimento con una casa farmaceutica 
                    per l’organizzazione di una collaborazione volta alla produzione e la sperimentazione massiccia del farmaco per un futuro 
                    studio in vivo ed eventualmente clinico se il farmaco dovesse avere effetti positivi.  
                  </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

{/** Nanoparticelle */}
 <div class='h-screen md:h-[110vh] lg:h-screen'>
    <div class='  flex justify-center 
   place-items-center '>
        <div class=' bg-black rounded-xl w-[80vw]  grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 place-items-center lg:gap-4'>
          <div class='  grid-rows-2 grid  '>
            <div class=' row-span-full '>
              <div class=' grid grid-rows-2 font-bold text-[1.5rem] md:text-[2rem] text-center py-4 lg:py-0 '>
                  <div class='row-span-full'><p class=' decoration-4 underline uderline-offset-4' >Attività svolte</p></div>
                  <p class=''>Nanoparticelle</p>
                </div>
            </div>
            <div class='  flex place-items-center'>
              <div class=' md:px-12 md:pb-4 text-justify text-[1rem] md:text-[1.2rem] '>
                  <p class=''>All'interno del laboratorio del dr. Paolo Bigini, si sono svolte ricerche sulla somministrazione di farmaci
                   attraverso nanoparticelle e sugli effetti dei vaccini anti-Covid. </p>
                  <p class=''>Attività:
                    <ul class='list-disc list-inside '>
                      <li class='font-bold '>Genereazione e Caraterizzazione di un modello murino per la fibrosi polmonare
                        <ul class=' font-normal list-decimal list-inside'>
                          <li>Preparazione di tessuti murini in paraffina, taglio dei campioni al criostato e microtomo</li>
                          <li>Hematoxylin Eosin Staining</li>
                          <li>Acquisizione immagini al microscopio</li>
                          </ul>
                      </li>
                      <li class='font-bold'>Studio in vitro di fenomeni di EMT indotti dai Vaccini Pfizer e Moderna
                        <ul class=' font-normal list-decimal list-inside '>
                          <li>Preparazione e accrescimento di colture cellulari</li>
                          <li>Western Blot</li>
                        </ul>
                      </li>
                      
                    </ul>
                    </p>
              </div>
            </div>
            </div>
        <div class=' lg:row-span-1 row-span-full place-items-center flex justify-center p-2'>
        <img src={Nano} class=' rounded-lg flex justify-center 
        w-[90vw] md:w-[40vw] ' alt='Biotage Synthetizer'></img>
        </div>
        </div>
      </div>
      </div>
{/**Database */}
      <div class='flex justify-center place-items-center h-screen lg:h-[70vh] mb-[10vh] '>
        <div class=' bg-black rounded-xl w-[80vw] grid grid-rows-2 lg:grid-cols-2 md:gap-4'>
          <div  class=' flex place-items-center  lg:row-span-full'>
            <img src={Datab} alt='database sample' class='md:w-[70%] lg:w-full py-2 flex md:mx-auto'></img>
          </div>
        <div class='row-span-full flex place-items-center'>
          <div class='grid-rows-2 grid  '>
            <div class='row-span-full  '>
              <div class='  grid grid-rows-2 font-bold text-[1.5rem] md:text-[2rem] text-center '>
                  <div class='row-span-full'><p class=' decoration-4 underline uderline-offset-4 ' >Attività svolte</p></div>
                  <p class=''>Realizzazione di un database</p>
                </div>
            </div>
            <div class=' row-span-1 '>
              <div class='px-12  text-justify text-[1rem] md:text-[1.2rem]'>
                  <p class=''>Nelle ultime settimane ho avuto l'occasione di creare un database tramite MS Acess per
                  l'archiviazione dei peptidi prodotti e segnalare la loro disponibilità in Istituto, l'esigenza era quella di 
                  avere una piattaforma che fosse facilmente consultabile e aggiornabile, che potesse facilitare e 
                  incentivare i ricercatori alle collaborazioni con il dipartimento di chimica delle proteine. </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
{/**Seminari */}  
      <div class='h-[280vh] lg:h-[120vh] flex justify-center place-items-center text-justify'>
        <div class='w-[80vw] md:w-[70vw] lg:w-[80vw]'>
          <div>
            <p class='font-bold text-[1.5rem] md:text-[2rem] text-center decoration-4 underline uderline-offset-4 mb-14'>Attività Extra</p>
              <div class='text-[1rem] md:text-[1.2rem] lg:grid lg:grid-cols-2 gap-6 '>
                <div class='p-2 bg-black rounded-xl lg:my-0 my-16 '>
                  <div>
                    <img src={mdma} alt='mdma effects' class='p-2 rounded-xl  '></img>
                  </div>
                <div ><span class=' bg-gray-500 font-bold '>Incontri formativi</span>
                : circa tre volte a settimana, noi summer students ci riunivamo dopo la pausa pranzo, per l'appuntamento fisso in cui 
                  i ricercatori dell'Istituto hanno tenuto incontri su diversi argomenti come l'abuso di sostanze e i loro effetti sul corpo, 
                  le malattie psichiatriche, la prevenzione e l'importanza della ricerca del cancro e delle malattie rare, biotecnologie 
                  e bioinformatica.
                </div>
                </div>
                <div class='p-2 bg-black rounded-xl  lg:my-0 my-16  '>
                  <div>
                    <img src={M3} alt='innovation center 3M' class='p-2 rounded-xl '></img>
                  </div>
                  <div>
                  <span class=' bg-gray-500 font-bold '>
                  Visita all'Innovation Center 3M a Milano</span>: il 4 Luglio abbiamo avuto l'opportunità di visitare l'headquarter italiano di una delle più
                  grandi multinazionali americane che si occupa della produzione di dispositivi di protezione individuale, adesivi, abrasivi, pellicole rifrangenti;
                  è stato molto interessante visitare una struttura privata in cui si investe moltissimo sulla ricerca e sulla sperimentazione di nuove tecniche
                  di produzione e nuovi materiali.
                  </div>
                </div>
                <div class='p-2 bg-black rounded-xl  lg:my-0 my-16 '>
                <div>
                  <img src={silvio} alt='Group photo with silvio garattini' class='p-2 rounded-xl'></img>
                </div>
                <div ><span class=' bg-gray-500 font-bold '>Incontro con il fondatore dell'Istituto Silvio Garattini</span>: durante la permanenza in Istituto abbiamo incontrato il dr. Garattini, attuale presidente
                  e fondatore del Mario Negri che ci ha spiegato la nascita e l'evoluzione dell'Istituto, il significato della ricerca e della politica di non-brevetto. 
                  Successivamente abbiamo conosciuto l'attuale direttore dr. Giuseppe Remuzzi che ci ha illustrato il lavoro che viene svolto nella sede di Bergamo. 
                </div>
                </div>
                <div class='p-2 bg-black rounded-xl  lg:my-0 mt-16 '>
                <img src={topi} alt='mouse tests' class='p-2 rounded-xl '></img>
                <div ><span class=' bg-gray-500 font-bold '>Visita allo stabulario dell'Istituto</span>: dopo un incontro preparativo in cui 
                ci hanno spiegato tutti i protocolli seguiti nella sperimentazione animale, abbiamo visitato lo stabulario, gli animali su cui si svolgono
                le ricerche sono topi e ratti, è stato uno dei momenti più intensi e straordinari in Istituto, ho capito che ad ogggi la ricerca su modelli 
                animali sia fondamentale e difficoltosa, ci vuole una grande responsabilità, tenendo sempre a mente la prima regola 
                della sperimentazione cioè che l'animale deve, in qualsiasi caso, essere sottopposto alla minore sofferenza possibile. 
                </div>
              </div>
                
              </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      
{/*Conclusioni*/ }
<div class='h-[170vh] lg:h-screen flex place-items-center justify-center'>
  <div class='w-[80vw]'>
  <div class=''>
    <p class='font-bold text-[1.5rem] md:text-[2rem] text-center decoration-4 underline uderline-offset-4 '>Conclusioni</p>
  </div>
  <div class='text-justify text-[1rem] md:text-[1.2rem]'>
   <div class='lg:grid lg:grid-cols-3 place-items-center lg:gap-6'>
    <div class='p-2 bg-black rounded-xl  lg:my-0 my-16 '><span class=' bg-gray-500 font-bold '>Punti di forza</span>
    <div>L'esperienza di alternanza è stata uno dei momenti più formativi della mia vita da studente e personale, ho capito 
      come funziona il lavoro di un ricercatore sotto tanti punti di vista, la dedizione e lo studio costante che richiede 
      questo mestiere che è un vero e proprio stile di vita. Ho appreso diversi protocolli di laboratorio e il funzionamento delle
      apparecchiature di laboratorio, 
    </div>
    </div>
    <div class='p-2 bg-black rounded-xl  lg:my-0 my-16 '><span class=' bg-gray-500 font-bold '>Punti di debolezza</span>
      <div>Non ho individuato delle vere criticità nella mia esperienza, l'organizzazione è stata molto curata 
        in tutte le attività svolte, la durata del progetto è lunga e viene svolto nel periodo estivo, inizialmente
        questa idea mi ha intimorito pensando che sarebbe stato molto difficile e faticoso passare tutte le giornate in Istituto 
        ma alla fine ne è valsa la pensa e lo rifarei certamente. 
      </div>
    </div>
    <div class='p-2 bg-black rounded-xl  lg:my-0 my-16 '><span class=' bg-gray-500 font-bold '>Ringraziamenti</span>
    <div>
      Ringrazio il mio tutor Mario Salmona per essere stato un vero maestro di vita con il suo forte entusiasmo anche dopo un'intera vita 
      di ricerca  e la sua mente straordinaria, ha lasciato in me un ricordo indelebile. Ringrazio Alfredo Cagnotto, il mio tutor nel laboratorio 
      di sintesi dei peptidi con cui ho passato la maggior parte del mio tempo, un grandissimo lavoratore sempre disponibile e attento a farmi capire 
      tutti i dettagli del lavoro svolto assieme, Giulia Moscatiello, Jennifer Fernandez e Annalisa Morelli
      le ricercatrici del laboratorio di Nanobiologia con cui ho avuto modo di imparare tantissimi protocolli e passare le giornate in Istituto, 
      infine ringrazio i miei compagni summer students con cui si è creato un rapporto speciale come una vera e propria classe, ci siamo supportati
      in tutto condividendo un'esperienza indimenticabile. 
    </div>
    </div>
    </div> 
  </div>
  </div>
</div>
  </div>


  )
  
}
export default Mario