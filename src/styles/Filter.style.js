import styled from "styled-components";

export const SelectWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    position: relative;

    &:not(&:last-child) {
        margin-bottom: 42px;
    }

    .icon {
        color: #fff;
        font-size: 23px;
    }

    .plusIcon {
        position: absolute;
        top: 0;
        right: 0;
    }

    .minusIcon {
        position: absolute;
        top: 2.6px;
        left: -30px;
        font-size: 20px;
        display: flex;
    }
`

export const FilterSelect = styled.select`
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 25px;
    border-radius: 5px;
    outline: none;
    /* appearance: none */
    padding-left: 5px;
`

export const FilterLabel = styled.label`
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-top: 2px;
`

export const ClearButton = styled.button`
    background: none;
    border: none;
    color: #EBEBEB;
    font-size: 14px;
    font-weight: 500;

    position: absolute;
    bottom: 88px;
    left: 50%;
    transform: translate(-50%);

    &:hover {
        color: #fff;
        cursor: pointer;
        text-decoration: underline;
    }
`