import { queryAllByAttribute, queryByAttribute, render, screen } from '@testing-library/react';
import { IMovie } from '../../data/data';
import { Movies } from './Movies';


const mockMovie:IMovie = {
  id: 1,
  title: "mocked Movie", 
  release_date: "01/01/01", 
  overview: "mocked overview",
  poster_path: "mocked.jpg"
}

const getByClass = queryAllByAttribute.bind(null, 'class');

test('Renders empty correctly', () => {
  const component =render(<Movies movies={[]} />);
  
  expect(getByClass(component.container, "noMovies").length).toBe(1); 
  expect(getByClass(component.container, "card").length).toBe(0); 
});

test('Renders with data correctly', () => {
  const component =render(<Movies movies={[mockMovie]} />);
  
  expect(getByClass(component.container, "noMovies").length).toBe(0); 
  expect(getByClass(component.container, "card").length).toBe(1); 
});

test('Renders with data correctly', () => {
  let movies = [];
  for(let i = 0; i < 25; i++){

    movies.push({...mockMovie, id: i});
  }
  const component =render(<Movies movies={movies} />);
  
  expect(getByClass(component.container, "noMovies").length).toBe(0); 
  expect(getByClass(component.container, "card").length).toBe(25); 
});
