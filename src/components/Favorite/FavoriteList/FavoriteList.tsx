import React,{ FC, useEffect } from "react";
import { favoriteEventChannel } from "../../../eventChannel/favorite";
import useFetch from "../../../hooks/useFetch";
import { api_key, session_id } from "../../../utils/fetchUtils";
import { Movies } from "../../movies/Movies";
import { Pagination } from "../../pagination/Pagination";
import { Spinner } from "../../Spinner/Spinner";

import "./FavoriteList.scss";


export const FavoriteList: FC = () => {
  const {data, loading, error, totalPages, currentPage, setCurrentPage} = useFetch(`https://api.themoviedb.org/3/account/acc/favorite/movies?api_key=${api_key}&session_id=${session_id}`);

  useEffect(() => {
    // subscribe to events when mounting
    const unsubscribeOnRemoveFavoriteClick = favoriteEventChannel.on(
      'onRemoveFavoriteClick',
      (payload) => {
        console.log("removeFavoriteClick called", payload);
        setCurrentPage(0);
      }
    )
    // unsubscribe events when unmounting
    return () => {
      unsubscribeOnRemoveFavoriteClick()
    }
  }, [])

  return (
    <div className="search_wrapper">
     {loading && <Spinner />}
     {data && !loading && ( <Movies favorite={false} watchLater={true} movies= {data}></Movies>)}
     {error && (<p>${error}</p>)}
     {totalPages > 1 && <Pagination page={currentPage} totalPages={totalPages} handlePagination={setCurrentPage}></Pagination> }
    </div>
  );
};
