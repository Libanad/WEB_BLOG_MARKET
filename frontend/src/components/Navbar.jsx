import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
    const user=true
  return (
    <div className="flex justify-between items-center px-6 md:px-20 py-4"> {/* Adjusted class */}
      <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
      <div className="flex justify-center items-center space-x-0">
        <p><IoMdSearch /></p>
        <input className="outline-none px-3 py-1" placeholder="Search a post" type="text"/>

      </div>
      <div className="flex items-center space-x-4"> {/* Adjusted class */}
        {user?<h3><Link to="/write">Write</Link></h3> :<h3 className="mr-4"><Link to="/login">Login</Link></h3>} {/* Added margin-right */}
        {user?<h3>Profile</h3>:<h3><Link to='/register'>Register</Link></h3>}
      </div>
    </div>
  )
}

export default Navbar
