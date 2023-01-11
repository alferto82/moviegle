
export const api_key = "f62cd036a0c1e812c874e14efa114255"
export const session_id = "2ce7f1268843627f84528bdf45e966962cff4342";

export const fetchSearch = async (text: string, page: number): Promise<Response> => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=${page}&query=${text}`);
}

// value = true ---> ADD
// value = false --> REMOVE
export const addToFav = async (movieId: number, value: boolean): Promise<Response> => {
    const body = {
        media_type: "movie",
        media_id: movieId,
        favorite: value
    }
    return await fetch(`https://api.themoviedb.org/3/account/acc/favorite?api_key=${api_key}&session_id=${session_id}`, 
    {
        method: 'POST' ,
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

export const getFavList = async (): Promise<Response> => {
    return await fetch(`https://api.themoviedb.org/3/account/acc/favorite?api_key=${api_key}&session_id=${session_id}`);
}

// value = true ---> ADD
// value = false --> REMOVE
export const addToWatchList = async (movieId: number, value: boolean): Promise<Response> => {
    const body = {
        media_type: "movie",
        media_id: movieId,
        watchlist: value
    }
    return await fetch(`https://api.themoviedb.org/3/account/acc/watchlist?api_key=${api_key}&session_id=${session_id}`, 
    {
        method: 'POST' ,
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}


export const getWatchList = async (): Promise<Response> => {
    return await fetch(`https://api.themoviedb.org/3/account/acc/watchlist?api_key=${api_key}&session_id=${session_id}`);
}

