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
           <button onClick={handleToFav}>{value?"Add FAV": "Remove FAV"}</button>
        </div>
      );
};
