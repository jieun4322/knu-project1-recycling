import styled from "styled-components"

const Container = styled.nav`
    position: relative;
    width: 100%;
    height: 50px;
`
const today = new Date().toISOString().substring(0,10);

// const StyledToday = styled(today)`
//     font-size : 40px;
    
// `;

const Header = () => {
    return <Container>{today}</Container>
}

export default Header;