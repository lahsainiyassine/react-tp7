import React from 'react';

function JSXDemo() {
  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  const elementJS = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div className="demo-box">
      {elementJSX}
      {elementJS}
      <div style={{ marginTop: '15px' }}>
        <label htmlFor="champ">Entrez votre nom : </label>
        <input id="champ" placeholder="Votre nom ici" />
      </div>
    </div>
  );
}

export default JSXDemo;
