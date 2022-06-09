import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaCartArrowDown } from "react-icons/fa"; //https://react-icons.github.io/react-icons/icons?name=fa
import './css/GoToButton.css';

function goToButton(props) {
  const navigate = useNavigate();
  const { route, title, icon } = props;

  const goToPay = () => {
    navigate(route);
  }

  const iconComponent = () => {
    switch (icon) {
      case "FaCreditCard":
        return <button
          type="button"
          onClick={() => goToPay()}
          className="go-to-button"
          style={{ background: "rgba(0, 128, 0, 0.683)" }}
        >
          <FaCreditCard className="icon-button" />
          <span className="text-button">
            {title}
          </span>
        </button>
      case "FaCartArrowDown":
        return <FaCartArrowDown className="icon-button" />
    }
  }
  return iconComponent();

};


export default goToButton;
