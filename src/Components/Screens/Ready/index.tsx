import styled from "styled-components"

// compoennts
import Header from "@/Components/Common/Header"
import WhiteCard from "@/Components/Common/WhiteCard"
import FlexContainer from "@/Components/Common/FlexContainer"
import BackButton from "@/Components/Common/BackButton"


const Container = styled.main`
    padding: 0 5px;
    background-color: blue;
`;


const ReadyScreen = () => {
    return <Container>
        <Header></Header>
        <FlexContainer>
            <WhiteCard>hello world</WhiteCard>
            <WhiteCard>hello world</WhiteCard>
            <WhiteCard>hello world</WhiteCard>
            <WhiteCard>hello world</WhiteCard>
        </FlexContainer>
        
        <footer>
            <BackButton>돌아가기</BackButton>
        </footer>
    </Container>
}

export default ReadyScreen