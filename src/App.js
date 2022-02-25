import styled from 'styled-components';
import { Bingo } from './Bingo';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ wins }) => {
    switch (wins) {
      case 1:
        return '#ff3366';
      case 2:
        return '#0544F8';
      case 3:
        return '#11c9fc';
      case 4:
        return '#143581';
      case 5:
        return '#6fbcb4';
      case 6:
        return '#18AD84';
      case 7:
        return '#25ABC7';
      case 8:
        return '#25ABC7';
      case 9:
        return '#25ABC7';
      case 10:
        return '#25ABC7';
      case 11:
        return '#25ABC7';
      case 12:
        return `repeat  url("https://s.yimg.com/ny/api/res/1.2/PPu_U6UY8JjEGaR3t4T3wQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/Rffcviow.eCHjmEu2msLJg--~B/aD0xNzU3O3c9MjM0MzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/c6ce8d0b9a7b28f9c2dee8171da98b8f 
")`;
      default:
        console.log(wins);
        return '#B2DF00';
    }
  }};
`;
// https://s.yimg.com/ny/api/res/1.2/PPu_U6UY8JjEGaR3t4T3wQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/Rffcviow.eCHjmEu2msLJg--~B/aD0xNzU3O3c9MjM0MzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/c6ce8d0b9a7b28f9c2dee8171da98b8f

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
  const initialState = [...Array(12).fill(null), true, ...Array(12).fill(null)];
  const [boxes, setBoxes] = useState(initialState);
  const wins = calculateWins(boxes);

  return (
    <Container wins={wins}>
      <Bingo boxes={boxes} setBoxes={setBoxes} wins={wins} />
    </Container>
  );
}

export default App;
