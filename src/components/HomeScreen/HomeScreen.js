import { requests } from "../../services/requests"
import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"
import Row from "../Row/Row"
import "./HomeScreen.css"

const HomeScreen = () => {
  return (
    <div className="homeScreen">
         {/* navbar */}
         <Navbar />
        
         {/* Banner */}
         <Banner />

        {/* Rows */}
        <Row 
        title={'NETFLIX ORIGINALS'}
        fetchUrl = {requests.fetchNetflixOriginals}
        isLarge/>

        <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />

        
    </div>
  )
}

export default HomeScreen