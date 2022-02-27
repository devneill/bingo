import { useMemo } from 'react';
import _shuffle from 'lodash/shuffle';

import { phrases } from '../assets/phrases';
import { BingoBoard, BingoBox } from './BingoStyles';

export function Bingo({ boxes, setBoxes, wins }) {
  const shuffledPhrases = useMemo(() => _shuffle(phrases), []);

  const selectBox = (box) => {
    const boxesCopy = [...boxes];
    boxesCopy[box] = !boxesCopy[box];
    setBoxes(boxesCopy);
  };

  return (
    <div>
      <h1> Wins: {wins}</h1>
      <BingoBoard>
        {shuffledPhrases.map((phrase, i) => (
          <BingoBox
            key={phrase}
            position={i}
            selected={boxes[i]}
            onClick={() => selectBox(i)}
          >
            {phrase}
          </BingoBox>
        ))}
      </BingoBoard>
    </div>
  );
}
