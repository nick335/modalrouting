import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import Link from 'next/link'

const ForgotPassword = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/30 flex items-center justify-center'>
      <div className='relative bg-white w-[90%] h-36 rounded-lg flex items-center justify-center shadow-sm'>
        <h3>Forgot Password</h3>
        <Link href='/'>
          <FaXmark className='w-6 h-6 text-red-500 absolute top-2 right-4' />
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword