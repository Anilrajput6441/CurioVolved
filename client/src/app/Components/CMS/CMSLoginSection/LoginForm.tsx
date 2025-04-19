import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-y-[6vmin] justify-center items-center '>
        <h1 className='text-[4vmin] font-bold flex justify-center mt-8'>Admin Login</h1>
        <input className='bg-white p-3 w-full lg:w-[90%] mt-[4vmin] focus:outline-none' type="text" placeholder="Enter email" />
        <input className='bg-white p-3 w-full lg:w-[90%] focus:outline-none' type="password" placeholder="Password" />
        <button className='bg-[#3c3c3c] p-3 w-[40%] text-[#fff]' type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm