import React, { useState } from 'react';
import './App.css';

// Étape 2, 3, 4
import JSXDemo from './JSXDemo';

// Étape 5 : HOC
import ButtonWithLogging from './ButtonWithLogging';

// Étape 6 : Render Props
import DataLoader from './DataLoader';

// Étape 8 : Composant testé unitairement
import Greeting from './Greeting';

// Étape 9 : Composant avec interaction (test d'intégration)
import Counter from './Counter';

// Étape 10 : Exercices complémentaires
import withTimestamp from './withTimestamp';
import FilterList from './FilterList';
import UserForm from './UserForm';

// Création d'un composant enveloppé avec le HOC withTimestamp
const GreetingWithTimestamp = withTimestamp(Greeting);

function App() {
  const [submittedName, setSubmittedName] = useState('');

  return (
    <div className="App">
      <header className="app-header">
        <h1>TP 7 : Comprendre JSX, la composition avancée et les tests React</h1>
      </header>

      <main className="app-main">
        {/* Étape 2, 3 & 4 : JSX et bonnes pratiques */}
        <section className="card">
          <h2>Étapes 2, 3 & 4 – JSX & Bonnes Pratiques</h2>
          <p className="description">
            Comparaison entre JSX déclaratif et <code>React.createElement</code>, avec utilisation de <code>className</code> et <code>htmlFor</code>.
          </p>
          <JSXDemo />
        </section>

        {/* Étape 5 : Higher-Order Component (HOC) */}
        <section className="card">
          <h2>Étape 5 – Higher-Order Component (HOC) : withLogging</h2>
          <p className="description">
            Ce bouton est enveloppé par le HOC <code>withLogging</code> qui affiche ses props dans la console du navigateur.
          </p>
          <ButtonWithLogging
            label="Cliquer ici (voir console)"
            onClick={() => console.log('Bouton cliqué !')}
          />
        </section>

        {/* Étape 6 : Render Props */}
        <section className="card">
          <h2>Étape 6 – Render Props : DataLoader</h2>
          <p className="description">
            <code>DataLoader</code> délègue son affichage via une fonction <code>render</code>.
          </p>
          <DataLoader
            render={(data) => (
              <ul className="data-list">
                {data.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            )}
          />
        </section>

        {/* Étape 8 : Test unitaire - Greeting */}
        <section className="card">
          <h2>Étape 8 – Composant Greeting (Test Unitaire)</h2>
          <Greeting name="Alice" />
        </section>

        {/* Étape 9 : Test d'intégration - Counter */}
        <section className="card">
          <h2>Étape 9 – Composant Counter (Test d'Intégration)</h2>
          <Counter />
        </section>

        {/* Étape 10 : Exercices complémentaires */}
        <section className="card">
          <h2>Étape 10 – Exercices Complémentaires</h2>

          <div className="exercise-block">
            <h3>1. HOC avec Timestamp (withTimestamp)</h3>
            <GreetingWithTimestamp name="Étudiant React" />
          </div>

          <div className="exercise-block">
            <h3>2. Render Props pour filtrer une liste (FilterList)</h3>
            <FilterList
              items={['JavaScript', 'TypeScript', 'React', 'Jest', 'Testing Library', 'Node.js']}
              render={(filtered) => (
                <ul className="framework-list">
                  {filtered.length > 0 ? (
                    filtered.map((item) => <li key={item}>{item}</li>)
                  ) : (
                    <li className="empty-message">Aucun résultat trouvé</li>
                  )}
                </ul>
              )}
            />
          </div>

          <div className="exercise-block">
            <h3>3. Formulaire avec validation de champ vide (UserForm)</h3>
            <UserForm onSubmit={(name) => setSubmittedName(name)} />
            {submittedName && (
              <p className="success-message">
                Bienvenue, <strong>{submittedName}</strong> !
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
