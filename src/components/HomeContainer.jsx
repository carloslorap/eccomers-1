import React from 'react';
import Delivery from '../components/img/delivery.png';
import HeroBg from '../components/img/heroBg.png';

import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'  id='home'>

      <div className='py-2 flex-1 flex flex-col items-start  justify-center gap-6'>
       <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
         <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
         <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img alt='deli' src={Delivery} className='w-full h-full object-contain'/>
         </div>
       </div>
       <p className='text-[2.5rem] lg:text-[3.5rem] font-bold space tracking-wide text-headingColor '>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[4rem] '>Your City</span></p>
       <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam excepturi nobis optio eius, maiores fugit iusto eum tenetur. At quas sint aliquam, voluptates repellendus molestiae nam placeat magnam consequatur</p>
       <button typeof='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200  font-bold' >Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
            <img src={HeroBg} alt='hero' className='ml-auto h-420 w-full lg:w-auto lg:h-650'/>

            <div className='w-full h-full absolute top-0 left-0  items-center justify-center px-20  py-4 gap-2  grid grid-cols-2 '>
              {heroData && heroData.map((n)=>(
                <div key={n.id} className='lg:w-190  p-4 my-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg'>
                <img src={n.imageSrc} alt='i1' className='w-20 lg:w-40 -mt-10 lg:-mt-20 '/>
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name} </p>

                <p className='text-[10px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp} </p>

              <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span> {n.price}</p>
            </div>
              ))}
            </div>
      </div>
    </section>
  )
}

export default HomeContainer