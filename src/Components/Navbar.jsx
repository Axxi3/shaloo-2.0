import React from 'react'
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <img 
          src={logo}
          alt="Logo" 
          className="h-12 md:h-18 object-contain"
        />
      </div>
    </nav>
  )
}