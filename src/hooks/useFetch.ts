import { useState, useEffect } from "react";
const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`${url}&page=${currentPage < 1? 1: currentPage}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setCurrentPage(res.page);
        setTotalPages(res.total_pages);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);
  
  return { data, loading, error, currentPage, totalPages, setCurrentPage };
};
export default useFetch;