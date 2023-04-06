import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --blue-300: #bad9e9;
    --blue-600: #3887ae;
    --blue-900: #162d50;

    --font-black: #1c1c1c;
    --font-white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @midia (max-width: 1080px){
        font-size: 93.75%;
    }
    @midia (max-width: 720px) {
        font-size: 87.5%;
    }
}
h1 {
    font-family: 'Roboto';
}
`;
