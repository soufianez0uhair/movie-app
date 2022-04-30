import Logo from '../img/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'

import {useState, useContext} from 'react'

import { MoviesContext } from '../Helper/MoviesContext'

export default function Header() {
    let {setMovies} = useContext(MoviesContext)
    const [searchTerm, setSearchTerm] = useState('')
    function handleChange(e) {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }
    function getMovies(e) {
        e.preventDefault();
        if(searchTerm == '') {
            return ;
        }
        fetch(` https://api.themoviedb.org/3/search/movie?api_key=7554e7200e9e434cd4be7cfb9cee0bc1&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
           .then(res => res.json())
           .then(data => setMovies(data.results))
    }
    return (
        <header>
            <img src={Logo} className="logo" />
            <form onSubmit={(e) => getMovies(e)} className="search">
               <input type="text" onChange={(e) => handleChange(e)} className="search__input" value={searchTerm} />
               <AiOutlineSearch className="icon--search" />
            </form>
        </header>
    )
}