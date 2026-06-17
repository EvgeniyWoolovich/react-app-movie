import {CollectionMoviesResponse, SearchMoviesResponse} from "./movieApi";

export const isCollectionMoviesResponse = (data: CollectionMoviesResponse | SearchMoviesResponse): data is CollectionMoviesResponse => {
    return data.hasOwnProperty("items");
};

export const isSearchMoviesResponse = (data: CollectionMoviesResponse | SearchMoviesResponse): data is SearchMoviesResponse => {
    return data.hasOwnProperty("films");
};