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