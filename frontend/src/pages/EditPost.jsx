import { useState } from "react";
import { ImCross } from 'react-icons/im';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const EditPost = () => {
    const [title, setTitle]=useState("")
    const [desc, setDesc]= useState("")
    const [file, setFile]= useState(null)

    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);

    const fetchPost=async()=>{

    }

    const deleteCategory = (index) => {
        const updatedCats = [...cats];
        updatedCats.splice(index, 1);
        setCats(updatedCats);
    }

    const addCategory = () => {
        const updatedCats = [...cats];
        updatedCats.push(cat);
        setCats(updatedCats);
        setCat(""); // Reset input field after adding category
    }
  return (
    <div>
            <Navbar />
            <div className='px-6 md:px-[200px] mt-8'>
                <h1 className='font-bold md:text-2xl text-xl mt-8'>Update a post</h1>
                <form className='w-full flex-col space-y-4 md:space-y-8'>
                    <input type='text' placeholder='Enter post title' className='px-4 py-2 outline-none' />
                    <div>
                        <input type='file' className='px-6 py-2' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            <input
                                value={cat}
                                onChange={(e) => setCat(e.target.value)}
                                className='px-4 py-2 outline-none'
                                placeholder="Write categories"
                                type='text'
                            />
                            <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
                        </div>
                        {/* Categories */}
                        <div className='flex mt-3'>
                            {cats.map((c, i) => (
                                <div key={i} className='flex flex-wrap'>
                                    <div className='flex justify-center items-center space-x-2 bg-gray-200 px-2 py-1 rounded-md mr-2 mb-2'>
                                        <p>{c}</p>
                                        <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <textarea rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description' />
                    <button className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Update</button>
                </form>
            </div>
            <Footer />
        </div>
  )
}

export default EditPost
