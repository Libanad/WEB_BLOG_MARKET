import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import axios from "axios"
import { URL } from "../url"
import { toast } from 'react-toastify'
import { UserContext } from "../context/usercontext"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('') // General error state
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${URL}/api/auth/login`, { email, password },{withCredentials:true})
            console.log(res.data)
            toast.success("Logged in successfully")
            setUser(res.data)
            navigate("/")
        } catch (err) {
            setError(true)
            toast.error("Something went wrong")
            console.log(err)
        }
    }

    return (
        <>
            <div className="flex justify-between items-center px-6 md:px-20 py-4">
                <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
                <h3><Link to='/register'>Register</Link></h3>
            </div>

            <div className="w-full flex justify-center items-center h-[70vh]">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-left">Login to your account</h1>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-full px-4 py-2 border-2 border-black outline-0"
                        type="text"
                        placeholder="Enter Your Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="w-full px-4 py-2 border-2 border-black outline-0"
                        type="password"
                        placeholder="Enter Your Password"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black"
                    >
                        Login
                    </button>
                    {error && <h3 className='text-danger text-sm'>Something Went Wrong</h3>}
                    <div className="flex justify-center items-center space-x-3">
                        <p>New here?</p>
                        <p className="text-grey-500 hover:text-blue-500"><Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
