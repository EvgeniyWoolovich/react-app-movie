import s from './Search.module.css'
import React, {useState} from "react";
import {FormattedMovie, MovieApiConfig, MovieType} from "../../types/movieApi";
import {getData} from "../../services/movieApi";
import {buildSearchUrls} from "../../services/buildUrl";

type Props = {
    setMovies: React.Dispatch<React.SetStateAction<FormattedMovie[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Search = ({setMovies, setLoading}: Props) => {
    const [search, setSearch] = useState('')
    const [typeSearch, setTypeSearch] = useState('')
    const fetchMovies = async (): Promise<void> => {
        try {
            setLoading(true)
            const data: FormattedMovie[] = await getData(
                buildSearchUrls(search, typeSearch),
                MovieApiConfig.KEY
            );
            setMovies(data)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={s.search}>
            <div className={s.searchWrapper}>
                <input
                    className={s.search__input}
                    placeholder='Search movies'
                    type="text"
                    value={search}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setSearch(event.target.value)
                    }}
                    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>): void => {
                        if (event.key === 'Enter') {
                            fetchMovies()
                        }
                    }}
                />
                <input className={s.search__button} type="button" value="Искать"
                       onClick={(event: React.MouseEvent<HTMLInputElement>) => fetchMovies()}></input>
            </div>
            <div className={s.search__typeWrapper}>
                <label htmlFor={MovieType.ALL}>
                    <input
                        className={s.search__radio}
                        type="radio"
                        name='radio'
                        id={MovieType.ALL}
                        value={MovieType.ALL}
                        onClick={(event) => setTypeSearch(MovieType.ALL)}
                    />
                    По всему
                </label>
                <label htmlFor={MovieType.FILM}>
                    <input
                        className={s.search__radio}
                        type="radio"
                        name='radio'
                        id={MovieType.FILM}
                        value={MovieType.FILM}
                        onClick={(event) => setTypeSearch(MovieType.FILM)}
                    />
                    По фильмам
                </label>
                <label htmlFor={MovieType.TV_SHOW}>
                    <input
                        className={s.search__radio}
                        type="radio"
                        name='radio'
                        id={MovieType.TV_SHOW}
                        value={MovieType.TV_SHOW}
                        onClick={(event) => setTypeSearch(MovieType.TV_SHOW)}
                    />
                    По ТВ шоу
                </label>
                <label htmlFor={MovieType.TV_SERIES}>
                    <input
                        className={s.search__radio}
                        type="radio"
                        name='radio'
                        id={MovieType.TV_SERIES}
                        value={MovieType.TV_SERIES}
                        onClick={(event) => setTypeSearch(MovieType.TV_SERIES)}
                    />
                    По сериалам
                </label>
                <label htmlFor={MovieType.MINI_SERIES}>
                    <input
                        className={s.search__radio}
                        type="radio"
                        name='radio'
                        id={MovieType.MINI_SERIES}
                        value={MovieType.MINI_SERIES}
                        onClick={(event) => setTypeSearch(MovieType.MINI_SERIES)}
                    />
                    По мини сериалам
                </label>
            </div>
        </div>
    )
}