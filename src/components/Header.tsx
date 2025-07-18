import { FiBell, FiMoon } from "react-icons/fi";

const Header = () => (
  <header className="flex items-center justify-between mb-8">
    <div>
      <h2 className="text-2xl font-bold">Welcome back, Miriam 👋</h2>
      <p className="text-gray-500 text-sm">Here’s what’s happening with your social accounts today.</p>
    </div>
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
      <button className="relative">
        <FiBell className="text-2xl text-gray-500" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <span>
        <FiMoon className="text-2xl text-gray-500" />
      </span>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="User"
        className="w-10 h-10 rounded-full border-2 border-indigo-500"
      />
    </div>
  </header>
);

export default Header;