import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Teachers from './components/Teachers'
import VideoGrid from './components/VideoGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Teachers />
      <VideoGrid />
      <Footer />
    </div>
  )
}

export default App
