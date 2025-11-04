import React from 'react'

function Footer() {
  return (
    <div className='bg-black py-8 flex items-center justify-around'>
      <div className='text-white flex flex-col gap-3'>
        <h1 className='text-[25px] font-light'>Teeramet Pakkotanang</h1>
        <p className='font-light'>Call me Boy</p>
        <p className='font-light'>2568 | 2025</p>
      </div>
      <div className='flex flex-col justify-center pb-5'>
        <img src="/image/f.png" alt="" className='w-30 pl-5' />
        <div className='flex gap-4'><img src="/image/github.svg" alt="" className='invert w-8'/><img src="/image/discord.svg" alt="" className='w-8'/><img src="/image/linkedin-svgrepo-com.svg" alt="" className='invert w-8'/></div>
      </div>
      <div className='text-white flex flex-col gap-3'>
        <p className='font-light'>Email : boycubeu@gmail.com</p>
        <p className='font-light'>Phone : 092-524-5402</p>
        <p className='font-light'>Facebook : Teeramet Pakkotanang</p>
        <p className='font-light'>Instagram : boy_ssnht</p>
      </div>
    </div>
  )
}

export default Footer
