import styled from "styled-components";

export const SelectWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    position: relative;
    z-index: 1;

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

export const FilterSelect = styled.div`
        position: relative;
        background-color: #fff;
        border-radius: 4px;
        padding: 4px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        width: 80px;

        font-weight: 600;
        font-size: 14px;
        color: #000;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        :hover {
            background-color: #EFEFEF;
        }
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