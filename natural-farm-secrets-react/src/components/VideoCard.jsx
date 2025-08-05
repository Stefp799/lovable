import React from 'react'

const VideoCard = ({ video, featured = false }) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-lg video-card-hover ${featured ? 'col-span-2 mb-8' : ''}`}>
      <div className={`relative ${featured ? 'pb-[50%]' : 'pb-[56.25%]'} overflow-hidden`}>
        {video.thumbnail ? (
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={video.embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        
        {video.thumbnail && (
          <div className="play-button">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
        {featured && (
          <span className="breaking-badge">BREAKING</span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {video.publishedAt}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  )
}

export default VideoCard
