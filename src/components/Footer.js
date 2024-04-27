/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Footer = () => {
  return (
    // Membuat Footer
    <div className="flex justify-center items-center h-10 bg-transparent text-white fixed-bottom w-full" style={{ position: 'absolute', bottom: '0' }}>
      <p className='cursor-default'>© 2024 <a href='https://wa.me/+201098906252' target='_blank' 
      className='
      hover:text-teal-600 
      transition
      duration-300
      ease-in-out
      '>
        ammar
        </a>
        .
      </p>
    </div>
  )
}

export default Footer


