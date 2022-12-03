import React from "react";
import Card from "./Card";
import "./styles.css";

function Main({ cards, deleteCard }) {
  return (
    <div className="main">
        {cards.map((cardNumber, index) => (
          <Card
            number={cardNumber}
            key={cardNumber}
            onDelete={() => deleteCard(index)}
          />
        ))}
    </div>
  );
}

export default Main;
