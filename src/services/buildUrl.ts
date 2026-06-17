import {RequestMovieUrl} from "../types/movieApi";

export const buildSearchUrls = (search : string, type?: string): string => {
    const params: URLSearchParams = new URLSearchParams({
        keyword: search,
        page: '1',
    })

    if (type) {
        params.append('type', type)
    }

    return type
        ? `${RequestMovieUrl.SEARCH_URL_WITH_TYPE}?${params}`
        : `${RequestMovieUrl.SEARCH_URL}?${params}`
}