import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const testPokemons = (pokemonList) => {
  const click = () => {
    fireEvent.click(screen.getByTestId('next-pokemon'));
  };
  pokemonList.forEach((pokemon) => {
    click();
    const nextPokemon = screen.getByText(pokemon);
    expect(nextPokemon).toBeInTheDocument();
  });
};

describe('Testando o componente Favorite Pokemons', () => {
  test('Testando quando Favorite Pokemons estiver sem pokemon favoritado: ', () => {
    renderWithRouter(<App />);

    const title = screen.getByText(/Encountered Pokémons/i);
    expect(title).toBeInTheDocument();
    // clicar em 'Next Pokemons' e testar se o próximo é renderizado corretamente
    const pokemonList = [
      /Charmander/i,
      /Caterpie/i,
      /Ekans/i,
      /Alakazam/i,
      /Mew/i,
      /Rapidash/i,
      /Snorlax/i,
      /Dragonair/i,
      /Pikachu/i,
    ];
    testPokemons(pokemonList);

    fireEvent.click(screen.getByRole('button', { name: /all/i }));
    testPokemons(pokemonList);
  });

  test('Testando os botões de filtros: ', () => {
    renderWithRouter(<App />);

    // testando se todos os botões de seleção estão aparecendo na tela.

    const typesList = [
      /All/i,
      /Electric/i,
      /Fire/i,
      /Bug/i,
      /Poison/i,
      /Psychic/i,
      /Normal/i,
      /Dragon/i,
    ];
    typesList.forEach((type) => {
      const butt = screen.getByRole('button', { name: type });
      expect(butt).toBeInTheDocument();
    });
  });

  test('Testando os botões de filtros: ', () => {
    renderWithRouter(<App />);

    // testando se todos os botões de seleção estão aparecendo na tela.

    const buttons = screen.getAllByTestId('pokemon-type-button');
    buttons.forEach((butt) => {
      expect(butt).toBeInTheDocument();
    });
  });
});
