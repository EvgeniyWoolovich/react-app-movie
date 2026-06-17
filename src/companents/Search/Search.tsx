import s from './Search.module.css'
import React, {useState} from "react";
import {FormattedMovie, MovieApi} from "../../types/movieApi";
import {getData} from "../../services/movieApi";

type Props = {
    setMovies: React.Dispatch<React.SetStateAction<FormattedMovie[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

 export const Search = ({setMovies, setLoading} : Props) => {
    const [search, setSearch] = useState('')
     const fetchMovies = async (): Promise<void> => {
         try {
             setLoading(true)
             const data: FormattedMovie[] = await getData(
                 `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search}&page=1`,
                 MovieApi.KEY
             );
             setMovies(data)
         } finally {
             setLoading(false)
         }
     }

    return (
        <div className={s.searchWrapper}>
            <input
                className={s.search}
                placeholder='Search movies'
                type="search"
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value)
                }}
            />
            <input type="button" value="press"
                onClick={(event) => fetchMovies()}></input>
        </div>
    )
 }