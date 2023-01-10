import React from "react";
import { watchLaterEventChannel } from "../../../eventChannel/watchLater";
import { addToWatchList } from "../../../utils/fetchUtils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkTrue } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkFalse } from "@fortawesome/free-solid-svg-icons";
import toast from 'react-hot-toast';

import './WatchLaterBtn.scss';

export const WatchLaterBtn: React.FC<any> = ( {movieId, value} ) => {

    const handleWatchLater = () => {
        addToWatchList(movieId, value)
        .then(() => {
            toast.success(value? 'Movie added to watch list':'Movie removed from watch list');
            watchLaterEventChannel.emit('onRemoveWatchLaterClick', {movie_id: movieId})
        }
        );
    }

    return (
        <div className="watchLater">
            <FontAwesomeIcon title={value? "Add to watch later" : "Remove from watch later"} icon={value? faBookmarkTrue:faBookmarkFalse} onClick={handleWatchLater}/>
        </div>
      );
};
