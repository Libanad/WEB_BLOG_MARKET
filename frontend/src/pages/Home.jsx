import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { useEffect } from "react"


const Home = () => {

  const fetchPost=async()=>{
    try {
      const res= await axios.get(URL+"/api/posts/")
      console.log(res.data)
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
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
    </div>
    <Footer/>
    </>
    
  )
}

export default Home
