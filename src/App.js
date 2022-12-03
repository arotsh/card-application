import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Instructions from "./components/Instructions";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    //shortest way to generate unique numbers
    setCards((prev) => [...prev, Math.floor(Date.now() + Math.random())]);
  };

  const sortCard = () => {
    setCards((prev) => [...prev.sort((a, b) => a - b)]);
  };

  const deleteCard = (cardIndex) => {
    setCards((prev) => prev.filter((card, index) => index !== cardIndex));
  };

  return (
    <div className="parent">
      <Header addCard={addCard} sortCard={sortCard} />
      <Main cards={cards} deleteCard={deleteCard} />
      <Instructions />
      <Footer />
    </div>
  );
}
