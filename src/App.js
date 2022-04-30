import Header from './components/Header'
import Movie from './components/Movie'
import Footer from './components/Footer'

import {useState, useEffect} from 'react'

import {MoviesContext} from './Helper/MoviesContext'

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7554e7200e9e434cd4be7cfb9cee0bc1')
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])
  const movieEl = movies.map(movie => (
    <Movie img={movie.poster_path}
           title={movie.title || movie.name}
           vote_average={movie.vote_average}
           overview={movie.overview}
           key={movie.id}
    />
  ))
  return (
    <div className="App">
      <MoviesContext.Provider value={{setMovies}}>
        <Header />
      </MoviesContext.Provider>
      <div className="movies">
        {movieEl}
      </div>
      <Footer />
    </div>
  );
}

export default App;
