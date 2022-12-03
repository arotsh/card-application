import React from "react";
import "./styles.css";

function Header({ addCard, sortCard }) {
  return (
    <div className="header">
      <div className="buttons">
        <button className="addButton" type="button" onClick={addCard}>
          Add Card
        </button>
        <button className="sortButton" type="button" onClick={sortCard}>
          Sort Cards
        </button>
      </div>
    </div>
  );
}

export default Header;
