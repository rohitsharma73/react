import React from 'react'
import { ReactTyped} from "react-typed";
import Btn from './elements/Btn';

function Hero() {
  return (
    <>
      <div className='text-white'>
        <div className='max-w-[900px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-green-400 text-sm font-bold p-2'>GROWING WITH DATA ANALITICS</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>Grow with data</h1>

          <div className='flex justify-center items-center'>
            <p className='font-mono md:text-4xl sm:text-3xl text-2xl py-4'>
              Fast , flexible finacing for &nbsp;
              <ReactTyped
              className='font-mono md:text-4xl sm:text-3xl text-2xl'
              strings={['BTS', 'BTC', 'SASS']}
              typeSpeed={120}
              backSpeed={130}
              loop 
              />
            </p>
          </div>
          <p className='md:text-2xl text-xl text-gray-600'>Monitor your data analytics to increase reveenue for BTS ,BTC and SASS plateform.</p>
          <Btn text='Click Here' margin={'mx-auto'}/>
        </div>
      </div>
    </>
  )
}

export default Hero