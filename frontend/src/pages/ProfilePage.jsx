import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"


const ProfilePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start">
        <div className="flex flex-col md:w-[70%] w-full">
            <h1 className="text-xl font-bold mb-4">Your Posts:</h1>
            <ProfilePosts/>
            <ProfilePosts/>
            <ProfilePosts/>
            <ProfilePosts/>
        </div>
        <div className="md:sticky md:top-16 flex justify-start item-start md:justify-end md:w-[30%] w-full md:items-end items-start">
            <div className="flex flex-col space-y-4 items-start">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your Username" type="text"/>
            <input  className="outline-none px-4 py-2 text-gray-500" placeholder="Your Email" type="Email"/>
            <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your Username" type="password"/>
            <div className="flex items-center space-x-4 mt-8">
                <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Update</button>
                <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Delete</button>

            </div>

            </div>
            

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProfilePage
