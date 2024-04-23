import styled from "styled-components";

import { Link } from "react-router-dom";

const Button = styled(Link)`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: var(--color-primary);
    border-radius: 20px;
    color: white;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    position: relative;
`;

// text-align: center;
// line-height: 50px;

export default Button;