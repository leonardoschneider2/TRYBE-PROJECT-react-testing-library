import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Favorite Pokemons', () => {
  test('Testando quando Favorite Pokemons estiver sem pokemon favoritado: ', () => {
    renderWithRouter(<NotFound />);

    const pageRequest = screen.getByText(/Page Requested Not Found/i);
    expect(pageRequest).toBeInTheDocument();

    const image = screen.getByAltText(/Pikachu Crying/i);
    console.log(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
