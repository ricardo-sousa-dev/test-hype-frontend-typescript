import React, { useState, useContext, ChangeEvent} from 'react';
import Context from '../../context/Context';
import './css/HeaderSearchBar.css';
import { IProduct } from '../../interfaces';

function SearchBar() {
  type Products = IProduct[];
  const [ emptyResult, setEmptyResult ] = useState(false);
  const [ emptyFavorites, setEmptyFavorites ] = useState(false);

  const { setResultSearchBar, products, selectedFavorite, setSelectedFavorite, searchBar, setSearchBar } = useContext(Context);

  const checkFavorites = document.getElementById('favorites') as HTMLInputElement | null;

  const handleSearchBar = (value:string) => {
    setSearchBar(value);
    const favorites: Products = JSON.parse(localStorage.favorites) || [];

    if (value && value.length > 0) { // case search bar is not empty

      if (!selectedFavorite) { // case favorite exists and selected

        if (favorites && favorites.length > 0) { // case favorite exists

          const filterFavorites = favorites.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase()));

          if (filterFavorites && filterFavorites.length > 0) { // case favorite exists and contains the search
            setEmptyResult(false);
            setResultSearchBar(filterFavorites);

          } else { // case favorite exists and doesn't contain the search
            setResultSearchBar([])
          }

        } else { // case favorite doesn't exist
          const productsFiltered = products.filter((product: IProduct) =>
            product.name.toLowerCase().includes(value.toLowerCase()) &&
            value !== '',
          )
          if (productsFiltered && productsFiltered.length > 0) { // case products exists and contains the search
            setEmptyResult(false);
            setResultSearchBar(productsFiltered);

          } else { // case products doesn't exist
            setResultSearchBar([])
          }
        }
      } else {

        const productsFiltered = products.filter((product: IProduct) =>
          product.name.toLowerCase().includes(value.toLowerCase()) &&
          value !== '',
        )
        if (productsFiltered && productsFiltered.length > 0) { // case products exists and contains the search
          setEmptyResult(false);
          setResultSearchBar(productsFiltered);

        } else { // case products doesn't exist
          setResultSearchBar([])
        }
      }
    } else {
      setEmptyResult(false);
      if (!selectedFavorite && (favorites && favorites.length > 0)) {
        setResultSearchBar(favorites);
      }
      setResultSearchBar([]);
    }
  }

  const handleFavorites = () => { // select favorites

    const favorites: Products = JSON.parse(localStorage.favorites) || [];

    setSelectedFavorite(!selectedFavorite);

    if (selectedFavorite) { // case favorite exists and selected
      // console.log('SELECIONOU O FAVORITO');
      if (favorites && favorites.length > 0) { // case favorite exists
        // console.log('TEM FAVORITOS');
        if (searchBar.length > 0) { // case search bar is not empty
          // console.log('TEM BUSCA');
          const filterFavorites = favorites.filter((product) =>
            product.name.toLowerCase().includes(searchBar.toLowerCase()) &&
            searchBar !== '',
          )

          if (filterFavorites && filterFavorites.length > 0) { // case search bar is not empty and result exists
            // console.log('TEM RESULTADO NA BUSCA');
            setResultSearchBar(filterFavorites);

          } else { // case search bar is not empty and result not exists
            // console.log('NAO TEM RESULTADO NA BUSCA');
            setResultSearchBar([]);
            setTimeout(() => {
              setEmptyResult(false);
              setEmptyFavorites(false);
            }, 5000);
            setEmptyResult(true);
          }

        } else { // case search bar is empty
          // console.log('NAO TEM BUSCA');
          setEmptyResult(false);
          setEmptyFavorites(false);
          setResultSearchBar(favorites);
        }

      } else { // case favorite doesn't exist and selected
        // console.log('NAO TEM FAVORITOS E SELECIONOU');
        setTimeout(() => {
          setEmptyFavorites(false);
          setEmptyResult(false);
        }, 5000);
        setEmptyFavorites(true);
        checkFavorites ? checkFavorites.checked = false : null;
        setSelectedFavorite(true);
        setResultSearchBar([]);
      }

    } else { // case favorite not selected
      // console.log('NAO SELECIONOU O FAVORITO');

      if (searchBar.length > 0) { // case search bar is not empty
        // console.log('TEM BUSCA');
        const productsFiltered = products.filter((product:IProduct) =>
          product.name.toLowerCase().includes(searchBar.toLowerCase()) &&
          searchBar !== '',
        )

        if (productsFiltered && productsFiltered.length > 0) { // case products exists and contains the search
          // console.log('TEM RESULTADO NA BUSCA');
          setEmptyResult(false);
          setResultSearchBar(productsFiltered);

        } else { // case products doesn't exist
          // console.log('NAO TEM RESULTADO NA BUSCA');
          setResultSearchBar([]);
          setTimeout(() => {
            setEmptyResult(false);
            setEmptyFavorites(false);
          }, 5000);
          setEmptyResult(true);
        }
      }

      else { // case search bar is empty
        // console.log('NAO TEM BUSCA');
        setEmptyResult(false);
        setEmptyFavorites(false);
        setResultSearchBar([]);
      }
    }
  }

  const clearSearch = () => {
    
    setResultSearchBar([]);
    setSelectedFavorite(true)
    checkFavorites ? checkFavorites.checked = false : null;
    // checkFavorites ? checkFavorites.value = false : null;
    setSearchBar('');
    setEmptyResult(false);
    setEmptyFavorites(false);
  }

  return (
    <div className="searchBar">
      <div className="div-messages">
        { emptyFavorites ? <div className="message">Você não tem produtos favoritos!</div> : null }
        { emptyResult ? <div className="message" data-testid="message-empty">Ops! Nenhum resultado encontrado!</div> : null }
      </div>

      <div className="search">
        <div className="div-input">
          <input
            type="text"
            data-testid="search-input"
            value={ searchBar }
            onChange={(e: ChangeEvent<HTMLInputElement>): void => handleSearchBar(e.target.value)}
            placeholder='Buscar produto...'
          />
          <div className='div-button-clear-search'>
            { searchBar.length > 0
              ? <button
                className="button-clear-search"
                data-testid="button-clear-search"
                onClick={ () => clearSearch() }>
                x
              </button>
              : null }

          </div>
        </div>

        <div className="div-favorites">
          <input type="checkbox" id="favorites" className="favorites" value={ selectedFavorite } onClick={ handleFavorites } data-testid="favorites-select" />
          <label htmlFor="favorites" className="favorites-label" data-testid="favorites-label">Favoritos</label>
        </div>
      </div>
    </div >
  );
}

export default SearchBar;