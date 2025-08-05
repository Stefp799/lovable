import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoGrid from './components/VideoGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <VideoGrid />
      <Footer />
    </div>
  )
}

export default App
