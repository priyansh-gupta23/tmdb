import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "react-circular-progressbar/dist/styles.css"
import { CircularProgressbar } from "react-circular-progressbar"
import "../about.css"
import { useParams } from 'react-router-dom';
import Nav from './Nav';


const About = () => {
    const { id } = useParams();
    const [movie, setmovie] = useState();

    const getMovies = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`)
            setmovie(data)
            console.log(data);
        }
        catch (err) { console.log(err) }
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <>
            <Nav />
            <div className='Background w-100 overflow-x-hidden' style={{width:"100vh",overflowX:"hidden"}}>
                <div className="card text-bg-dark">
                    <img id='back' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"} `}
                        className="card-img " alt="..." />
                     <div className="card-img-overlay">
                        <h1 id='name' className="card-title">{movie?.original_title}</h1>
                        <h5 id='Tname' className="card-text">Tagline: {movie?.tagline}</h5>
                        <img id='poster' src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"} `}
                            className="poster" alt= "..." />
                              <div id='Stat' className="card-text"><h4>Status </h4>{movie?.status}</div>
                        <div id='Rdate' className="card-text"><span><h4>Release Date  </h4></span> {movie?.release_date}</div>
                        <div id='Circle' className='Circular p-1 mt-4' ><CircularProgressbar value={Math.floor(movie?.vote_average * 10)} text={Math.floor(movie?.vote_average * 10) + "%"} /> 
                        </div>
                        <div id='Gen' className="card-text"><span><h4>Genres:</h4> {movie?.genres.map((gen, i) =>(<p key={i}>{gen.name},&nbsp;</p>))}</span></div>
                        <button id='singletrailer'className="singletrailer  btn btn-primary" type="button" ><a  href={`${movie?.homepage}`}>
                            Watch Trailer &nbsp; ▶
                        </a>   </button> 
                        <div id='Over' className="card-text"><span><h1>Overview</h1></span>{movie?.overview}</div>

                    </div>
                </div>

            </div>

            <div className='Container  p-5'>
            </div>

        </>
    )
}
 
export default About