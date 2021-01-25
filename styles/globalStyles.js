import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    blue: '#609ad2',
    darkBlue: '#043157',
    green: '#4ca585',
    red: '#CF7357',
    yellow: '#e6d6ac',
    white: '#eeeeee',
  },
};

// 2. interpolate it using tagged template literals
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Abril Fatface';
  font-style: normal;
  font-display: optional;
  src: url(/fonts/AbrilFatface.ttf) format('ttf');
}
html,
body{
  padding:0;
  margin: 0;
  font-family: 'Abril Fatface', cursive;
}
`;

export default GlobalStyle;
