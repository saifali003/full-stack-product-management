import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Product Management
        </h1>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-blue-700 transition duration-300 font-medium"
          >
            Add Product
          </Link>
          <Link
            to="/show"
            className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-blue-700 transition duration-300 font-medium"
          >
            Show Products
          </Link>
        </div>

      </div>
    </nav>
  );
}