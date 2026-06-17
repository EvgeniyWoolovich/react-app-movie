import {Card} from "../Card/Card";
import {getData} from "../../services/movieApi";
import {useEffect, useState} from "react";
import {RequestMovieUrl, FormattedMovie, MovieApiConfig} from "../../types/movieApi";
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
                    RequestMovieUrl.COLLECTIONS_URL,
                    MovieApiConfig.KEY
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
                : movies.length
                    ? movies.map((item: FormattedMovie) => {
                        return (<Card key={item.filmId} movie={item}/>)
                    })
                    : <div>Ничего не нашли по вашему запросу</div>
            }
        </div>
    )
}