import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      title: "Revolutionary Natural Pest Control Method Unveiled",
      description: "Farmers across the country are adopting this new method that eliminates chemical pesticides while increasing crop yields by 30%.",
      publishedAt: "Published 1 hour ago",
      thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=640&h=360&fit=crop",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "How to Create Self-Sustaining Soil in 30 Days",
      description: "Learn the step-by-step process of transforming your soil into a thriving ecosystem without chemical additives.",
      publishedAt: "2 days ago",
      embedUrl: "https://www.youtube.com/embed/1234567890"
    },
    {
      id: 3,
      title: "Secrets of Ancient Farming Techniques",
      description: "Discover how ancient farmers maintained soil fertility for centuries without modern technology.",
      publishedAt: "3 days ago",
      embedUrl: "https://www.youtube.com/embed/9876543210"
    },
    {
      id: 4,
      title: "Companion Planting: The Ultimate Guide",
      description: "Maximize your garden's potential with these proven companion planting combinations that boost growth and deter pests.",
      publishedAt: "5 days ago",
      embedUrl: "https://www.youtube.com/embed/5678901234"
    },
    {
      id: 5,
      title: "Organic Gardening Tips for Beginners",
      description: "Expert gardener shares essential tips for starting your own organic garden, from soil preparation to pest control.",
      publishedAt: "7 days ago",
      embedUrl: "https://www.youtube.com/embed/4567890123"
    },
    {
      id: 6,
      title: "The Science of Crop Rotation",
      description: "Learn how rotating crops can improve soil health and increase yields while reducing the need for chemical inputs.",
      publishedAt: "10 days ago",
      embedUrl: "https://www.youtube.com/embed/7890123456"
    }
  ]

  const featuredVideo = videos[0]
  const regularVideos = videos.slice(1)

  return (
    <section id="videos" className="py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Latest Farming Secrets
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Video */}
        <VideoCard video={featuredVideo} featured={true} />
        
        {/* Regular Videos */}
        {regularVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}

export default VideoGrid
