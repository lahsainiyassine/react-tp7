import { render, screen, fireEvent } from '@testing-library/react';
import FilterList from './FilterList';

test('filtre les éléments dynamiquement via render prop', () => {
  const frameworks = ['React', 'Vue', 'Angular', 'Svelte'];

  render(
    <FilterList
      items={frameworks}
      render={(filtered) => (
        <ul>
          {filtered.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    />
  );

  // Par défaut, tous les frameworks sont affichés
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('Vue')).toBeInTheDocument();
  expect(screen.getByText('Angular')).toBeInTheDocument();
  expect(screen.getByText('Svelte')).toBeInTheDocument();

  // On tape "ang" dans le champ de recherche
  const input = screen.getByLabelText('Filtrer la liste');
  fireEvent.change(input, { target: { value: 'ang' } });

  // Seul Angular doit rester
  expect(screen.getByText('Angular')).toBeInTheDocument();
  expect(screen.queryByText('React')).not.toBeInTheDocument();
  expect(screen.queryByText('Vue')).not.toBeInTheDocument();
  expect(screen.queryByText('Svelte')).not.toBeInTheDocument();
});
