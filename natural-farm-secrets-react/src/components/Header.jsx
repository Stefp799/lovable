import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-purple-800 z-50 shadow-lg">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
            🌾
          </div>
          <span className="text-xl font-semibold">
            Natural Farm Secrets
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium">
            Home
          </a>
          <a href="#teachers" className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium">
            Teachers
          </a>
          <a href="#contact" className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium">
            Contact
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white hover:text-yellow-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
