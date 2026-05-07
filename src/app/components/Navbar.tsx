import { Search, Bell, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">EduLearn</span>
            </div>

            {/* Main Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Browse</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">My Learning</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">For Organizations</a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses, skills, or topics"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-700" />
              <span className="hidden md:inline text-gray-700 font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
