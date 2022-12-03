import React from "react";
import "./styles.css";

function Instructions() {
  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <p>Press the "add card" button to add the new Card.</p>
      <p>Use the "sort cards" button to sort the Cards by the increase.</p>
      <p>Press an X icon on the top right to delete them.</p>
    </div>
  );
}

export default Instructions;
