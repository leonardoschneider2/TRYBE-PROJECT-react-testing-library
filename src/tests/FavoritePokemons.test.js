import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Favorite Pokemons', () => {
  test('Testando quando Favorite Pokemons estiver sem pokemon favoritado: ', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavoPokemon = screen.getByText(/No favorite pokemon found/i);
    expect(noFavoPokemon).toBeInTheDocument();
  });
});
