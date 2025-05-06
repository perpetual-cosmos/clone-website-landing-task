import React from 'react'

export default function Card(props) {
  return (
    <div
      className='flex flex-col justify-center items-center w-full h-[60vh] bg-cover bg-center text-white'
      style={{ backgroundImage: `url(/${props.imgURL})` }}
    >
      <p className='font-americana text-3xl font-semibold mb-2'>{props.heading}</p>
      <p className='font-americana text-6xl text-bold mb-4'>{props.subHeading}</p>
      <button className='font-americana bg-purple-300 px-4 py-2 rounded hover:bg-pink-500'>{props.buttonText}</button>
    </div>
  )
}
