export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Started with Farm AI</h1>
            <p className="text-xl text-gray-600">Begin your journey to smarter farming</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Smart farming"
                className="rounded-lg shadow-xl mb-8"
              />
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Why Choose Farm AI?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center">✓</span>
                    <span className="ml-3">AI-powered crop recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center">✓</span>
                    <span className="ml-3">Real-time weather monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center">✓</span>
                    <span className="ml-3">Soil health analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center">✓</span>
                    <span className="ml-3">Market price predictions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Create Your Account</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="farm-size" className="block text-sm font-medium text-gray-700">
                      Farm Size (acres)
                    </label>
                    <input
                      type="number"
                      id="farm-size"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="crops" className="block text-sm font-medium text-gray-700">
                      Primary Crops
                    </label>
                    <select
                      id="crops"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                      <option>Wheat</option>
                      <option>Corn</option>
                      <option>Soybeans</option>
                      <option>Rice</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Farming Experience
                    </label>
                    <select
                      id="experience"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                      <option>Less than 5 years</option>
                      <option>5-10 years</option>
                      <option>10-20 years</option>
                      <option>More than 20 years</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Start Your Free Trial
                  </button>
                </form>

                <div className="mt-6 text-center text-gray-600">
                  <p>Already have an account? <a href="#" className="text-black font-medium">Sign in</a></p>
                </div>
              </div>

              <div className="mt-8 bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our team is here to assist you with the setup process.</p>
                <button className="text-green-600 font-medium hover:text-green-700">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}