import { queryByAttribute, render, screen } from '@testing-library/react';
import { FAV_URL, IMovie } from '../../../data/data';
import useFetch from '../../../hooks/useFetch';
import { FavoriteList } from './FavoriteList';


const mockMovie:IMovie = {
  id: 1,
  title: "mocked Movie", 
  release_date: "01/01/01", 
  overview: "mocked overview",
  poster_path: "mocked.jpg"
}

const mockResponse = {
  data: [], 
  loading: true, 
  error: false, 
  currentPage: 1,
  totalPages: 0, 
  setCurrentPage: jest.fn()
};

jest.mock('../../../hooks/useFetch');

const getByClass = queryByAttribute.bind(null, 'class');

test('Renders correctly', () => {
  (useFetch as jest.Mock).mockReturnValue(mockResponse);
  const component =render(<FavoriteList />);
  expect(useFetch).toHaveBeenCalledWith(FAV_URL);
  expect(screen.findByRole("Spinner")).not.toBeNull();
  
  expect(getByClass(component.container, "loaderWrapper")).not.toBeNull(); 
  expect(getByClass(component.container, "noMovies")).toBeNull(); 
  expect(getByClass(component.container, "pagination")).toBeNull(); 
});

test('Renders without loading', () => {
  (useFetch as jest.Mock).mockReturnValue({...mockResponse, loading: false});
  const component =render(<FavoriteList />);
  expect(useFetch).toHaveBeenCalledWith(FAV_URL);
  expect(screen.findByRole("Spinner")).not.toBeNull();

  expect(getByClass(component.container, "loaderWrapper")).toBeNull(); 
  expect(getByClass(component.container, "noMovies")).not.toBeNull(); 
  expect(getByClass(component.container, "pagination")).toBeNull(); 
});

test('Renders with results', () => {
  (useFetch as jest.Mock).mockReturnValue({...mockResponse, loading: false, data:[mockMovie], totalPages: 10});
  const component =render(<FavoriteList />);
  expect(useFetch).toHaveBeenCalledWith(FAV_URL);
  expect(screen.findByRole("Spinner")).not.toBeNull();

  expect(getByClass(component.container, "loaderWrapper")).toBeNull(); 
  expect(getByClass(component.container, "noMovies")).toBeNull(); 
  expect(getByClass(component.container, "pagination")).not.toBeNull(); 
});
