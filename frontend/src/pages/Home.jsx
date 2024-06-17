import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import HomePost from "../components/HomePosts"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import { UserContext } from "../context/usercontext"
import { URL } from "../url"


const Home = () => {

  const {search}= useLocation()
  // console.log(search)
  const [posts, setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  console.log(user)

  const fetchPosts =async()=>{
    setLoader(true)
    try {
      const res= await axios.get(URL+"/api/posts/"+search)
      // console.log(res.data)
      setPosts(res.data)
      if (res.data.length===0) {
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)


    }catch (error) {
      console.error(error)
      setLoader(true)
    }
    
    
  }
  useEffect(()=>{
    fetchPosts()

  },[search])


  return (
    <>
    <Navbar/>
    <div className="px-8 md:px-[200px] min-h-[80vh]">
      {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?posts.map((post)=>(
        <>
        <Link to={user?`/posts/post/${post._id}`:"/login"}>
        <HomePost key={post._id} post={post}/>
        </Link>
        </>
        
      )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
    </div>
    <Footer/>
    </>
    
  )
}

export default Home
