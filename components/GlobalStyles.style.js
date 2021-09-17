import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "BelloScript";
        src: url(/fonts/bello-script.ttf);
    }

    @font-face {
        font-family: "ProximaNova";
        src: url(/fonts/proxima-nova-regular.woff);
    }

    body{
        margin: 0;
        padding: 0;
    }
`;
