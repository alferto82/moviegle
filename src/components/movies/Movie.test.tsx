import { queryAllByAttribute, queryByAttribute, render, screen } from '@testing-library/react';
import { IMovie, POSTER_IMG_BASE } from '../../data/data';
import { Movie } from './Movie';


const mockMovie:IMovie = {
  id: 1,
  title: "mocked Movie", 
  release_date: "01/01/01", 
  overview: "mocked overview",
  poster_path: "mocked.jpg"
}

test('Renders correctly', () => {
  render(<Movie movie={mockMovie} favorite={true} watchLater={true}/>);
  
  const title = screen.getByText(mockMovie.title) as HTMLHeadingElement;
  expect(title.textContent).toBe(`${mockMovie.title} 2001`); 
  const allImages = screen.getAllByRole("img");
  const poster = allImages.at(0) as HTMLImageElement;
  expect(poster.src).toBe(`${POSTER_IMG_BASE}/${mockMovie.poster_path}`); 
  const fav = allImages.at(1) as HTMLImageElement;
  const favText = (fav.getElementsByTagName("title")[0] as HTMLTitleElement)
  expect(favText.textContent).toBe("Add to favorites"); 
  const watchLater = allImages.at(2) as HTMLImageElement;
  const watchLaterText = (watchLater.getElementsByTagName("title")[0] as HTMLTitleElement)
  expect(watchLaterText.textContent).toBe("Add to watch later");
  
  const overview = screen.getAllByText(mockMovie.overview)[0] as HTMLHeadingElement;
  expect(overview.textContent).toBe(`${mockMovie.overview}`); 
  const overview2 = screen.getAllByText(mockMovie.overview)[1] as HTMLHeadingElement;
  expect(overview2.textContent).toBe(`${mockMovie.overview}`); 
});

test('Renders correctly without year', () => {
  render(<Movie movie={{...mockMovie, release_date: ""}} favorite={true} watchLater={true}/>);
  
  const title = screen.getByText(mockMovie.title) as HTMLHeadingElement;
  expect(title.textContent).toBe(`${mockMovie.title} `); 
});

test('Renders correctly with remove icons', () => {
  render(<Movie movie={mockMovie} favorite={false} watchLater={false}/>);
  
  const allImages = screen.getAllByRole("img");
  const fav = allImages.at(1) as HTMLImageElement;
  const favText = (fav.getElementsByTagName("title")[0] as HTMLTitleElement)
  expect(favText.textContent).toBe("Remove from favorites"); 
  const watchLater = allImages.at(2) as HTMLImageElement;
  const watchLaterText = (watchLater.getElementsByTagName("title")[0] as HTMLTitleElement)
  expect(watchLaterText.textContent).toBe("Remove from watch later");  
});
