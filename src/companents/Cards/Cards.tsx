import {Card} from "../Card/Card";
import {getData} from "../../services/movieApi";
import {useEffect, useState} from "react";
import {MovieApi, RequestMovieUrl, FormattedMovie} from "../../types/movieApi";
import s from './Cards.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import {Search} from "../Search/Search";

export const Cards = () => {
    const [movies, setMovies] = useState<FormattedMovie[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect((): void => {
        const fetchMovies = async (): Promise<void> => {
            try {
                setLoading(true)
                const data: FormattedMovie[] = await getData(
                    'https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES&keyword=лес&page=1',
                    MovieApi.KEY
                );
                setMovies(data)
            } finally {
                setLoading(false)
            }
        }

        fetchMovies();
    }, []);

    return (
        <div className={!loading ? s.wrapper : s.wrapperLoading}>
            <Search setMovies={setMovies} setLoading={setLoading}/>
            {loading
                ? <CircularProgress disableShrink aria-label="Loading…"/>
                : movies.map((item: FormattedMovie) => {
                    return (<Card key={item.filmId} movie={item}/>)
                })
            }
        </div>
    )
}