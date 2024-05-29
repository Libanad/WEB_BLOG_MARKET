import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import { URL } from '../url'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${URL}/api/auth/register`, { username, email, password })
      setUsername("")
      setEmail("")
      setPassword("")
      setError(false)
      toast.success('User created successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log('Registration successful:', res.data)
      setTimeout(() => {
        navigate("/login")
      }, 2000) // Navigate to login after 2 seconds
    } catch (error) {
      setError(true)
      toast.error('Something went wrong!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log('Registration failed:', error)
    }
  }

  return (
    <>
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
        <h3><Link to='/login'>Login</Link></h3>
      </div>
      <div className="w-full flex justify-center items-center h-[70vh]">
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
          <h1 className='text-xl font-bold text-left'>Create an account</h1>
          <input 
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
            className="w-full px-4 py-2 border-2 border-black outline-0" 
            type="text" 
            placeholder="Enter your username" 
          />
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            className="w-full px-4 py-2 border-2 border-black outline-0" 
            type="text" 
            placeholder="Enter your email" 
          />
          <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-4 py-2 border-2 border-black outline-0" 
            type="password" 
            placeholder="Enter your password" 
          />
          <button 
            onClick={handleRegister} 
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black"
          >
            Register
          </button>
          {error && <h3 className='text-danger text-sm'>Something Went Wrong</h3>}
          <div className='flex justify-center items-center space-x-3'>
            <p>Already have an account?</p>
            <p className='text-gray-500 hover:text-blue-500 font-semibold'>
              <Link to='/login'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Register
