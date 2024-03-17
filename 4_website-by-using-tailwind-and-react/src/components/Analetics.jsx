import React from 'react'
import Btn from './elements/Btn'

function Analetics({ img, heading, mainHeading }) {
  return (
    <>
      <div className='bg-white py-16 px-4 w-full'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
          <img src={img} alt="img" />
          <div className='flex flex-col px-8 item-center justify-center'>
            <p className='font-bold uppercase text-green-400 text-xl'>{heading}</p>
            <h1 className='font-bold text-4xl  py-2'>{mainHeading}</h1>
            <p className='font-mono'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam nemo libero sapiente aperiam! Provident iusto voluptatum necessitatibus impedit quidem. Alias excepturi, cupiditate placeat earum necessitatibus aliquam blanditiis est minus sunt!
            </p>
            <Btn text='click here'/>
          </div>
        </div>

      </div>
    </>
  )
}

export default Analetics