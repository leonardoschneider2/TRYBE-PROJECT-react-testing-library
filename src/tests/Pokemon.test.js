import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testando o componente <Pokemon />: ', () => {
  // 1. Teste se é renderizado um card com as informações de determinado pokemon
  test('renderizando o componente', () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByRole('link', { name: /More Details/i }));

    const pokemonName = screen.getByTestId(/pokemon-name/i);
    const pokemonType = screen.getByTestId(/pokemon-type/i);
    const pokemonWeight = screen.getByTestId(/pokemon-weight/i);
    const pokemonImage = screen.getByAltText(/Pikachu Sprite/i);

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent(/Pikachu/i);
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType).toHaveTextContent(/Electric/i);
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonWeight).toHaveTextContent(/Average weight: 6.0 kg/i);

    expect(pokemonImage).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

    fireEvent.click(screen.getByRole('checkbox'));

    const starFavorite = screen.getByAltText(/Pikachu is marked as favorite/i);

    expect(starFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(starFavorite).toBeInTheDocument();
  });

  test('', () => {
    
  });

  test('', () => {
    
  });
});
test('', () => {});
