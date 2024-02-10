import "./Row.css"
import {useEffect, useState} from "react"
import axios from "../../services/axios"
const Row = ({title,fetchUrl,isLarge = false}) => {
    const [movies , setMovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[])
    console.log(movies);
  return (
    <div className="row">
        <h2 className="row__title">{title}</h2>
        <div className="row__posters">
        {movies.map((movie)=>(
            ((isLarge && movie.poster_path || !isLarge && movie.backdrop_path) && (<img className={`row__poster ${isLarge && "row__posterLarge"}`}
            key={movie.id} 
            src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
            alt="movie_poster" />) )
            
        ))}   
        </div>
         
    </div>
  )
}

export default Row