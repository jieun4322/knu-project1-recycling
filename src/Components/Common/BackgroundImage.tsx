import styled from "@emotion/styled";

import backgroundImage from "@/assets/Images/background.jpg"

const Container = styled.main`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100vh;
    box-sizing: border-box;
    background-color: black;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        z-index: 0;
        background-image: url("${backgroundImage}");
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
    }
`;

export default Container;