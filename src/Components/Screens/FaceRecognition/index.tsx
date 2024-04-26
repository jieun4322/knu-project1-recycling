import styled from "@emotion/styled"

//components
import Header from "@/Components/Common/Header"
import WhiteCard from "@/Components/Common/WhiteCard"
import BackgroundImage from "@/Components/Common/BackgroundImage"
import FlexContainer from "@/Components/Common/FlexContainer"

const StyledWhiteCard = styled(WhiteCard)`
    position: relative;
    overflow: hidden; 
    justify-content: center;
    flex-grow: 1;
    margin: 15% 2% 30% 2%;
`;

const FrScreenInfo = styled.h3`
    display: block;
    top: 20%;
    position: absolute;
    font-size : 50px;
    font-weight: bold;
    text-align: center;
    padding: 10%;
`;

const frScreen = () => {
    return <BackgroundImage>
        <Header></Header>
        <FlexContainer>
            <StyledWhiteCard>
                <FrScreenInfo>앞쪽 카메라를 바라 보세요</FrScreenInfo>
            </StyledWhiteCard>
        </FlexContainer>
    </BackgroundImage>
}

export default frScreen;