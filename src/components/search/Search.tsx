import React, { useEffect, useState } from "react";
import { IMovie, IResponse } from "../../data/data";
import { fetchSearch } from "../../utils/fetchUtils";
import { Movies } from "../movies/Movies";
import { Pagination } from "../pagination/Pagination";
import { Spinner } from "../Spinner/Spinner";
import "./Search.scss";
import logo from "../../assets/logo.png";

export const Search: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<IMovie>>([]);

  useEffect(() => {
    if (text){
      setLoading(true);
      setTotalPages(0);
      setData([]);
      fetchSearch(text, page)
      .then(response => {
        return response.json()
      })
      .then((elems: IResponse<IMovie>) => {
        setData(elems.results);
        setPage(elems.page);
        setTotalPages(elems.total_pages);
      })
      .finally(() => setLoading(false));
    }
  }, [text, page]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a = event.currentTarget.elements[0] as HTMLInputElement;
    setText(a.value);
    setPage(1);
  }

  return (
    <div className="search_wrapper">
      <img className="logoImg" src={logo} ></img>
      <form id="searchForm" onSubmit={onSubmitHandler}>
        <input placeholder="Write here a movie title" type="text" name="inputSearch" ></input>
        <button type="submit">Search</button>
      </form>
      {loading && <Spinner />}
      {data && !loading && ( <Movies movies= {data}></Movies>)}
      {totalPages > 1 && <Pagination page={page}  totalPages={totalPages} handlePagination={setPage}></Pagination> }
    </div>
  );
};
