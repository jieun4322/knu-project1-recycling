import styled from "@emotion/styled"
import {useSnapshot} from "valtio"

import {userInfoProxy, additionalDataProxy, resultInfoProxy} from "@/store"

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
    font-weight: 500;
    
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


const ResultScreen = () => {
    const user:any = useSnapshot(userInfoProxy);
    const additional:any = useSnapshot(additionalDataProxy);
    const result:any = useSnapshot(resultInfoProxy);


    return <BackgroundImage>
        <Header></Header>

        <ContentContainer>
            <FlexContainer>
                <StyledWhiteCard className="top">
                    <TopInfo>{user.name}님 반가워요</TopInfo>
                </StyledWhiteCard>

                <StyledWhiteCard className="mid">
                    <MidPointInfo>
                        <div>총 {additional.petCount}개의 페트병을 투여했어요</div>
                        Total Point : {result.point}P (+{additional.point})
                    </MidPointInfo>
                </StyledWhiteCard>

                <StyledWhiteCard className="ranking">
                    <RankingInfo className="personal">개인 랭킹<div></div></RankingInfo>
                    <RankingInfo className="region">지역 랭킹</RankingInfo>
                    <RankingInfo className="personal">{result.personalRanking}위</RankingInfo>
                    <RankingInfo className="region">{result.regionRanking}위</RankingInfo>
                </StyledWhiteCard>
            </FlexContainer>

            <StyledFooter>
                <BackButton>돌아가기</BackButton>
            </StyledFooter>
        </ContentContainer>
    </BackgroundImage>
}

export default ResultScreen;