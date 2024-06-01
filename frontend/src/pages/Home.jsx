import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { URL } from "../url"


const Home = () => {

  const [posts, setPosts]=useState([])

  const fetchPost=async()=>{
    try {
      const res= await axios.get(URL+"/api/posts/")
      // console.log(res.data)
      setPosts(res.data)


    } catch (err) {
        console.log(err)
    }
    
  }
  useEffect(()=>{
    fetchPost()

  },[])


  return (
    <>
    <Navbar/>
    <div className="px-8 md:px-[200px]">
      {posts.map((posts)=>(
        <HomePost key={posts._id} post={posts}/>
      ))}
    </div>
    <Footer/>
    </>
    
  )
}

export default Home
