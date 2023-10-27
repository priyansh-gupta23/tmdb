import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Nav';

const Home = ({ datas }) => {
    return (
        <>
            <Nav />

            

            <div className=" container mt-3 mb-3 d-flex flex-wrap justify-content-evenly gap-4" >

                {datas.map((e, i) => (
                    <div key={i} className="card" style={{ width: "15rem", height: "35rem" }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path || e.backdrop_path || e.profile_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"} `}
                            className="card-img-top" alt="..." />
                        <div className="card-body  d-flex justify-content-between align-items-center flex-column">
                            <h5 className="card-title" style={{ fontWeight: "600" }}>{i + 1}.{e.title ?? e.orignal_name}</h5>
                            <p className="card-text">{e.overview.slice(0, 35)}...</p>
                            <Link to={`/About/${e.id}`} className="btn btn-primary w-50">About</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home