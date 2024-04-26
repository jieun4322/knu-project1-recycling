import styled from "@emotion/styled"

// compoennts
import Header from "@/Components/Common/Header"
import WhiteCard from "@/Components/Common/WhiteCard"
import FlexContainer from "@/Components/Common/FlexContainer"
import BackButton from "@/Components/Common/BackButton"
import BackgroundImage from "@/Components/Common/BackgroundImage"

const ContentContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    //justify-content: space-between; 
    gap: 20px;
`;
const StyledWhiteCard = styled(WhiteCard)`
    position: relative;
    overflow: hidden;
    &.top{
        flex-grow: 1;
    }
    &.mid{
        flex-grow: 1;
    }
    &.ranking{
        padding-top: 100px;
        flex-grow: 8;
    }
`;
const TopInfo = styled.div`
    position: relative;
    font-size: 45px;
    left: 5%;
    top: 30%;
    font-weight: 700;
    
`;
const MidPointInfo = styled.div`
    position: relative;
    font-size: 35px;
    left: 5%;
    top: 25%;
`;
const RankingInfo = styled.div`
    display: inline-block;
    flex-direction: row;
    justify-content: center;
    width: 50%;
    font-size: 50px;
    font-weight: 500;
    text-align: center;
    //padding-top: 20px;
    &.personal{
        
    } 
    &.region{

    }
`;
const StyledFooter = styled.footer`
    padding: 0 0 30px 0;
    height: 100px;
    box-sizing: border-box;
`;

//const UserInfo
const UserName: string = "아무개";
const PetCount: number = 1;
const TotalPoint: number = 2000;
const PersonalRanking: number = 2;
const RegionRanking: number = 1; 

const ResultScreen = () => {
    return <BackgroundImage>
        <Header></Header>

        <ContentContainer>
            <FlexContainer>
                <StyledWhiteCard className="top">
                    <TopInfo>{UserName}님 반가워요</TopInfo>
                </StyledWhiteCard>

                <StyledWhiteCard className="mid">
                    <MidPointInfo>
                        <div>총 {PetCount}개의 페트병을 투여했어요</div>
                        Total Point : {TotalPoint}P (+{PetCount*10})
                    </MidPointInfo>
                </StyledWhiteCard>

                <StyledWhiteCard className="ranking">
                    <RankingInfo className="personal">개인 랭킹<div></div></RankingInfo>
                    <RankingInfo className="region">지역 랭킹</RankingInfo>
                    <RankingInfo className="personal">{PersonalRanking}위</RankingInfo>
                    <RankingInfo className="region">{RegionRanking}위</RankingInfo>
                </StyledWhiteCard>
            </FlexContainer>

            <StyledFooter>
                <BackButton>투입 종료하기</BackButton>
            </StyledFooter>
        </ContentContainer>
    </BackgroundImage>
}

export default ResultScreen;