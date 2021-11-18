import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
`;

export default GlobalStyles;
