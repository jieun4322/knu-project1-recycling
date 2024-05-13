import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import Webcam from "react-webcam";

import { pointProxy, userProxy, bottleProxy } from "@/store";
import PointApi from "@/api/Point";
import { apiStatuses } from "@/constants";

// 컴포넌트
import Header from "@/Components/Common/Header";
import WhiteCard from "@/Components/Common/WhiteCard";
import Button from "@/Components/Common/Button";
import BackgroundImage from "@/Components/Common/BackgroundImage";
import FlexContainer from "@/Components/Common/FlexContainer";
import Spinner from "@/Components/Common/Spinner";
import Recognition from "@/api/Recognition";
import { base64ToFile } from "@/utils";
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
  overflow: hidden;
`;
const TopInfo = styled.div`
  display: block;
  position: relative;
  font-size: 45px;
  left: 5%;
  top: 25%;
  font-weight: 500;
`;
const StyledFlexContainer = styled(FlexContainer)`
  position: relative;
  //flex-grow: 2;
`;
const PutPetText = styled.div`
  position: relative;
  left: 5%;
  font-size: 48px;
  font-weight: 500;
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
  .left {
  }
  .right {
  }
`;

const WebCamContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  visibility: hidden;
  & video {
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
  }
`;

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

const WaitingScreen = () => {
  //const navigate = useNavigate();
  const bottle = useSnapshot(bottleProxy);
  const user = useSnapshot(userProxy);
  const point = useSnapshot(pointProxy);
  const { setState: setBottle } = bottleProxy;
  const { setState: setPoint } = pointProxy;

  const webcamRef: any = useRef(null);

  const myRecognition = new Recognition();

  const completeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const capture = () => {
    console.log("capture");
    const imageSrc = webcamRef.current!.getScreenshot();
    const imgFile = base64ToFile(imageSrc, "recognition.png");
    if (!imgFile) {
      setTimeout(() => {
        capture();
      }, 1000);
      return;
    }
    myRecognition
      .bottle(imgFile)
      .then(() => {})
      .catch(() => {
        setTimeout(() => {
          setBottle({
            status: apiStatuses.idle,
          });
        }, 1000);
      });
  };

  useEffect(() => {
    if (bottle.data.status === apiStatuses.idle) capture();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bottle.data.status]);

  // const onchange = (event: any) => {
  //   console.log(event.target.files[0]);
  //   myRecognition.bottle(event.target.files[0]);
  // };

  return (
    <BackgroundImage>
      <Header></Header>
      <ContentContainer>
        <StyledTop>
          <StyledWhiteCard>
            <TopInfo>{user.data.name}님 반가워요</TopInfo>
          </StyledWhiteCard>
        </StyledTop>
        <StyledWhiteCard>
          <StyledFlexContainer>
            <PutPetText>페트병을 투입해 주세요</PutPetText>
            <SubMessage>
              30초 동안 투입하지 않으면 다음화면으로 넘어갑니다.
            </SubMessage>
            <Line></Line>
          </StyledFlexContainer>
          <ViewContainer className="left">투입한 페트</ViewContainer>
          <ViewContainer className="right">Point</ViewContainer>
          <ViewContainer className="left">
            {point.data.additionalPoint}
          </ViewContainer>
          <ViewContainer className="right">
            {point.data.additionalPoint}
          </ViewContainer>
        </StyledWhiteCard>
        <StyledFooter>
          {point.data.additionalPoint > 0 ? (
            <Button
              onClick={completeOnClick}
              disabled={point.data.status !== apiStatuses.idle}
            >
              {point.data.status === apiStatuses.pending ? (
                <Spinner />
              ) : (
                "투입 종료하기"
              )}
            </Button>
          ) : null}
        </StyledFooter>
      </ContentContainer>
      <WebCamContainer>
        <Webcam
          audio={false}
          height={"0"}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={"0"}
          videoConstraints={videoConstraints}
        />
      </WebCamContainer>
      {/* <input type="file" onChange={onchange} style={{ position: "fixed" }} /> */}
    </BackgroundImage>
  );
};

export default WaitingScreen;
