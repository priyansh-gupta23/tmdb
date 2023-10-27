import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About"
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';

const App = () => {
  const [datas, setdatas] = useState([]);
  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1")
      setdatas(data.results)
    }
    catch (err) { console.log(err) }
  }
  useEffect(() => {
    getPopularMovies()
  }, [])

  //  let MovieList =  datas.map((m , i) => (
  //   <ul key={i}>
  //        {m.original_title}
  //        {m.overview}
  //  </ul>
  // ))
  // if(datas.length>0){
  //   MovieList 
  //   }
  return (
      <Routes>
        <Route path="/" element={<Home datas={datas} />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>

  )
}

export default App