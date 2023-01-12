import React, { useEffect } from "react";
import { WATCH_LATER_URL } from "../../../data/data";
import { watchLaterEventChannel } from "../../../eventChannel/watchLater";
import useFetch from "../../../hooks/useFetch";
import { api_key, session_id } from "../../../utils/fetchUtils";
import { Movies } from "../../movies/Movies";
import { Pagination } from "../../pagination/Pagination";
import { Spinner } from "../../Spinner/Spinner";

import "./WatchLaterList.scss";


export const WatchLaterList: React.FC = () => {
  const {data, loading, error, totalPages, currentPage, setCurrentPage} = useFetch(WATCH_LATER_URL);

  useEffect(() => {
    // subscribe to events when mounting
    const unsubscribeOnRemoveWatchLaterClick = watchLaterEventChannel.on(
      'onRemoveWatchLaterClick',
      (payload) => {
        console.log("removeFavoriteClick called", payload);
        setCurrentPage(0);
      }
    )
    // unsubscribe events when unmounting
    return () => {
      unsubscribeOnRemoveWatchLaterClick()
    }
  }, [])
  
  return (
    <div className="search_wrapper">
     {loading && <Spinner />}
     {data && !loading && ( <Movies favorite={true} watchLater={false} movies={data}></Movies>)}
     {error && (<p>${error}</p>)}
     {totalPages > 1 && <Pagination page={currentPage} totalPages={totalPages} handlePagination={setCurrentPage}></Pagination> }
    </div>
  );
};
