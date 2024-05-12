import { useState } from "react"
import { Link } from "react-router-dom"


const Login = () => {
    const[Email, setEmail]= useState('')
    const[Password, setPassword] = useState('')

    // state for errors
    const[EmailError, setEmailError]= useState('')
    const[PasswordError, setPasswordError] =useState('')

    // function to handle the foorm submission
    const handleLogin =(e)=>{
        e.preventDefault()
        
    }
  return (
    <>
    <div className="flex justify-between items-center px-6 md:px-20 py-4"> {/* Adjusted class */}
      <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
      <h3><Link to='/register'>Register</Link></h3>
      </div>

    <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
            <h1 className="text-xl font-bold text-left">Login to your account</h1>
            <label>
                    Email :{Email}
                </label>
            <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter Your Email"/>
            <label>
                    Password :{Password}
                </label>
            <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter Your Password"/>
            <button onClick={handleLogin}className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">Login</button>
            <div className="flex justify-center items-center space-x-3">
                <p>New here?</p>
                <p className="text-grey-500 hover:text-blue-500"><Link to="/register">Register</Link></p>

            </div>
        </div>
       
    </div>
    </>
  )
}

export default Login
