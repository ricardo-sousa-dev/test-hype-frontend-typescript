import React, {useContext} from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaCartArrowDown } from "react-icons/fa"; //https://react-icons.github.io/react-icons/icons?name=fa
import './css/GoToButton.css';

function GoToButton(props) {
  const navigate = useNavigate();
  const { route, title, icon, payload } = props;

  const{setResultSearchBar, setSelectedFavorite, setSearchBar} = useContext(Context);

  const clearSearch = () => {
    setResultSearchBar([]);
    setSearchBar('');
    navigate(route, { state: payload });
  }

  const iconComponent = () => {
    switch (icon) {
      case "FaCreditCard":
        return <button
          type="button"
          onClick={() => clearSearch()}
          className="go-to-button"
          style={{ background: "rgba(0, 128, 0, 0.683)" }}
        >
          <FaCreditCard className="icon-button" />
          <span className="text-button">
            {title}
          </span>
        </button>

      case "FaCartArrowDown":
        return <button
          type="button"
          onClick={() => navigate(route)}
          className="go-to-button"
          style={{ background: "#353e5292" }}
        >
          <FaCartArrowDown className="icon-button" />
          <span className="text-button">
            {title}
          </span>
        </button>
    }
  }
  return iconComponent();

};


export default GoToButton;
