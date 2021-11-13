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
            height: 5px;
        }

        ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
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
            min-height: 100vh;
            display: flex;
            flex-direction: column;

            main {
                flex: 1 1 0px;
            }
        }
    }

    .material-icons {
        vertical-align: bottom;
    }

    .tagline {
        font-size: var(---fontMed);
        font-style: italic;
    }
`;

export default GlobalStyle;
