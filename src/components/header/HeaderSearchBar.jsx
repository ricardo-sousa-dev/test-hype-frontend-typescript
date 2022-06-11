import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context';
import './css/HeaderSearchBar.css';

function SearchBar() {
  // const [ searchBar, setSearchBar ] = useState('');

  const [ emptyResult, setEmptyResult ] = useState(false);
  const [ emptyFavorites, setEmptyFavorites ] = useState(false);

  const { setResultSearchBar, products, selectedFavorite, setSelectedFavorite, searchBar, setSearchBar } = useContext(Context);

  useEffect(() => { // searchBar is empty and selectedFavorite is false
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (searchBar.length === 0 && selectedFavorite) {
      setEmptyResult(false);
      setResultSearchBar(products);
    }

    if (searchBar.length === 0 && !selectedFavorite) {
      setEmptyFavorites(false);
      setResultSearchBar(favorites);
    }
  }, [ searchBar, products, selectedFavorite, setResultSearchBar ]);

  const handleSearchBar = ({ target: { value } }) => {
    setSearchBar(value);
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (value || value.length > 0) { // case search bar is not empty

      if (!selectedFavorite) { // case favorite exists and selected

        if (favorites && favorites.length > 0) { // case favorite exists

          const filterFavorites = favorites.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase()));

          if (filterFavorites && filterFavorites.length > 0) { // case favorite exists and contains the search
            setEmptyResult(false);
            setResultSearchBar(filterFavorites);

          } else { // case favorite exists and doesn't contain the search
            setResultSearchBar(products)
            setTimeout(() => {
              setEmptyResult(false);
            }, 5000);
            setEmptyResult(true);
          }

        } else { // case favorite doesn't exist
          const productsFiltered = products.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase()) &&
            value !== '',
          )
          if (productsFiltered && productsFiltered.length > 0) { // case products exists and contains the search
            setEmptyResult(false);
            setResultSearchBar(productsFiltered);

          } else { // case products doesn't exist
            setTimeout(() => {
              setEmptyResult(false);
            }, 5000);
            setEmptyResult(true);
          }
        }
      } else {

        const productsFiltered = products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase()) &&
          value !== '',
        )
        if (productsFiltered && productsFiltered.length > 0) { // case products exists and contains the search
          setEmptyResult(false);
          setResultSearchBar(productsFiltered);

        } else { // case products doesn't exist
          setResultSearchBar(products);
          setTimeout(() => {
            setEmptyResult(false);
          }, 5000);
          setEmptyResult(true);
        }
      }
    } else {
      setEmptyResult(false);
      if (!selectedFavorite && (favorites && favorites.length > 0)) {
        setResultSearchBar(favorites);
      }
      setResultSearchBar(products);
    }
  }

  const handleFavorites = () => { // select favorites
    setSelectedFavorite(!selectedFavorite)
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites && favorites.length > 0) { // case favorite exists

      if (selectedFavorite) { // case favorite exists and selected
        setEmptyFavorites(false);

        if (searchBar.length > 0) { // case search bar is not empty
          const filterFavorites = favorites.filter((product) =>
            product.name.toLowerCase().includes(searchBar.toLowerCase()) &&
            searchBar !== '',
          )

          if (filterFavorites && filterFavorites.length > 0) { // case search bar is not empty and result exists
            setEmptyResult(false);
            setResultSearchBar(filterFavorites);

          } else { // case search bar is not empty and result not exists
            setResultSearchBar(products);
            setTimeout(() => {
              setEmptyResult(false);
            }, 5000);
            setEmptyResult(true);
          }

        } else { // case search bar is empty
          setEmptyResult(false);
          setResultSearchBar(favorites);
        }

      } else { // case favorite exists and not selected
        const filterSearchBar = products.filter((product) =>
          product.name.toLowerCase().includes(searchBar.toLowerCase()) &&
          searchBar !== '',
        )

        setEmptyFavorites(false);
        setResultSearchBar(filterSearchBar);
      }

    } else { // case favorite not exists
      document.getElementById('favorites').checked = false;

      setTimeout(() => {
        setEmptyFavorites(false);
      }, 5000);

      setEmptyFavorites(true);
      setResultSearchBar(products);
    }
  }

  return (
    <div className="searchBar">
      <div className="div-messages">
        {emptyFavorites ? <div className="message">Você não tem produtos favoritos!</div> : null}
        {emptyResult ? <div className="message" data-testid="message-empty">Ops! Nenhum resultado encontrado!</div> : null}
      </div>

      <div className="search">
        <div className="div-input">
          <input
            type="text"
            data-testid="search-input"
            value={searchBar}
            onChange={handleSearchBar}
            placeholder='Buscar produto...'
          />
          <div className='div-button-clear-search'>
          {searchBar.length>0? <button className="button-clear-search" data-testid="button-clear-search" onClick={()=>setSearchBar('')}>x</button> : null}

          </div>
        </div>

        <div className="div-favorites">
          <input type="checkbox" id="favorites" className="favorites" value={selectedFavorite} onClick={handleFavorites} data-testid="favorites-select" />
          <label htmlFor="favorites" className="favorites-label" data-testid="favorites-label">Favoritos</label>
        </div>
      </div>
    </div >
  );
}

export default SearchBar;
