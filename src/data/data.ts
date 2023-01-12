import { api_key, session_id } from "../utils/fetchUtils"

export const FAVORITE_URL =`https://api.themoviedb.org/3/account/acc/favorite/movies?api_key=${api_key}&session_id=${session_id}`
export const WATCH_LATER_URL =`https://api.themoviedb.org/3/account/acc/watchlist/movies?api_key=${api_key}&session_id=${session_id}`
export const POSTER_IMG_BASE= "https://image.tmdb.org/t/p/w200";

export interface IMovie {
    id: number,
    title: string, 
    release_date: string, 
    overview: string,
    poster_path: string
}

export interface IResponse<T> {
    results: Array<T>,
    page: number,
    total_pages: number
}

export type EventData = {
    movie_id: number
}