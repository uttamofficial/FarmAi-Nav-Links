import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Farm AI</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Empowering farmers with AI-driven insights for sustainable agriculture.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link></li>
              <li><Link to="/market-prices" className="text-gray-600 hover:text-gray-900">Market Prices</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Community</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/community" className="text-gray-600 hover:text-gray-900">Success Stories</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Farm AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}