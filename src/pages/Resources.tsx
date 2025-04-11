export default function Resources() {
  const resources = [
    {
      title: "AI Farming Guide",
      description: "Learn how to leverage AI for better farming decisions",
      link: "#",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Crop Calendar",
      description: "Seasonal planting and harvesting recommendations",
      link: "#",
      category: "Tools",
      image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weather Patterns",
      description: "Understanding weather data for farming",
      link: "#",
      category: "Education",
      image: "https://images.unsplash.com/photo-1561553873-e8491a564fd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const videos = [
    {
      title: "Introduction to AI in Farming",
      duration: "15:30",
      thumbnail: "https://images.unsplash.com/photo-1585513502117-4b2b3f8d8b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sustainable Farming Practices",
      duration: "12:45",
      thumbnail: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Farming Resources</h1>
            <p className="text-xl text-gray-600">Essential tools and knowledge for modern farming</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm font-medium text-green-600">{resource.category}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a href={resource.link} className="text-black font-medium hover:text-gray-700">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Video Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-64 object-cover" />
                    <div className="absolute bottom-4 right-4 bg-black text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
                    <button className="mt-4 text-green-600 font-medium hover:text-green-700">
                      Watch Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Custom Guidance?</h2>
              <p className="text-gray-600 mb-6">
                Our AI-powered system can provide personalized recommendations for your specific farming needs.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                Get Personalized Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}