import React from "react";
import { watchLaterEventChannel } from "../../../eventChannel/watchLater";
import { addToWatchList } from "../../../utils/fetchUtils";
import './WatchLaterBtn.scss';

export const WatchLaterBtn: React.FC<any> = ( {movieId, value} ) => {

    const handleWatchLater = () => {
        addToWatchList(movieId, value)
        .then(() => watchLaterEventChannel.emit('onRemoveWatchLaterClick', {movie_id: movieId}));
    }

    return (
        <div className="watchLater">
           <button onClick={handleWatchLater}>{value?"Add WL": "Remove WL"}</button>
        </div>
      );
};
