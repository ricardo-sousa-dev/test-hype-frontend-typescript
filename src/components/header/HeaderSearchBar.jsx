import React, { useEffect, useState, useContext } from 'react';
import Context from '../../context/Context';
// import database from '../../services/database';
import '../../css/HeaderSearchBar.css';

function SearchBar() {
  const [searchBar, setSearchBar] = useState('');

  const { resultSearchBar } = useContext(Context);

  const handleSearchBar = ({ target: { value } }) => {
    setSearchBar(value);
    // const { products } = database;
    // setResultSearchBar(
    //   products.filter(
    //     (product) =>
    //       product.name.toLowerCase().includes(value.toLowerCase()) &&
    //       value !== '',
    //   ),
    // );
  };

  useEffect(() => {
  }, [resultSearchBar, searchBar]);

  return (
    <div className="search">
      <input
        type="text"
        data-testid="search-input"
        name="searchInput"
        className="searchInput"
        value={searchBar}
        onChange={handleSearchBar}
        onFocus={() => setSearchBar('')}
        placeholder='Buscar produto...'
      />
      <i className="fas fa-search"/>
    </div>
  );
}

export default SearchBar;
