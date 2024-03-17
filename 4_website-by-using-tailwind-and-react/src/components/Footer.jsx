import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='text-white py-16'>
        <div className='grid lg:grid-cols-3 max-w[1240] mx-auto px-4 gap-8 '>
            <div>
                <h1 className='text-green-300 m-4 font-bold text-3xl font-mono'>React.</h1>
                <p className='font-mono m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt, cumque dicta quaerat, ex, porro quae id quam autem earum dolor culpa quas!</p>
                <div className='m-4 flex'>
                  <FaDribbbleSquare className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white'/>
                  <FaFacebookSquare className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white'/>
                  <FaGithubSquare className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white'/>
                  <FaInstagram className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white'/>
                  <FaTwitterSquare className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white'/>
                </div>
            </div>
            <div className=' col-span-2 grid grid-cols-4 items-center gap-4 justify-center '>

              <div className='mx-auto'>
                <h3 className='font-bold py-2'>Solution</h3>
                <ul className='font-mono'>
                  <li className='cursor-pointer py-1'>Analytics</li>
                  <li className='cursor-pointer py-1'>Marketing</li>
                  <li className='cursor-pointer py-1'>Commerce</li>
                  <li className='cursor-pointer py-1'>Insights</li>
                </ul>
              </div>

              <div className='mx-auto'>
                <h3 className='font-bold py-2'>Solution</h3>
                <ul className='font-mono'>
                  <li className='cursor-pointer py-1'>Analytics</li>
                  <li className='cursor-pointer py-1'>Marketing</li>
                  <li className='cursor-pointer py-1'>Commerce</li>
                  <li className='cursor-pointer py-1'>Insights</li>
                </ul>
              </div>

              <div className='mx-auto'>
                <h3 className='font-bold py-2'>Solution</h3>
                <ul className='font-mono'>
                  <li className='cursor-pointer py-1'>Analytics</li>
                  <li className='cursor-pointer py-1'>Marketing</li>
                  <li className='cursor-pointer py-1'>Commerce</li>
                  <li className='cursor-pointer py-1'>Insights</li>
                </ul>
              </div>

              <div className='mx-auto'>
                <h3 className='font-bold py-2'>Solution</h3>
                <ul className='font-mono'>
                  <li className='cursor-pointer py-1'>Analytics</li>
                  <li className='cursor-pointer py-1'>Marketing</li>
                  <li className='cursor-pointer py-1'>Commerce</li>
                  <li className='cursor-pointer py-1'>Insights</li>
                </ul>
              </div>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer