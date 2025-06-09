import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-green-50 p-4'>
      
      <footer className="text-center text-gray-500 text-xs p-4">
        <p>
          &copy; {new Date().getFullYear()} Pokemon App. All rights reserved.
        </p>
    </footer>
    </div>
  )
}

export default Footer
