import styled from 'styled-components';

const chooseBackground = ({ wins }) => {
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
      return '#6D253F';
    case 9:
      return '#F5C654';
    case 10:
      return '#415883';
    case 11:
      return '#7DCEB9';
    case 12:
      return `repeat  url("https://s.yimg.com/ny/api/res/1.2/PPu_U6UY8JjEGaR3t4T3wQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/Rffcviow.eCHjmEu2msLJg--~B/aD0xNzU3O3c9MjM0MzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/c6ce8d0b9a7b28f9c2dee8171da98b8f 
")`;
    default:
      return '#B2DF00';
  }
};

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${chooseBackground}};
`;
