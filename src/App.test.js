import { render, screen } from '@testing-library/react';
import App from './App';

test('rend le titre principal du TP 7', () => {
  render(<App />);
  const headingElement = screen.getByText(/TP 7 : Comprendre JSX, la composition avancée et les tests React/i);
  expect(headingElement).toBeInTheDocument();
});

test('rend les sections clés du TP', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /JSX & Bonnes Pratiques/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /withLogging/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /DataLoader/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Composant Greeting/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Composant Counter/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Exercices Complémentaires/i })).toBeInTheDocument();
});
