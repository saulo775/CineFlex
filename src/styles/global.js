
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #E8833A;
        --background: #FFFFFF;
        --green: #1AAE9E;
        --green-ligth: #8DD7CF;
        --yellow: #F7C52B;
        --yellow-ligth: #FBE192;

        --gray-dark: #7B8B99;
        --header: #C3CFD9;
        --gray: #9EADBA;
        --footer: #DFE6ED;
        --gray-ligth-2: #D4D4D4;
        
        --text-white: #FFFFFF;
        --text-black: #293845;
        --placeholder-color: #AFAFAF;

        --seat-available: #C3CFD9;
        --border1: #808F9D;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    }

    body{
        -webkit-font-smooth: antialiased;
        font-family: 'Roboto', sans-serif;
        position: relative;
    }

    h1, h2, h3, h4, p, li, label {
        color: var(--text-black);
    }
    a{
        text-decoration: none;
        color: currentColor;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;