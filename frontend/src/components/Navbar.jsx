import { useContext, useState } from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { UserContext } from "../context/usercontext";

const Navbar = () => {

  const [prompt, setPrompt] = useState("")
  const [menu, setMenu] = useState(false);
  const { user } = useContext(UserContext); // Retrieve user context
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center px-6 md:px-20 py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Blog Market</Link>
      </h1>
      {path==="/" && <div className="flex justify-center items-center space-x-0">
        <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><IoMdSearch /></p>
        <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 py-1" placeholder="Search a post" type="text" />
      </div>}
      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <>
            <h3><Link to="/write">Write</Link></h3>
            <h3><Link to={`/profile/${user.id}`}>Profile</Link></h3>
          </>
        ) : (
          <>
            <h3 className="mr-4"><Link to="/login">Login</Link></h3>
            <h3><Link to="/register">Register</Link></h3>
          </>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg relative">
        <p className="cursor-pointer">
          <FaBarsProgress />
        </p>
        {menu && <Menu user={user} />}
      </div>
    </div>
  );
};

export default Navbar;
