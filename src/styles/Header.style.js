import styled from "styled-components";

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    position: relative;

    .settins-icon {
        margin-left: 15px;
    }

    input {
        border-radius: 5px;
        border: 1px solid #000;
        font-weight: 600;
        padding: 5px;
        margin-right: 5px;

        &:focus {
            outline: 1px solid #005149;
        }
    }
`

export const SettingsDropdown = styled.div`
    position: absolute;
    top: 29px;
    right: 10px;
    background-color: #fff;
    box-shadow: 10px 10px 48px 2px rgba(0,0,0,0.10);
    border-radius: 5px;
    width: 120px;
    z-index: 999;
    padding: 15px;


    button {
        background: none;
        border: none;
        display: block;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover:not(button:disabled) {
            color: #005149;
        }

        &:not(&:last-child) {
            margin-bottom: 15px;
        }

    }
` 