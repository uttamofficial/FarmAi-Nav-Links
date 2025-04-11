export default function About() {
  const features = [
    {
      title: "AI-Powered Insights",
      description: "Get real-time recommendations based on weather, soil conditions, and historical data.",
      image: "https://images.unsplash.com/photo-1584467541268-b040f83be3f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sustainable Practices",
      description: "Learn and implement eco-friendly farming techniques that reduce environmental impact.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Resource Optimization",
      description: "Maximize yield while minimizing water and fertilizer usage through smart monitoring.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Farm AI</h1>
            <p className="text-xl text-gray-600">Revolutionizing agriculture through artificial intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We're dedicated to empowering farmers with cutting-edge AI technology to optimize their
                agricultural practices, increase yields, and promote sustainable farming methods.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>AI-powered crop recommendations</li>
                <li>Real-time weather analysis and predictions</li>
                <li>Soil health monitoring and optimization</li>
                <li>Pest and disease detection</li>
                <li>Market trend analysis and pricing insights</li>
              </ul>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Sustainable farming"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Farm?</h2>
            <p className="text-gray-600 mb-6">Join thousands of farmers who are already using Farm AI to improve their yields.</p>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}