import { useState, useMemo } from 'react';
import { phrases } from './phrases';
import _shuffle from 'lodash/shuffle';

function calculateWins(boxes) {
  const combos = [
    // Horizontals
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // Diagonals
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
    // Verticals
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
  ];

  let wins = 0;
  combos.forEach((combo) => {
    const [a, b, c, d, e] = combo;
    if (boxes[a] && boxes[b] && boxes[c] && boxes[d] && boxes[e]) {
      wins += 1;
    }
  });
  return wins;
}

export function Bingo() {
  const initialState = [...Array(12).fill(null), true, ...Array(12).fill(null)];
  const [boxes, setBoxes] = useState(initialState);
  const wins = calculateWins(boxes);
  console.log(wins);

  const selectBox = (box) => {
    const boxesCopy = [...boxes];
    boxesCopy[box] = true;
    setBoxes(boxesCopy);
  };

  const shuffledPhrases = useMemo(() => _shuffle(phrases), []);

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
