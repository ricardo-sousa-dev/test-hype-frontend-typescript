import React, { useState, useContext } from 'react';
import Context from '../../context/Context';
import '../../css/HeaderSearchBar.css';

function SearchBar() {
  const [ selectedFavorite, setSelectedFavorite ] = useState(true);
  const [ searchBar, setSearchBar ] = useState('');

  const [ emptyResult, setEmptyResult ] = useState(false);
  const [ emptyFavorites, setEmptyFavorites ] = useState(false);

  const { setResultSearchBar, products } = useContext(Context);

  const handleSearchBar = ({ target: { value } }) => {
    setSearchBar(value);
    value === '' ? setEmptyResult(false) : setEmptyResult(true);

    const productsFiltered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase()) &&
      value !== '',
    )

    if ((!productsFiltered || productsFiltered.length === 0) && searchBar !== '') {
      setTimeout(() => {
        setEmptyResult(false);
      }, 5000);
      setEmptyResult(true);
      setResultSearchBar(products)

    } else {
      setEmptyResult(false);
      setResultSearchBar(productsFiltered);
    }
  };

  const handleFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    setSelectedFavorite(!selectedFavorite);

    if (selectedFavorite) {
      if (!favorites || favorites.length === 0) {
        document.getElementById('favorites').checked = false;

        setTimeout(() => {
          setEmptyFavorites(false);
        }, 5000);

        setEmptyFavorites(true);
        setResultSearchBar(products);

      } else {
        setEmptyFavorites(false);
        setResultSearchBar(favorites);
      }
    }
    else {
      setResultSearchBar(products);
    }
  }

  return (
    <div className="searchBar">
      <div className="search">
        <div className="div-input">
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
        </div>

        <div className="div-messages">
          {emptyFavorites ? <div className="message">Você não tem produtos favoritos!</div> : null}
          {emptyResult ? <div className="message">Nenhum resultado encontrado!</div> : null}
        </div>
      </div>

      <div className="select-favorites">
        <input type="checkbox" id="favorites" className="favorites" onClick={handleFavorites} />
        <label htmlFor="favorites" className="favorites-label">Favoritos</label>
      </div>
    </div>
  );
}

export default SearchBar;
