import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      >
        <source
          src="https://player.vimeo.com/external/190104147.sd.mp4?s=29324456457b10515753753f8b5b9f56e9004433&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-8">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Secrets of Natural Farming
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn about sustainable farming practices and organic solutions
          </p>
          <button className="bg-secondary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
