import React, { useContext } from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaCartArrowDown } from "react-icons/fa";
import './css/GoToButton.css';

interface PropsButton {
  route: string;
  title: string;
  icon: string;
  payload?: {};
}

const GoToButton = ({ route, title, icon, payload }: PropsButton) => {
  const navigate = useNavigate();

  const { setResultSearchBar, setSearchBar } = useContext(Context);

  const clearSearch = () => {
    setResultSearchBar([]);
    setSearchBar('');
    navigate(route, { state: payload });
  }

  return (
    icon === "FaCreditCard" ?
      <button
        type="button"
        onClick={ () => clearSearch() }
        className="go-to-button"
        style={ { background: "rgba(0, 128, 0, 0.683)" } }
      >
        <FaCreditCard className="icon-button" />
        <span className="text-button">
          { title }
        </span>
      </button>
      : <button
        type="button"
        onClick={ () => navigate(route) }
        className="go-to-button"
        style={ { background: "#103b5092" } }
      >
        <FaCartArrowDown className="icon-button" />
        <span className="text-button">
          { title }
        </span>
      </button>
  );
};


export default GoToButton;
