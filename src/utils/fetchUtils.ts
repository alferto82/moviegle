import { ADD_FAV_URL, ADD_WATCH_LATER_URL, FAV_URL, SEARCH_URL, WATCH_LATER_URL } from "../data/data";

export const api_key = process.env.REACT_APP_APIKey; //"f62cd036a0c1e812c874e14efa114255"
export const session_id = process.env.REACT_APP_SessionId; //"2ce7f1268843627f84528bdf45e966962cff4342";

export const fetchSearch = async (text: string, page: number): Promise<Response> => {
    return await fetch(`${SEARCH_URL}&page=${page}&query=${text}`);
}

// value = true ---> ADD
// value = false --> REMOVE
export const addToFav = async (movieId: number, value: boolean): Promise<Response> => {
    const body = {
        media_type: "movie",
        media_id: movieId,
        favorite: value
    }
    return await fetch(ADD_FAV_URL, 
    {
        method: 'POST' ,
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

export const getFavList = async (): Promise<Response> => {
    return await fetch(FAV_URL);
}

// value = true ---> ADD
// value = false --> REMOVE
export const addToWatchList = async (movieId: number, value: boolean): Promise<Response> => {
    const body = {
        media_type: "movie",
        media_id: movieId,
        watchlist: value
    }
    return await fetch(ADD_WATCH_LATER_URL, 
    {
        method: 'POST' ,
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}


export const getWatchList = async (): Promise<Response> => {
    return await fetch(WATCH_LATER_URL);
}

