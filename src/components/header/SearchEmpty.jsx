import React from "react";
import "./css/SearchEmpty.css";
import { FaRegSadTear } from "react-icons/fa";

export default function SearchEmpty() {
  return (
    <div className="search-empty">
      <FaRegSadTear className="emoji-empty" data-testid="message-empty"/>
        <p className="message-empty" data-testid="message-empty">Nenhum produto encontrado nesta busca!</p>
    </div>
  );
}