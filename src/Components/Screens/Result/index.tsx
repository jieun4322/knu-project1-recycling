import styled from "@emotion/styled";
import { useSnapshot } from "valtio";
import { useEffect } from "react";
import Rank from "@/api/Rank";
import { userProxy, pointProxy, rankProxy } from "@/store";

// components
import Header from "@/Components/Common/Header";
import WhiteCard from "@/Components/Common/WhiteCard";
import FlexContainer from "@/Components/Common/FlexContainer";
import BackButton from "@/Components/Common/BackButton";
import BackgroundImage from "@/Components/Common/BackgroundImage";

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
  &.top {
    flex-grow: 1;
  }
  &.mid {
    flex-grow: 1;
  }
  &.ranking {
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
  &.personal {
  }
  &.region {
  }
`;
const StyledFooter = styled.footer`
  padding: 0 0 30px 0;
  height: 100px;
  box-sizing: border-box;
`;

const ResultScreen = () => {
  const { data: user } = useSnapshot(userProxy);
  const { data: point } = useSnapshot(pointProxy);
  const { data: rank } = useSnapshot(rankProxy);

  const { global: globalRank, region: regionRank, area: areaRank } = rank;

  const myRank = new Rank();

  useEffect(() => {
    myRank.getGlobalRanking();
    myRank.getAreaRanking();
    myRank.getRegionRanking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackgroundImage>
      <Header></Header>

      <ContentContainer>
        <FlexContainer>
          <StyledWhiteCard className="top">
            <TopInfo>{user.name}님 반가워요</TopInfo>
          </StyledWhiteCard>

          <StyledWhiteCard className="mid">
            <MidPointInfo>
              <div>총 {point.additionalPoint / 10}개의 페트병을 투여했어요</div>
              Total Point : {point.point}P (+{point.additionalPoint})
            </MidPointInfo>
          </StyledWhiteCard>

          <StyledWhiteCard className="ranking">
            <div style={{ fontSize: "36px" }}>
              <p>전국: {globalRank.rank}위</p>
              <p>시: {areaRank.rank}위</p>
              <p>구: {regionRank.rank}위</p>
            </div>
          </StyledWhiteCard>
        </FlexContainer>

        <StyledFooter>
          <BackButton>돌아가기</BackButton>
        </StyledFooter>
      </ContentContainer>
    </BackgroundImage>
  );
};

export default ResultScreen;
