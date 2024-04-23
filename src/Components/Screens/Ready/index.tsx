import styled from "@emotion/styled"

// compoennts
import Header from "@/Components/Common/Header"
import WhiteCard from "@/Components/Common/WhiteCard"
import FlexContainer from "@/Components/Common/FlexContainer"
import BackButton from "@/Components/Common/BackButton"
import BackgroundImage from "@/Components/Common/BackgroundImage"

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 20px;
`;

const StyledFooter = styled.footer`
    padding: 0 0 30px 0;
    height: 100px;
    box-sizing: border-box;
`;

const StyledWhiteCard = styled(WhiteCard)`
    position: relative;
    flex-grow: 1;
    overflow: hidden;
`;

const Title = styled.h3`
    display: block;
    position: relative;
    font-size: 48px;
    padding: 20px 0 0 0;
    font-weight: bold;
`;

interface WaveContainerProps {
    petPercentage: number
}

const WaveContainer = styled.div<WaveContainerProps>`
    position: relative;
    width: 100%;
    height: 200%;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    transform: translateY(${({petPercentage}) => (-petPercentage / 2) }%);
`;
const WhiteBackground = styled.div`
    background-color: white;
    flex-grow: 1;
    width: 100%;
`;

const Wave = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3b95bc;
    font-family: Roboto;
    overflow: hidden;
    z-index: 0;
    flex-grow: 1;

    &:before,
    &:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: #fff;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &:before {
        bottom: 15vh;
        border-radius: 45%;
        animation-duration: 10s;
    }

    &:after {
        bottom: 12vh;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }

    @keyframes rotate {
        0% {transform: translate(-50%, 0) rotateZ(0deg);}
        50% {transform: translate(-50%, -2%) rotateZ(180deg);}
        100% {transform: translate(-50%, 0%) rotateZ(360deg);}
    }
`;

const WaveBackground = styled.div`
    background-color: #3b95bc;
    flex-grow: 1;
    width: 100%;
    margin-top: -2px;
`;

const PetInfoContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    text-align: center;
`;

const PetInfoTitle = styled.h4`
    top: 8%;
    position: absolute;
    font-size: 40px;
    width: 100%;
    left: 0;
    font-weight: bold;
`;

const Percentage = styled.div`
    position: absolute;
    font-size: 64px;
    font-weight: bold;
    width: 100%;
    left: 0;
    bottom: 8%;
`


const ReadyScreen = () => {
    return <BackgroundImage>
        <Header></Header>
        <ContentContainer>
            <FlexContainer>
                <Title>페트(PET) 수거기</Title>
                <StyledWhiteCard>
                    <PetInfoContainer>
                        <PetInfoTitle>현재 수거 가능 용량</PetInfoTitle>
                        <Percentage>30%</Percentage>
                    </PetInfoContainer>
                    <WaveContainer petPercentage={30}>
                        <WhiteBackground></WhiteBackground>
                        <Wave></Wave>
                        <WaveBackground></WaveBackground>
                    </WaveContainer>
                </StyledWhiteCard>
                <StyledWhiteCard>
                    hello world
                </StyledWhiteCard>
            </FlexContainer>
            
            <StyledFooter>
                <BackButton>돌아가기</BackButton>
            </StyledFooter>
        </ContentContainer>
    </BackgroundImage>
}

export default ReadyScreen