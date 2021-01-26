import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#045cfc',
    secondary: '#0349c9',
    red: '#CF7357',
    grey: '#eeeeee',
    white: '#ffffff',
  },
  fonts: {
    serif: '"Noto Serif", serif',
    sans: '"Noto Sans", sans-serif',
  },
};

// 2. interpolate it using tagged template literals
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-display: optional;
  src: url(/fonts/NotoSans-Regular.ttf) format('ttf');
}
@font-face {
  font-family: 'Noto Serif', serif;
  font-style: normal;
  font-display: optional;
  src: url(/fonts/NotoSerif-Regular.ttf) format('ttf');
}
@font-face {
  font-family: 'Noto Sans', serif;
  font-style: italic;
  font-display: optional;
  src: url(/fonts/NotoSans-Italic.ttf) format('ttf');
}
@font-face {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-display: optional;
  src: url(/fonts/NotoSerif-Italic.ttf) format('ttf');
}
@font-face {
  font-family: 'Noto Sans', serif;
  font-style: bold;
  font-display: optional;
  src: url(/fonts/NotoSans-Bold.ttf) format('ttf');
}
@font-face {
  font-family: 'Noto Serif', serif;
  font-style: Bold;
  font-display: optional;
  src: url(/fonts/NotoSerif-Bold.ttf) format('ttf');
}
html,
body{
  font-size: 0.8rem;
  padding:0;
  margin: 0;
  font-family: 'Noto Serif', serif;
}
`;

export default GlobalStyle;
