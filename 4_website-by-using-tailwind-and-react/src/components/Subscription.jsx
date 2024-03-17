import React from 'react'
import Card from './elements/Card'

function Subscription() {
    return (
        <>
            <div className='bg-white py-17'>
                <div className='max-w-[1240px] flex lg:flex-nowrap  md:flex-wrap flex-nowrap flex-col md:flex-row justify-center lg:justify-around items-center mx-auto'>
                    <Card img={'https://img.freepik.com/free-vector/modern-call-center-background-lineal-style_23-2147956208.jpg?t=st=1710005643~exp=1710009243~hmac=241c47731cdfc2a1c84781e6c8289be05ed4cda7f371c17146da0ed05a3b9f53&w=740'}/>
                    <Card img={'https://img.freepik.com/free-vector/modern-call-center-background-lineal-style_23-2147956208.jpg?t=st=1710005643~exp=1710009243~hmac=241c47731cdfc2a1c84781e6c8289be05ed4cda7f371c17146da0ed05a3b9f53&w=740'}/>
                    <Card img={'https://img.freepik.com/free-vector/modern-call-center-background-lineal-style_23-2147956208.jpg?t=st=1710005643~exp=1710009243~hmac=241c47731cdfc2a1c84781e6c8289be05ed4cda7f371c17146da0ed05a3b9f53&w=740'}/>
                </div>
            </div>
        </>
    )
}

export default Subscription