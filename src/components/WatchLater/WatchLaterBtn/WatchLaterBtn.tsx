import React from "react";
import { watchLaterEventChannel } from "../../../eventChannel/watchLater";
import { addToWatchList } from "../../../utils/fetchUtils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkTrue } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkFalse } from "@fortawesome/free-solid-svg-icons";

import './WatchLaterBtn.scss';

export const WatchLaterBtn: React.FC<any> = ( {movieId, value} ) => {

    const handleWatchLater = () => {
        addToWatchList(movieId, value)
        .then(() => watchLaterEventChannel.emit('onRemoveWatchLaterClick', {movie_id: movieId}));
    }

    return (
        <div className="watchLater">
            <FontAwesomeIcon icon={value? faBookmarkTrue:faBookmarkFalse} onClick={handleWatchLater}/>
        </div>
      );
};
