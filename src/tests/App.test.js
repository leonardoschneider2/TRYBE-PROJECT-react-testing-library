import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Vamos testar o componente App: ', () => {
  test('Verificando o Topo da aplicação: ', () => {
    render(<App />);
  });
});
