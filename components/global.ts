import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Bello Script";
        src: url(/fonts/bello-script.ttf);
    }

    @font-face {
        font-family: "Proxima Nova";
        src: url(/fonts/proxima-nova-regular.woff);
    }

    body{
        margin: 0;
        padding: 0;
    }

    button{
        border: none;
    }
`;
