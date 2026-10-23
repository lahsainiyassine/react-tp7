import React, { useState } from 'react';

/**
 * Composant formulaire vérifiant qu'un champ requis n'est pas vide.
 */
function UserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Ce champ est obligatoire.');
      return;
    }

    setError('');
    if (onSubmit) {
      onSubmit(name);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="user-form">
      <div>
        <label htmlFor="user-name-input">Nom :</label>
        <input
          id="user-name-input"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError('');
          }}
          placeholder="Entrez votre nom"
        />
      </div>
      <button type="submit">Envoyer</button>
      {error && (
        <p role="alert" className="form-error" style={{ color: '#d9534f', fontWeight: 'bold' }}>
          {error}
        </p>
      )}
    </form>
  );
}

export default UserForm;
