/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Footer = () => {
  return (
    // Membuat Footer
    <div className="flex justify-center items-center h-10 bg-transparent text-white fixed-bottom w-full" style={{ position: 'absolute', bottom: '0' }}>
      <p>© 2023 <a href='https://ahmadammarm.github.io/ammar' target='_blank'>ammar.</a></p>
    </div>
  )
}

export default Footer


