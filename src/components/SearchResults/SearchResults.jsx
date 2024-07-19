import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = ({ searchQuery }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || searchQuery;

  // Aqui você pode implementar a lógica para buscar os resultados com base na query
  // Para este exemplo, vamos apenas mostrar a query
  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      {/* Mostrar os resultados aqui */}
    </div>
  );
};

export default SearchResults;
