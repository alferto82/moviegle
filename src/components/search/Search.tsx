import React, { FC, useEffect, useState } from "react";
import { fetchSearch } from "../../utils/fetchUtils";
import { Movies } from "../movies/Movies";
import { Pagination } from "../pagination/Pagination";
import "./Search.scss";


export const Search: FC = () => {


  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    if (text){
      setLoading(true);
      setTotalPages(0);
      setData([]);
      fetchSearch(text, page)
      .then(response => response.json())
      .then((elems: any) => {
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
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="inputSearch" ></input>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading... </p>}
      {data && !loading && ( <Movies movies= {data}></Movies>)}
      {totalPages > 1 && <Pagination page={page}  totalPages={totalPages} handlePagination={setPage}></Pagination> }
    </div>
  );
};
