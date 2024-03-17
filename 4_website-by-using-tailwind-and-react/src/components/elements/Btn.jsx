import React from 'react'

function Btn({text='click ',margin}) {
  return (
    <>
    <button className={`border w-[200px] ${margin} my-6 py-3 bg-green-500 text-black font-bold rounded-md border-green-500 uppercase hover:bg-green-900 hover:border-green-900 hover:text-white duration-500 ease-in-out `}>
        {text}
    </button>
    </>
  )
}

export default Btn