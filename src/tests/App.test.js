import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Vamos testar o componente App: ', () => {
  // Testando se os tres links estão na tela.
  test('Verificando o Topo da aplicação: ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('');

    // puxando os três links esperados.
    const expectedHomeLink = screen
      .getByRole('link', { name: /home/i });
    const expectedAboutLink = screen
      .getByRole('link', { name: /about/i });
    const expectedFavoritePokeLink = screen
      .getByRole('link', { name: /favorite pokémons/i });

    // testando se os links estão presentes na página.
    expect(expectedHomeLink).toBeInTheDocument();
    expect(expectedAboutLink).toBeInTheDocument();
    expect(expectedFavoritePokeLink).toBeInTheDocument();
  });

  // testando se quando clicar em home vou ser redirecionada a pagina home.
  test('Teste o click no link Home: ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    // puxando o Link de Home e clicando
    const expectedHomeLink = screen
      .getByRole('link', { name: /home/i });
    fireEvent.click(expectedHomeLink);

    // testando se mudamos de página
    expect(screen.getByRole('heading', { name: /Encountered pokémons/i }))
      .toBeInTheDocument();
  });

  // testando se quando clicar em About vou ser redirecionada a pagina about.
  test('Teste o click no link About: ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    // puxando o Link de About e clicando
    const expectedAboutLink = screen
      .getByRole('link', { name: /About/i });
    fireEvent.click(expectedAboutLink);

    // testando se mudamos de página
    expect(screen.getByRole('heading', { name: /About/i }))
      .toBeInTheDocument();
  });

  // testando se quando clicar em Favorite Pokémons vou ser redirecionada a pagina de pokemons favoritos.
  test('Teste o click no link Favorite Pokemons: ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    // puxando o Link de Favorite Pokemons e clicando
    const expectedFavoritePokeLink = screen
      .getByRole('link', { name: /Favorite Pokémons/i });
    fireEvent.click(expectedFavoritePokeLink);

    // testando se mudamos de página
    expect(screen.getByRole('heading', { name: /Favorite pokémons/i }))
      .toBeInTheDocument();
  });

  // testando se quando direcionar a Url para uma página desconhecida, vamos para a página de Not Found
  test('Teste o click no link Favorite Pokemons: ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/CarlosCabaco');

    // testando se estamos na página de Not Found
    expect(screen.getByRole('heading', { name: /Page requested not found/i }))
      .toBeInTheDocument();
  });
});
