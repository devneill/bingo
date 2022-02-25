import './App.css';
import { useState, useMemo } from 'react';
import { phrases } from './phrases';
import _shuffle from 'lodash/shuffle';

export function Bingo({ boxes, setBoxes, wins }) {
  const shuffledPhrases = useMemo(() => _shuffle(phrases), []);

  const selectBox = (box) => {
    const boxesCopy = [...boxes];
    boxesCopy[box] = true;
    setBoxes(boxesCopy);
  };

  return (
    <div>
      <h1> Wins: {wins}</h1>
      <div
        className={wins !== 0 ? 'BingoBoard BingoBoard__winner' : 'BingoBoard'}
      >
        {shuffledPhrases.map((phrase, i) => (
          <button
            key={phrase}
            className={boxes[i] ? 'BingoBox BingoBox__selected' : 'BingoBox'}
            onClick={() => selectBox(i)}
          >
            {phrase}
          </button>
        ))}
      </div>
    </div>
  );
}
