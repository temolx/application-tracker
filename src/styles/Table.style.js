import styled from "styled-components";

export const TableComponent = styled.div`
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

export const TableHeader = styled.th`
    border-left: 1px solid #DDDDDD;
    padding: 15px;
    background-color: #FCFAF9;
    color: #090909;
    text-align: left;
    

    &:first-of-type {
        border-left: none;
    }

    &:nth-child(2) {
        border-left: none;
    }
`

export const TableRow = styled.td`
    border-left: 1px solid #DDDDDD;
    border-top: 1px solid #DDDDDD;
    padding: 15px;
    position: relative;

    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #C2C2C2;

            h4 {
            font-weight: 500;
            text-align: left;
            display: flex;
            transition: 0.3s ease-in-out;
        }
    }

    &:first-of-type {
        border-left: none;
    }

    &:nth-child(2) {
        border-left: none;
    }
`

export const Row = styled.tr`
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #E4EDEC;
        cursor: pointer;

        h4, .icon {
            color: #000;
        }
    }
`