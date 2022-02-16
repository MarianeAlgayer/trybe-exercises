import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// O que ele está fazendo é verificar se algum elemento dentro do componente App possui o texto "learn react" ( /string/i é utilizado para ignorar case sensitive , ou seja, não diferenciar letras maiúsculas e minúsculas). Para rodar os testes vá para a pasta src e execute npm test.