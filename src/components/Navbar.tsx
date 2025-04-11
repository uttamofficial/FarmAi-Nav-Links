import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Farm AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2">About</Link>
            <Link to="/community" className="text-gray-700 hover:text-gray-900 px-3 py-2">Community</Link>
            <Link to="/resources" className="text-gray-700 hover:text-gray-900 px-3 py-2">Resources</Link>
            <Link to="/market-prices" className="text-gray-700 hover:text-gray-900 px-3 py-2">Market Prices</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-gray-900 px-3 py-2">Dashboard</Link>
            <Link to="/get-started" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}