import Footer from "../components/Footer"
import HomePost from "../components/HomePosts"
import Navbar from "../components/Navbar"


const Home = () => {
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
