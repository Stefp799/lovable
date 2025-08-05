import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-lg">
          &copy; 2025 Natural Farm Secrets. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-secondary transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-secondary transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-secondary transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
