import React from 'react'
import Btn from './elements/Btn'

function NewsLetter() {
    return (
        <>
            <div className='w-full py-16 text-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <div className='flex flex-col justify-center px-4 md:my-0 my-4 md:px-10'>
                        <h1 className='font-bold text-2xl md:text-3xl'>What is & trick to optimize your flow?</h1>
                        <p>Sign up to our newsletter and stay up to date.</p>
                    </div>
                    <div className='flex flex-col md:justify-center px-4 md:px-10'>
                        <div className='flex md:flex-row flex-col'>
                            <input type="text" className='w-[350px] h-13 rounded-lg my-2 md:my-6 p-3 md:mx-2 text-blue-950 font-bold' placeholder='Enter your email' />
                            <Btn text='Notify me'/>
                        </div>
                        <p>We can bout the protection of your data. Read our</p>
                        <p className='text-green-500 underline cursor-pointer'>Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter