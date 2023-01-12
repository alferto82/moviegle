import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import toast from 'react-hot-toast';
import { favoriteEventChannel } from '../../../eventChannel/favorite';
import { FavoriteBtn, Props } from './FavoriteBtn';

const mocks = {
    $eventBus: {
      $on: jest.fn(),
      $off: jest.fn(),
      $emit: jest.fn(),
    },
  };
test('Renders correctly', () => {

    const somethingSpy =jest.spyOn(favoriteEventChannel, "emit").mockImplementation();
    
    const mockProps: Props = {
        movieId: 1234,
        value: true
    };
    render(<FavoriteBtn {...mockProps} />);

    userEvent.click(screen.getByRole("button"));
    setTimeout(() => {
        expect(somethingSpy).toHaveBeenCalled();
    }, 1000)
   
 //  expect(screen.getByText('Movie added asdasdto favorites')).toBeInTheDocument();
});