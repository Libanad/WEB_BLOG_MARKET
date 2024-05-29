import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ user }) => {
  return (
    <div className="absolute top-12 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
      <ul className="py-1">
        <li>
          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/write" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Write
          </Link>
        </li>
        <li>
          <Link to="/myblog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            My Blog
          </Link>
        </li>
        <li>
          <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
