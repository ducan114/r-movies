import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

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
            margin-bottom: 1rem;
        }

        h3 {
            font-size: var(--fontMed);
            font-weight: 600;
            margin: 0.75rem 0;
        }

        p {
            font-size: 1rem;
            color: var(--white);
            margin: 1rem 0;
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
        font-size: var(--fontMed);
        font-style: italic;
    }
`;

export default GlobalStyle;
