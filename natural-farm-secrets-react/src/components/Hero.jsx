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
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Farming Wisdom, AI-Powered
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-medium text-shadow-md">
            Learn from avatars, rooted in soil and science
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
