import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    &.icon {
        vertical-align: middle;
        margin: 0 0 3px 4px;
        transition: 0.3s ease-in-out;
    }

    &.status-dropdown {
        font-size: 25px;
        margin-bottom: 5px;
    }
`