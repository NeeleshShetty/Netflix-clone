import "./Banner.css"
import {useState,useEffect} from "react"
import {requests} from "../../services/requests"
import axios from "../../services/axios"
const Banner = () => {
  const [movie , setMovie] = useState([])

  useEffect(() => {
   async function fetchData(){
    const request  = await axios.get(requests.fetchNetflixOriginals)

    setMovie(request.data.results[
      Math.floor(Math.random() * request.data.results.length -1)
    ])

    return request
   }
   fetchData()
  }, [])

  // console.log(movie);
  
  const truncate = (string , n)=>{
      return string?.length > n ? string.substr(0, n-1)+'....' : string;
  }
  return (
    <div className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition:"center center",
        }}>
        <div className="banner__contents">
            <div className="banner__title">{movie?.title || movie?.name || movie ?.original_name }</div>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{truncate (`${movie?.overview}`,150)}</h1>
            <div className="banner__fadeBottom" />

        </div>
    </div>
  )
}

export default Banner