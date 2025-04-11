import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Sustainable Farming
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your farming practices with our advanced AI technology. Get real-time insights,
              optimize resources, and grow smarter for a sustainable future.
            </p>
            <div className="flex gap-4">
              <Link
                to="/get-started"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 flex items-center"
              >
                Start Growing Smarter
              </Link>
              <Link
                to="/about"
                className="text-gray-700 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="AI-powered farming"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}