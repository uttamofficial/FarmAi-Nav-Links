export default function Community() {
  const communityPosts = [
    {
      id: 1,
      author: "John Smith",
      title: "Success with AI Crop Recommendations",
      content: "Using Farm AI's recommendations, I increased my yield by 30% this season!",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Iowa, USA",
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      author: "Maria Garcia",
      title: "Sustainable Farming Practices",
      content: "Implementing the suggested irrigation patterns helped save water and improve crop health.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "California, USA",
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      author: "David Chen",
      title: "Precision Agriculture Success",
      content: "The AI-powered soil analysis helped me optimize fertilizer usage and reduce costs significantly.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Ontario, Canada",
      likes: 156,
      comments: 28
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Agriculture Workshop",
      date: "April 15, 2024",
      location: "Virtual Event",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Sustainable Farming Conference",
      date: "May 20, 2024",
      location: "Chicago, IL",
      type: "Conference"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Farming Community</h1>
            <p className="text-xl text-gray-600">Connect, share, and learn from fellow farmers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
              <div className="space-y-8">
                {communityPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">{post.location}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.content}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.likes} likes</span>
                        <span className="mx-2">•</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="border-b pb-4">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.date}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded">
                        {event.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black text-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
                <p className="mb-4">Share your farming journey and connect with other farmers.</p>
                <button className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}