export interface IMovie {
    id: number,
    title: string, 
    release_date: string, 
    overview: string,
    poster_path: string
}

export type EventData = {
    movie_id: number
}