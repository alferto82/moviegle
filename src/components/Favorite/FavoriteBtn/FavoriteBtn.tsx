import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartTrue } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFalse } from "@fortawesome/free-solid-svg-icons";

import React from 'react';
import { favoriteEventChannel } from "../../../eventChannel/favorite";
import { addToFav } from "../../../utils/fetchUtils";
import './FavoriteBtn.scss';
import toast from 'react-hot-toast';

export interface Props {
    movieId: number;
    value: boolean;
}

export const FavoriteBtn: React.FC<Props> = ( {movieId, value} ) => {
    const handleToFav = () => {
        addToFav(movieId, value)
        .then(() => {
            toast.success(value? 'Movie added to favorites':'Movie removed from favorites');
            favoriteEventChannel.emit('onRemoveFavoriteClick', {movie_id: movieId})
        });
    }

    return (
        <div className="fav">
            <button onClick={handleToFav}>{value? "Add to favorites" : "Remove from favorites"}</button>
            <FontAwesomeIcon title={value? "Add to favorites" : "Remove from favorites"} icon={value? faHeartTrue:faHeartFalse} onClick={handleToFav}/>
        </div>
      );
};
