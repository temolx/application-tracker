import styled from "styled-components";

export const TableComponent = styled.div`
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    .activeRow {
        background-color: #E4EDEC;
        cursor: pointer;

        h4, .icon {
            color: #000;
        }
    }
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

export const InputContainer = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #C2C2C2;

        .table-btns {
            display: flex;
        }

        h4 {
            font-weight: 500;
            text-align: left;
            display: flex;
            transition: 0.3s ease-in-out;
        }

        input {
            width: 110px;
            border-radius: 5px;
            border: 1px solid black;
            outline: 0.5px solid #005149;
            padding: 4px;
        }

        @keyframes incorrectAnim {
            0% {
                transform: translateX(-25px);
            }
        }

        .incorrect-btn {
            background: none;
            color: #FF3434;
            border: 1.5px solid #FF3434;
            transition: 0.3s ease-in-out;
            animation: incorrectAnim 0.3s ease;

            &:hover {
                color: #C92020;
                border: 1.5px solid #C92020;
            }
        }
`

export const EditDropdown = styled.div`
    position: absolute;
    top: 45px;
    left: 100px;
    width: 100%;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    padding: 0 15px;
    z-index: 999;
    box-shadow: 10px 10px 97px -10px rgba(0,0,0,0.20);
`
