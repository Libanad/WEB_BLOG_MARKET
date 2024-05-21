import { Link } from "react-router-dom";

const Menu = ({ user }) => {
  return (
    <div className="bg-white w-48 border border-gray-200 rounded-md shadow-lg absolute right-0 mt-2">
      <ul>
        {!user ? (
          <>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/login">Login</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Menu;
