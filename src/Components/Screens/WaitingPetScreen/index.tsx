import styled from "@emotion/styled"

// compoennts
import Header from "@/Components/Common/Header"
import WhiteCard from "@/Components/Common/WhiteCard"
import BackButton from "@/Components/Common/BackButton"
import BackgroundImage from "@/Components/Common/BackgroundImage"
import FlexContainer from "@/Components/Common/FlexContainer"
//import ArrowImage from "@/assets/Images/Common/arrow.png"


const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1; 
    gap: 20px;
`;

const StyledTop = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1; 
    margin-top: 10%;
`;

const StyledFooter = styled.footer`
    padding: 0 0 30px 0;
    height: 100px;
    box-sizing: border-box;
`;
const StyledWhiteCard = styled(WhiteCard)`
    position: relative;
    flex-grow: 10;
`;
const TopInfo = styled.div`
    display: block;
    position: relative;
    font-size: 45px;
    left: 5%;
    top: 25%;
    font-weight: 700;
`;
const StyledFlexContainer = styled(FlexContainer)`
    position: relative;
    //flex-grow: 2;
`;
const PutPetText = styled.div`
    position: relative;
    left: 5%;
    font-size: 48px;
    font-weight: 700;
    margin-top: 5%;
    width: 100%;
    height: 50%;
`;
const SubMessage = styled.div`
    position: relative;
    left: 5%;
    font-size: 25px;
    font-weight: 500;
`;
const Line = styled.hr`
    color: rgba(0, 0, 0);
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;
const ViewContainer = styled.div`
    display: inline-block;
    flex-direction: row;
    font-size: 48px;
    font-weight: 500;
    margin-top: 10%;
    width: 50%;
    text-align: center;
    .left{

    }
    .right{

    }
`;
const UserName: string = "아무개";
const PetCount: number = 1;

const WaitingScreen = () => {
    return <BackgroundImage>
        <Header></Header>
        <ContentContainer>

            <StyledTop>
                <StyledWhiteCard><TopInfo>{UserName}님 반가워요</TopInfo></StyledWhiteCard>
            </StyledTop>

            <StyledWhiteCard>
                <StyledFlexContainer>
                <PutPetText>페트병을 투입해 주세요</PutPetText>
                <SubMessage>30초 동안 투입하지 않으면 다음화면으로 넘어갑니다.</SubMessage>
                <Line></Line>
                </StyledFlexContainer>
                <ViewContainer className="left">투입한 페트</ViewContainer>
                <ViewContainer className="right">Point</ViewContainer>
                <ViewContainer className="left">{PetCount}</ViewContainer>
                <ViewContainer className="right">{PetCount*10}</ViewContainer>
            </StyledWhiteCard>
            

            <StyledFooter>
                <BackButton>투입 종료하기</BackButton>
            </StyledFooter>
            
        </ContentContainer>
    </BackgroundImage>
}

export default WaitingScreen;