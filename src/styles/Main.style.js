import styled from "styled-components";

export const AppWrap = styled.div`
    padding: 100px;
`
export const IconButton = styled.button`
    background: none;
    border: none;
    transition: 0.3s ease-in-out;
    font-size: 22px;
    cursor: pointer;
`

export const BGContainer = styled.div`
    position: fixed;
    top: 0;
    lefT: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
`
export const SaveBtn = styled.button`
    background-color: #005149;
    color: #fff;
    border: 1.5px solid transparent;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: none;
        color: #005149;
        border: 1.5px solid #005149;
    }
`

export const CancelBtn = styled(SaveBtn)`
    background: none;
    color: #005149;
    border: 1.5px solid #005149;

    &:hover {
        color: #fff;
        background-color: #005149;
    }
`