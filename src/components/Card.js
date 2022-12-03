import React from "react";
import "./styles.css";

function Card({ number, onDelete }) {
    return (
    <div className="card">
      <button onClick={onDelete}>X</button>
      <h1>{number}</h1>
    </div>
  );
};


export default Card;