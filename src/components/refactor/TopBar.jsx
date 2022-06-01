import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '..';
import '../css/cssTopBar.css';

function TopBar() {
	return (
		<>
			<div className="product-details-top">
				<Link to="/" type="button" className="return">
					<i className="fas fa-arrow-left" />
				</Link>
				<SearchBar />
				<div className="div-cart-button">
          <div className="div-icon-button">
            <Link to="/cart" type="button" className="button-cart">
              <i className="fas fa-shopping-cart pr-2" />
            </Link>
          </div>
          <div className="container-quantity-cart">
            <div className="quantity-products-cart">
              {quantityProductsInCart}
            </div>
          </div>
        </div>
			</div>
		</>
	);
}

export default TopBar;