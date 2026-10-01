import React from 'react'

export default function PageSize() {
  return (
    <div className='fixed bottom-1 right-1 md:bg-orange-500 lg:bg-pink-500 xl:bg-yellow-500 2xl:bg-purple-500  sm:bg-sky-500  bg-rose-500 text-transparent p-2 rounded-tl-lg z-50 flex itemcenter justify-center'>
        <span className='inline-block absolute text-white font-bol sm:text-transparent'>XS</span>
        <span className='inline-block absolute sm:text-white font-bol md:text-transparent'>SM</span>
        <span className='inline-block absolute md:text-white font-bol lg:text-transparent'>MD</span>
        <span className='inline-block absolute lg:text-white font-bol xl:text-transparent'>LG</span>
        <span className='inline-block absolute xl:text-white font-bol 2xl:text-transparent'>XL</span>
        <span className='inline-block absolute 2xl:text-white font-bol '>2XL</span>
    </div>
  )
}
