

import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";


function Nav() {
    const [icon, setIcon] = useState(false);
    return (
        <div className=' text-white w-full h-24 flex justify-between items-center max-w-[1240px] mx-auto'>
            {/* nav heading */}
            <h1 className='text-green-300 w-full font-bold text-3xl font-mono p-3'>React.</h1>

            {/* large scree nav links */}
            <ul className='md:flex hidden text-xl gap-5'>
                <li className='p-4 hover:text-green-400  transition-all ease-in-out duration-500 font-mono uppercase'>Home</li>
                <li className='p-4 hover:text-green-400  transition-all ease-in-out duration-500 font-mono uppercase'>Company</li>
                <li className='p-4 hover:text-green-400  transition-all ease-in-out duration-500 font-mono uppercase'>Resources</li>
                <li className='p-4 hover:text-green-400  transition-all ease-in-out duration-500 font-mono uppercase'>About</li>
                <li className='p-4 hover:text-green-400  transition-all ease-in-out duration-500 font-mono uppercase'>Contact</li>
            </ul>

            {/* icon */}
            <div onClick={() => setIcon(!icon)} className='md:hidden p-3 block'>
                {
                    icon ? <IoMdMenu className='text-2xl' /> : <IoMdClose className='text-2xl' />
                }
            </div>

            {/* small screen navlink */}
            <div className={`${icon ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
                <h1 className='text-green-300 w-full m-4 font-bold text-3xl font-mono'>React.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav