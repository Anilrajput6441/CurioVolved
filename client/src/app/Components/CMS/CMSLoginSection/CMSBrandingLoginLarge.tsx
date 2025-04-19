import React from 'react'
import Image from 'next/image'
const CMSBrandingLoginLarge = () => {
  return (
    <div className='bg-[#3c3c3c] flex justify-center items-center w-full h-full flex-col'>
        <Image className='mb-10'
          src="https://cdn.pixabay.com/photo/2022/01/16/16/44/blogger-logo-6942640_1280.png"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
        <h1 className='text-white text-6xl font-bold '>Curio<span className='text-orange-500'>Volved</span></h1>
        <h5 className="text-white mt-5 text-sm">( Evolve your curiosity with CurioVolved )</h5>
    </div>
  )
}

export default CMSBrandingLoginLarge