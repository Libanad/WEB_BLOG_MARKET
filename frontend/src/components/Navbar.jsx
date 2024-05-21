import { useState } from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const user = true; // Change to true to simulate a logged-in user

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center px-6 md:px-20 py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Blog Market</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p><IoMdSearch /></p>
        <input className="outline-none px-3 py-1" placeholder="Search a post" type="text" />
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <>
            <h3><Link to="/write">Write</Link></h3>
            <h3><Link to="/profile">Profile</Link></h3>
          </>
        ) : (
          <>
            <h3><Link to="/login">Login</Link></h3>
            <h3><Link to="/register">Register</Link></h3>
          </>
        )}
      </div>
      <div className="md:hidden text-lg relative">
        <p onClick={showMenu} className="cursor-pointer">
          <FaBarsProgress />
        </p>
        {menu && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <ul>
              {!user && (
                <>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
