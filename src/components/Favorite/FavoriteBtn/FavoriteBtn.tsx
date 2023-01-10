import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartTrue } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFalse } from "@fortawesome/free-solid-svg-icons";

import React, {FC} from 'react';
import { favoriteEventChannel } from "../../../eventChannel/favorite";
import { addToFav } from "../../../utils/fetchUtils";
import './FavoriteBtn.scss';

interface Props {
    movieId: number;
    value: boolean;
}

export const FavoriteBtn: FC<Props> = ( {movieId, value} ) => {

    const handleToFav = () => {
        addToFav(movieId, value)
        .then(() => favoriteEventChannel.emit('onRemoveFavoriteClick', {movie_id: movieId}));
    }

    return (
        <div className="fav">
            <FontAwesomeIcon icon={value? faHeartTrue:faHeartFalse} onClick={handleToFav}/>
        </div>
      );
};
