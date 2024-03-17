import React from 'react'
import Btn from './Btn'

function Card({img,title='card',price='149'}) {
  return (
    <>
        <div className='bg-white text-black px-4'>
            <div className='flex flex-col w-[300px] mb-4 shadow-xl hover:shadow-slate-900 duration-500 justify-center items-center rounded-md'>
                <img src={img} alt="image" className='w-[220px]'/>
                <h1 className='font-bold text-5xl '>{title}</h1>
                <p className='text-4xl font-black py-4 '>Rs.{price}</p>

                <ul className='px-7 font-bold text-xl  '>
                  <li className='py-1 px-9 border-b border-t border-gray-600'>500 GB Storage</li>
                  <li className='py-1 px-9 border-b border-t border-gray-600'>1 User Allow</li>
                  <li className='py-1 px-9 border-b border-t border-gray-600'>Sent up to 2GB</li>
                </ul>

                <Btn text='Take Now'/>
            </div>
        </div>
    </>
  )
}

export default Card