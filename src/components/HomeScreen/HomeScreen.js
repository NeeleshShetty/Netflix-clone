import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"
import "./HomeScreen.css"

const HomeScreen = () => {
  return (
    <div className="homeScreen">
         {/* navbar */}
         <Navbar />
        
         {/* Banner */}
         <Banner />

        
    </div>
  )
}

export default HomeScreen