import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const MemoryGame = () => {
  const initialCards = [
    { id: 1, value: "🐶" },
    { id: 2, value: "🐱" },
    { id: 3, value: "🐭" },
    { id: 4, value: "🐹" },
    { id: 5, value: "🐰" },
    { id: 6, value: "🦊" },
    { id: 7, value: "🐻" },
    { id: 8, value: "🐼" },
  ];

  const shuffleCards = (cards) => {
    return [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, isFlipped: false, isMatched: false }));
  };

  const [cards, setCards] = useState(shuffleCards(initialCards));
  const [flippedCards, setFlippedCards] = useState([]);


  const flipCard = (index) => {
    console.log(` card index: ${index}`);
    if (flippedCards.length === 2 || cards[index].isFlipped) return;
    console.log("Cannot flip card.");

  
    let newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);
    console.log(`Current flipped cards: ${flippedCards.concat(index)}`);
    // console.log(`New cards: ${newCards}`);
  
    if (flippedCards.length === 1) {
      checkForMatch(newCards, flippedCards[0], index);
    }
  };

  const checkForMatch = (newCards, firstIndex, secondIndex) => {
    console.log(`Comparing card values: ${newCards[firstIndex].value} and ${newCards[secondIndex].value}`);

    if (newCards[firstIndex].value === newCards[secondIndex].value) {
        console.log("Match found!");
      newCards[firstIndex].isMatched = true;
      newCards[secondIndex].isMatched = true;
      setFlippedCards([]);
    } else {
      setTimeout(() => {
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
        setFlippedCards([]);
      }, 1000);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Memory Card Game</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
          key={index}
          className="w-24 h-32 flex items-center justify-center text-4xl bg-gray-400 border rounded-lg cursor-pointer"
          onClick={() => flipCard(index)}
        >
          {card.isFlipped ? card.value : ""}
        </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
