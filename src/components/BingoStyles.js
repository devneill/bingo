import styled from 'styled-components';

export const Layout = styled.div`
  margin: auto;
  width: 80%;
  height: 80%;
`;

export const BingoBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(5, auto);
  border: 2px solid;
  border-radius: 12px;

  /* Unfortunately couldn't get this working in time */
  ${({ wins }) =>
    wins &&
    '-webkit-animation: spin 2s ease-in-out 1; -moz-animation: spin 2s ease-in-out 1; animation: spin 2s ease-in-out 1;'};
`;

export const BingoBox = styled.button`
  padding: 1vmin;
  border: 1px solid;
  font-size: 3vmin;
  cursor: pointer;
  border-radius: ${({ position }) => {
    switch (position) {
      case 0:
        return '10px 0 0 0';
      case 4:
        return '0 10px 0 0';
      case 20:
        return '0 0 0 10px';
      case 24:
        return '0 0 10px 0';
      default:
        return '';
    }
  }};
  background: ${({ selected }) => selected && '#b2df00'};

  :hover {
    background: #ff3366;
  }
`;
