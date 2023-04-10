import styled from "styled-components"

export const EmptyWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

.emptyIcon {
    font-size: 70px;
    color: #000;
}

.addIcon {
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #ddd;
        transform: scale(1.1);
    }
}
`