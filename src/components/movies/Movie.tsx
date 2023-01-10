import React, { FC } from "react";
import './Movie.scss';
import defaultMovie from "../../assets/defaultMovie.png";
import { IMovie } from "../../data/data";
import { FavoriteBtn } from "../Favorite/FavoriteBtn/FavoriteBtn";
import { WatchLaterBtn } from "../WatchLater/WatchLaterBtn/WatchLaterBtn";

interface Props {
    movie: IMovie,
    favorite: boolean, 
    watchLater: boolean
}

export const Movie: FC<Props> = ( {movie, favorite = true, watchLater = true} ) => {

    const IMG_BASE= "https://image.tmdb.org/t/p/w200/"

    const addDefaultSrc = (ev:any) => {
        ev.target.onError = null;
        ev.target.src = defaultMovie;
    }

    const getReleaseYear = (date:string) => {
        return new Date(date).getFullYear() || "";
    }

    return (
        <div className="card">
            <div className="image">
                <div className="wrapper">
                    <img onError={addDefaultSrc} loading="lazy" className="poster" src={`${IMG_BASE}/${movie.poster_path}`} alt="" />
                </div>
            </div>
            <div className="content">
            <FavoriteBtn movieId={movie.id} value={favorite}></FavoriteBtn>
            <WatchLaterBtn movieId={movie.id} value={watchLater}></WatchLaterBtn>
                <h2>{movie.title}</h2>
                <p>{getReleaseYear(movie.release_date)}</p>
            </div>
            <div className="moreInfo">
                <p>{movie.overview}</p>
            </div>
        </div>
      );
};
