import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About da Aplicação: ', () => {
  // 1. Teste 1: Elemento h2
  test('Testando o subtitulo da página: ', () => {
    renderWithRouter(<About />);

    // testando se existe o subTitulo com texto: "About Pokédex"
    const expectH2 = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(expectH2).toBeInTheDocument();
  });

  // 2. Teste 2: Elementos p
  test('Testando os 2 paragrafos da página: ', () => {
    renderWithRouter(<About />);

    // testando se existe o paragrafo com o texto:
    // "This application simulates a Pokédex, a digital encyclopedia containing all Pokémons"
    const expectParagraph1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(expectParagraph1).toBeInTheDocument();

    // testando se existe o paragrafo com o texto:
    // "One can filter Pokémons by type, and see more details for each one of them"
    const expectParagraph2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(expectParagraph2).toBeInTheDocument();
  });

  // 3. Teste 3: Elemento img
  test('Testando a imagem: ', () => {
    renderWithRouter(<About />);

    // puxando a imagem para a variável expectImage.
    const expectImage = screen.getByRole('img',
      { source: '' });

    // testando se o atributo src está correto e se a imagem está no documento.
    expect(expectImage).toBeInTheDocument();
    expect(expectImage)
      .toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
