import React,{ useEffect } from "react";
import { FAV_URL } from "../../../data/data";
import { favoriteEventChannel } from "../../../eventChannel/favorite";
import useFetch from "../../../hooks/useFetch";
import { Movies } from "../../movies/Movies";
import { Pagination } from "../../pagination/Pagination";
import { Spinner } from "../../Spinner/Spinner";


export const FavoriteList: React.FC = () => {
  const {data, loading, error, totalPages, currentPage, setCurrentPage} = useFetch(FAV_URL);

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
  }, [setCurrentPage])

  return (
    <div className="search_wrapper">
     {loading && <Spinner />}
     {data && !loading && ( <Movies favorite={false} watchLater={true} movies= {data}></Movies>)}
     {error && (<p>${error}</p>)}
     {totalPages > 1 && <Pagination page={currentPage} totalPages={totalPages} handlePagination={setCurrentPage}></Pagination> }
    </div>
  );
};
