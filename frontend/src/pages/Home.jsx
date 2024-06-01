import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { URL } from "../url"


const Home = () => {

  const [posts, setPosts]=useState([])

  const fetchPosts =async()=>{
    try {
      const res= await axios.get(URL+"/api/posts/")
      // console.log(res.data)
      setPosts(res.data)


    }catch (error) {
      console.error(error);
    }
    
    
  }
  useEffect(()=>{
    fetchPosts()

  },[])


  return (
    <>
    <Navbar/>
    <div className="px-8 md:px-[200px]">
      {posts.map((post)=>(
        <HomePost key={post._id} post={post}/>
      ))}
    </div>
    <Footer/>
    </>
    
  )
}

export default Home
