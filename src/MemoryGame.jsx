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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Memory Card Game</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-24 h-32 flex items-center justify-center text-4xl bg-gray-400 border rounded-lg"
          >
            {card.isFlipped ? card.value : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
