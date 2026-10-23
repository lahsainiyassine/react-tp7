import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

describe('UserForm', () => {
  test('affiche un message d’erreur si le champ est vide à la soumission', () => {
    const handleSubmit = jest.fn();
    render(<UserForm onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(submitButton);

    // Vérifie que l'erreur s'affiche
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Ce champ est obligatoire.');

    // Vérifie que onSubmit n'a pas été appelé
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('soumet les données correctement quand le champ est rempli', () => {
    const handleSubmit = jest.fn();
    render(<UserForm onSubmit={handleSubmit} />);

    const input = screen.getByLabelText(/nom :/i);
    fireEvent.change(input, { target: { value: 'Jean Dupont' } });

    const submitButton = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(submitButton);

    // Vérifie qu'il n'y a pas d'erreur affichée
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    // Vérifie que onSubmit a été appelé avec la valeur saisie
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith('Jean Dupont');
  });
});
