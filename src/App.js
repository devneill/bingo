import { useState } from 'react';

import { Container } from './AppStyles';
import { Bingo } from './components/Bingo';

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

function App() {
  const initialState = [
    ...Array(12).fill(false),
    true,
    ...Array(12).fill(false),
  ];
  const [boxes, setBoxes] = useState(initialState);
  const wins = calculateWins(boxes);

  return (
    <Container wins={wins}>
      <Bingo boxes={boxes} setBoxes={setBoxes} wins={wins} />
    </Container>
  );
}

export default App;
