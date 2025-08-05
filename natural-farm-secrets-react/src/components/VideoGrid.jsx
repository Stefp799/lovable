import React from 'react'

const VideoGrid = () => {
  const featuredArticle = {
    title: "Earthworms Separating by either Trommel or Shaking Deck",
    description: "Modern Earthworm separators are explained in this video by our friendly famer from Tuscany Tony Busatta.",
    date: "Aug 2, 2025",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop"
  }

  const articles = [
    {
      id: 1,
      title: "Tony's Revolutionary CFT System: From Vineyard to Manufacturing Excellence",
      description: "Watch as Tony Busatta demonstrates the complete journey from traditional Italian vineyard wisdom to cutting edge soil...",
      date: "Jan 30, 2025",
      videoId: "dQw4w9WgXcQ",
      badge: "TODAY'S FEATURE"
    },
    {
      id: 2,
      title: "Peter's Wood Chip Selection Secrets: Advanced Carbon Ratio Mastery",
      description: "Master the art of wood chip selection with Peter's advanced techniques for optimal carbon ratios. Learn how different wo...",
      date: "Jan 29, 2025",
      videoId: "dQw4w9WgXcQ",
      badge: "EXCLUSIVE"
    }
  ]

  const categories = [
    { name: "Earthworms", count: 12 },
    { name: "Wood Chips", count: 8 },
    { name: "KNF Methods", count: 15 },
    { name: "Soil Health", count: 6 }
  ]

  const recentStories = [
    {
      title: "Peter's Wood Chip Selection Secrets",
      date: "Jan 29, 2025",
      description: "Advanced techniques for optimal carbon ratios..."
    },
    {
      title: "Master Hun's Fermentation Fundamentals",
      date: "Jan 28, 2025",
      description: "Korean Natural Farming principles revealed..."
    },
    {
      title: "The Busatta Vineyard Transformation",
      date: "Jan 27, 2025",
      description: "Three generations of Italian farming wisdom..."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <article className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {featuredArticle.title}
              </h1>
              
              <div className="relative mb-6">
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-bold z-10">
                  BREAKING NEWS
                </span>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredArticle.videoId}`}
                    title={featuredArticle.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-4">
                {featuredArticle.description}
              </p>
              <p className="text-gray-500 text-sm mb-6">{featuredArticle.date}</p>
              <a href="#" className="text-purple-700 hover:text-purple-900 font-medium">
                READ FULL STORY →
              </a>
            </article>

            {/* Additional Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="border-b border-gray-200 pb-6">
                  <div className="relative mb-4">
                    <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white z-10 ${
                      article.badge === 'EXCLUSIVE' ? 'bg-purple-600' : 'bg-blue-600'
                    }`}>
                      {article.badge}
                    </span>
                    <div className="aspect-video bg-black rounded overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${article.videoId}`}
                        title={article.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{article.description}</p>
                  <p className="text-gray-500 text-sm mb-3">{article.date}</p>
                  <a href="#" className="text-purple-700 hover:text-purple-900 font-medium text-sm">
                    READ FULL STORY →
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors">
                      {category.name}
                    </a>
                    <span className="text-gray-500 text-sm">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Stories */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Stories</h3>
              <div className="space-y-4">
                {recentStories.map((story, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      <a href="#" className="hover:text-purple-700 transition-colors">
                        {story.title}
                      </a>
                    </h4>
                    <p className="text-gray-500 text-xs mb-1">{story.date}</p>
                    <p className="text-gray-600 text-sm">{story.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-purple-800 p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-2">Daily Secrets</h3>
              <p className="text-purple-100 mb-4 text-sm">
                Get tomorrow's farming insights delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-2 px-4 rounded transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoGrid
