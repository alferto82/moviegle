import React, { FC } from "react";
import { IMovie } from "../../data/data";
import { Movie } from "./Movie";
import './Movies.scss';

interface Props {
    movies: Array<IMovie>,
    favorite?: boolean,
    watchLater?: boolean
}

export const Movies: FC<Props> = ( {movies, favorite = true, watchLater = true} ) => {
    return (
        <section id="media_results" className="panel results">
            <div className="media_items results">
                <div className="page_wrapper">
                    {movies.length > 0 ?  (movies!.map((movie: any) => <Movie favorite={favorite} watchLater={watchLater} movie={movie} key={movie.id}></Movie>)) : <span className="noMovies">There are no movies that matched your query.</span> }
                </div>
            </div>
        </section>
      );
};
