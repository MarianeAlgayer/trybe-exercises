import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import renderWithRedux from './helpers';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    // Outra maneira:
    /* const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui'); */

    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });
});