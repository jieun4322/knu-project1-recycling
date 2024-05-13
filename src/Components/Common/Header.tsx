import styled from "styled-components"

const Container = styled.nav`
    position: relative;
    width: 100%;
    height: 50px;
    background-color: none;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;
const DateInfo = styled.div`
    font-size: 25px;
    font-weight: 500;
    padding: 0 0 0 10px;
`;
function yyyymmdd(dateIn: Date) {
    const yyyy = dateIn.getFullYear()
    const mm = dateIn.getMonth() + 1 // getMonth() is zero-based
    const dd = dateIn.getDate()
    return String(yyyy + '년 ' + mm + '월 ' + dd + '일')
}

//const today = new Date().toISOString().substring(0,10);

// const StyledToday = styled(today)`
//     font-size : 40px;
// `;
const date = new Date();

const Header = () => {
    return <>
        <Container>
        <DateInfo>{yyyymmdd(date)}</DateInfo>
        </Container>
    </>
}

export default Header;