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

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            width: 100%;
            background-color: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            width: 100%;
            background-color: #888;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        }
    }

    body {
        padding: 0;
        margin: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
            margin-top: 0;
        }

        h3 {
            font-size: var(--fontMed);
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }

        #root {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100vh;
        }
    }

    .material-icons {
        vertical-align: bottom;
    }
`;

export default GlobalStyle;
