import styled from "styled-components";

export const SidebarWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background-color: #005149;
    z-index: 999;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 50px;
    } 
`