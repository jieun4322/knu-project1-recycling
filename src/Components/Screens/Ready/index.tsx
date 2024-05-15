import styled from "@emotion/styled";
import { useSnapshot } from "valtio";
import { containerCapacityProxy } from "@/store";

import bottleImage from "@/assets/Images/waterbottle1.png";

// compoennts
import Header from "@/Components/Common/Header";
import WhiteCard from "@/Components/Common/WhiteCard";
import FlexContainer from "@/Components/Common/FlexContainer";
import Button from "@/Components/Common/Button";
import BackgroundImage from "@/Components/Common/BackgroundImage";

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
  font-size: 45px;
  padding: 20px 0 0 10px;
  font-weight: 500;
`;

interface WaveContainerProps {
  petPercentage: number;
}

const WaveContainer = styled.div<WaveContainerProps>`
  position: relative;
  width: 100%;
  height: 200%;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  transform: translateY(${({ petPercentage }) => -petPercentage / 2}%);
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
  background-color: #a5e5db;
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
    opacity: 0.5;
    border-radius: 47%;
    animation-duration: 10s;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
      transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
      transform: translate(-50%, 0%) rotateZ(360deg);
    }
  }
`;

const WaveBackground = styled.div`
  background-color: #a5e5db;
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
  top: 15%;
  position: absolute;
  font-size: 35px;
  width: 100%;
  left: 0;
  font-weight: 500;
`;

const Percentage = styled.div`
  position: absolute;
  font-size: 50px;
  font-weight: 500;
  width: 100%;
  left: 0;
  bottom: 10%;
`;

const BottomInfo = styled.div`
  position: absolute;
  width: 100%;
  //height: 80%;
  flex-grow: 2;
  font-weight: 500;
  font-size: 40px;
  text-align: left;
  bottom: 10%;
  padding: 0 0 0 30px;
`;

const ImageBox1 = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  background-image: url(${bottleImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

// const PetNum = styled.div`
//     position: absolute;
//     font-size: 50px;
//     font-weight: 550;
//     width: 100%;
// `

const ReadyScreen = () => {
  const { data } = useSnapshot(containerCapacityProxy);

  const percentage: number = Math.floor(
    (data.currentCapacity / data.total) * 100
  );
  return (
    <BackgroundImage>
      <Header></Header>
      <ContentContainer>
        <FlexContainer>
          <Title>페트(PET) 수거기</Title>
          <StyledWhiteCard>
            <PetInfoContainer>
              <PetInfoTitle>수거 가능 용량</PetInfoTitle>
              <Percentage>{percentage.toString()}%</Percentage>
            </PetInfoContainer>
            <WaveContainer petPercentage={percentage}>
              <WhiteBackground></WhiteBackground>
              <Wave></Wave>
              <WaveBackground></WaveBackground>
            </WaveContainer>
          </StyledWhiteCard>
          <StyledWhiteCard>
            <ImageBox1></ImageBox1>
            <BottomInfo>1일 최대 투입개수는 개입니다</BottomInfo>
          </StyledWhiteCard>
        </FlexContainer>

        <StyledFooter>
          <Button to="/face-recognition">시작하기</Button>
        </StyledFooter>
      </ContentContainer>
    </BackgroundImage>
  );
};

export default ReadyScreen;
