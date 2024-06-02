import { useEffect } from "react"
import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useParams } from "react-router-dom"
import axios from "axios"
import { URL } from "../url"


const PostDetails = () => {

    const postId=useParams().id
    
  
  const fetchPost=async()=>{
    try{
      const res=await axios.get(URL+"/api/posts/"+postId)
      comsole.log(res.data)
    }
    catch(err){
      console.log(err)

    }
  }

  useEffect(()=>{
    fetchPost()

  },[postId])
  return (
    <div>
      <Navbar />
      <div className="px-8 px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">10 uses of Artificial Intelligence in Day to Day Life</h1>
          <div className="flex items-center justify-end space-x-2"> 
            <p className="mr-2"><BiEdit /></p> 
            <p><MdDelete /></p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@libanadr</p>
          <div className="flex space-x-2">
            <p>16/06/2024</p>
            <p>16:45</p>
          </div>
        </div>
        <img src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1715509344~exp=1715512944~hmac=0eea5b7738b6e3077e46e84358740873135dff6aed51c59a671084fdeebee400&w=1060" className="w-3/4 mx-auto" alt="" />
        <p className="mx-auto mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold"> 
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2"> 
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
          <Comment/>
          <Comment/>
          
          
        </div>
    {/* Write a comment */}
    <div className="w-full flex flex-col mt:4 md:flex-row">
        <input type="text" placeholder="Write a comment" className="md:w-[90%] outline-none px:4 mt:4 md:mt-0"/>
        <button className="bg-black text-sm text-white px-4 py-2 md:w-[10%] mt-4 md:mt-0">Add Comment</button>
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostDetails
