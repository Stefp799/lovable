import React from 'react'

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Tony Busatta",
      specialty: "Vermiculture Specialist",
      description: "Italian farming tradition meets earthworm mastery for sustainable soil health.",
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      linkText: "WATCH TONY'S ORIGIN STORY →"
    },
    {
      id: 2,
      name: "Tony Busatta",
      specialty: "Vermiculture Specialist", 
      description: "Italian farming tradition meets earthworm mastery for sustainable soil health.",
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      linkText: "WATCH TONY'S ORIGIN STORY →"
    },
    {
      id: 3,
      name: "Tony Busatta",
      specialty: "Vermiculture Specialist",
      description: "Italian farming tradition meets earthworm mastery for sustainable soil health.",
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      linkText: "WATCH TONY'S ORIGIN STORY →"
    }
  ]

  return (
    <section id="teachers" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${teacher.videoId}`}
                  title={`${teacher.name} Introduction`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                  {teacher.name} - {teacher.specialty}. {teacher.description}
                </h3>
                <a 
                  href="#" 
                  className="inline-flex items-center text-purple-700 hover:text-purple-900 font-medium text-sm transition-colors duration-300"
                >
                  {teacher.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teachers
