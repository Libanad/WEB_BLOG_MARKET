import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { URL } from "../url"
import { useLocation } from "react-router-dom"
import Loader from "../components/Loader"


const Home = () => {

  const {search}= useLocation()
  // console.log(search)
  const [posts, setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)

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
        <HomePost key={post._id} post={post}/>
      )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
    </div>
    <Footer/>
    </>
    
  )
}

export default Home
