export enum RequestMovieUrl {
    COLLECTIONS_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections',
    SEARCH_URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
}

export enum MovieApi {
    KEY= '730b585c-5448-4d4f-b309-e0daeeff2b3f' //Вынести в .env
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