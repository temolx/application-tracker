import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body, body * {
    font-family: sans-serif !important;
}

    &.icon {
        vertical-align: middle;
        margin: 0 0 3px 4px;
        min-width: 15px;
    }

    &.status-dropdown {
        font-size: 25px;
        margin-bottom: 5px;
    }

    .edit-icon {
    transition: 0.3s ease-in-out;
    margin-top: 2.5px;

        &:hover {
            transform: scale(1.2);
            color: green;
        }

        @media only screen and (max-width: 768px) {
            margin-left: 10px;
        } 
    }

    .headerIcon {
        @media only screen and (max-width: 1100px) {
            display: none;
        } 
    }

`