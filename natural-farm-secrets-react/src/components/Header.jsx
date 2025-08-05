import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-95 z-50 shadow-md">
      <nav className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-primary">
          Natural Farm Secrets
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-primary hover:text-secondary transition-colors duration-300">
            Home
          </a>
          <a href="#videos" className="text-primary hover:text-secondary transition-colors duration-300">
            Videos
          </a>
          <a href="#about" className="text-primary hover:text-secondary transition-colors duration-300">
            About
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-primary hover:text-secondary">
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
