import {
    CollectionMovie,
    CollectionMoviesResponse,
    FormattedMovie,
    SearchMovie,
    SearchMoviesResponse
} from "../types/movieApi";
import {isCollectionMoviesResponse} from "../types/typeGuardMovieApi";

const formattedData = (data: CollectionMoviesResponse | SearchMoviesResponse): FormattedMovie[] => {
    if (isCollectionMoviesResponse(data)) {
        return data.items.map((item: CollectionMovie): FormattedMovie => ({
                nameEn: item.nameEn || item.nameOriginal,
                nameRu: item.nameRu,
                posterUrl: item.posterUrl,
                posterUrlPreview: item.posterUrlPreview,
                countries: item.countries,
                genres: item.genres,
                type: item.type,
                year: item.year,
                description: item.description,
                rating: `${item.ratingKinopoisk || item.ratingImdb}`,
                filmId: item.kinopoiskId
            })
        )
    }

    return data.films.map((film: SearchMovie): FormattedMovie => ({
            nameEn: film.nameEn,
            nameRu: film.nameRu,
            posterUrl: film.posterUrl,
            posterUrlPreview: film.posterUrlPreview,
            countries: film.countries,
            genres: film.genres,
            type: film.type,
            year: film.year,
            description: film.description,
            rating: film.rating,
            filmId: film.filmId
        })
    )
}

const checkImage = (url: string): Promise<boolean> =>
    new Promise((resolve): void => {
            const img: HTMLImageElement = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        }
    );

const removeNotFoundPoster = async (data: FormattedMovie[]): Promise<FormattedMovie[]> => {
    const checkPreviewMovies: (FormattedMovie | null)[] = await Promise.all(
        data.map(async (item: FormattedMovie): Promise<FormattedMovie | null> => {
            const isValid: boolean = await checkImage(item.posterUrl)
            return isValid ? item : null;
        })
    )

    return [...checkPreviewMovies.filter((item: FormattedMovie | null): item is FormattedMovie => item !== null)]
}

export const getData = async (url: string, apiKey?: string): Promise<FormattedMovie[]> => {
    if (!apiKey) {
        return []
    }

    const response: Response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-API-KEY': `${apiKey}`,
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()
    return await removeNotFoundPoster(formattedData(data));
}