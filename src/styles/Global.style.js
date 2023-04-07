import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body, body * {
    font-family: sans-serif !important;
}

    &.icon {
        vertical-align: middle;
        margin: 0 0 3px 4px;
    }

    &.status-dropdown {
        font-size: 25px;
        margin-bottom: 5px;
    }

    .edit-icon {
    transition: 0.3s ease-in-out;
        &:hover {
            transform: scale(1.2);
            color: green;
        }
    }
`