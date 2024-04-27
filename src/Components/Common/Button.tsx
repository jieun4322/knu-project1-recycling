import styled from "styled-components";

import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: var(--color-primary);
    border-radius: 20px;
    color: white;
    text-decoration: none;
    font-size: 38px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
`;

const StyledButton = styled.button`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: var(--color-primary);
    border-radius: 20px;
    color: white;
    text-decoration: none;
    font-size: 38px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
`;

// text-align: center;
// line-height: 50px;

const Button = (props: any) => {
    return props.to ? <LinkButton {...props}>{props.children}</LinkButton> : <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;