import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   
         <nav className="bg-gray-800 flex ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
           
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <Link to='/login' className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"'>Log In </Link>
                <Link to='/register' className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"'>Register</Link>
                <Link to='/Aboutus' className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"'>About Us</Link>
                <Link to='/Contacts' className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
  )
}

export default Navbar ; 