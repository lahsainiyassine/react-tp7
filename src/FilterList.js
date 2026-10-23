import React, { useState } from 'react';

/**
 * Composant utilisant le pattern Render Props pour filtrer une liste.
 */
function FilterList({ items = [], render }) {
  const [filterText, setFilterText] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="filter-list-container">
      <input
        type="text"
        placeholder="Filtrer la liste..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        aria-label="Filtrer la liste"
      />
      {render ? render(filteredItems) : null}
    </div>
  );
}

export default FilterList;
