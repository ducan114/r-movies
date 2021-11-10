import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.25rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        padding: 0;
        margin: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: var(--fontMed);
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }

    .material-icons {
        vertical-align: bottom;
    }
`;

export default GlobalStyle;
