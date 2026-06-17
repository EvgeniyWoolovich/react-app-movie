export enum RequestMovieUrl {
    COLLECTIONS_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections',
    SEARCH_URL_WITH_TYPE = 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    SEARCH_URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword'
}

export const MovieApiConfig = {
    KEY: process.env.REACT_APP_API_KEY
}

export enum MovieType {
    FILM = 'FILM',
    TV_SERIES = 'TV_SERIES',
    TV_SHOW = 'TV_SHOW',
    MINI_SERIES = 'MINI_SERIES',
    ALL = 'ALL'
}

type MovieTitles = {
    nameEn: string | null;
    nameRu: string | null;
};

type MoviePosters = {
    posterUrl: string;
    posterUrlPreview: string;
};

type MovieMetadata = {
    countries: {
        country: string;
    }[];
    genres: {
        genre: string;
    }[];
    type: string;
    year: number;
    description: string;
};

type BaseMovie = MovieTitles & MoviePosters & MovieMetadata

export type CollectionMovie = BaseMovie & {
    nameOriginal: string | null;
    imdbId: string | null;
    kinopoiskId: number;
    ratingImdb: number | null;
    ratingKinopoisk: number | null;
};

export type SearchMovie = BaseMovie & {
    filmId: number;
    filmLength: string;
    rating: string;
    ratingVoteCount: number;
};

export type CollectionMoviesResponse = {
    items: CollectionMovie[];
    total: number;
    totalPages: number;
};

export type SearchMoviesResponse = {
    films: SearchMovie[];
    keyword: string;
    pagesCount: number;
    searchFilmsCountResult: number;
};

export type FormattedMovie = BaseMovie & {
    rating: string,
    filmId: number,
}