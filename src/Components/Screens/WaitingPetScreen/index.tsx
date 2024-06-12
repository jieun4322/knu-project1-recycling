import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import Webcam from "react-webcam";

import { pointProxy, userProxy, bottleProxy } from "@/store";
import { apiStatuses } from "@/constants";

// 컴포넌트
import Header from "@/Components/Common/Header";
import WhiteCard from "@/Components/Common/WhiteCard";
import Button from "@/Components/Common/Button";
import BackgroundImage from "@/Components/Common/BackgroundImage";
import FlexContainer from "@/Components/Common/FlexContainer";
//import Spinner from "@/Components/Common/Spinner";
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
  deviceId: localStorage.getItem("bottleCameraId"),
  // facingMode: "user",
};

const WaitingScreen = () => {
  const navigate = useNavigate();
  const { data: bottle } = useSnapshot(bottleProxy);
  const { data: user } = useSnapshot(userProxy);
  const { data: point } = useSnapshot(pointProxy);
  const { setState: setBottle } = bottleProxy;

  const lastPoint = useRef(0);
  const timeoutInstance: any = useRef(null);
  const [timeCount, setTimeCount] = useState(30);

  const webcamRef: any = useRef(null);

  const myRecognition = new Recognition();

  const completeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    navigate("/result");
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
      .then(() => {
        setBottle({
          status: apiStatuses.idle,
        });
      })
      .catch(() => {
        setBottle({
          status: apiStatuses.idle,
        });
      });
  };

  useEffect(() => {
    // 이거 잠깐 주석
    if (bottle.status === apiStatuses.idle) setTimeout(() => capture(), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bottle.status]);
  /*
  const onChange = (event: any) => {
    myRecognition.bottle(event.target.files[0]);
  };
  */
  useEffect(() => {
    clearTimeout(timeoutInstance.current);
    timeoutInstance.current = setTimeout(() => {
      setTimeCount((state) => state - 1);
      if (timeCount > 0) return;
      if (point.additionalPoint > 0) navigate("/result");
      else navigate("/ready");
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeCount]);

  useEffect(() => {
    if (lastPoint.current >= point.additionalPoint) return;
    setTimeCount(30);
    lastPoint.current = point.additionalPoint;
  }, [point.additionalPoint]);

  return (
    <BackgroundImage>
      <Header>{/*<input onChange={onChange} type="file"/>*/}</Header>
      <ContentContainer>
        <StyledTop>
          <StyledWhiteCard>
            <TopInfo>{user.name}님 반가워요</TopInfo>
          </StyledWhiteCard>
        </StyledTop>
        <StyledWhiteCard>
          <StyledFlexContainer>
            <PutPetText>페트병을 투입해 주세요</PutPetText>
            <SubMessage>
              {timeCount}초 동안 투입하지 않으면 다음화면으로 넘어갑니다.
            </SubMessage>
            <Line></Line>
          </StyledFlexContainer>
          <ViewContainer className="left">투입한 페트</ViewContainer>
          <ViewContainer className="right">Point</ViewContainer>
          <ViewContainer className="left">
            {point.additionalPoint / 10}
          </ViewContainer>
          <ViewContainer className="right">
            {point.additionalPoint}
          </ViewContainer>
        </StyledWhiteCard>
        <StyledFooter>
          {point.additionalPoint > 0 ? (
            <Button onClick={completeOnClick}>투입 종료하기</Button>
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
          videoConstraints={videoConstraints as any}
        />
      </WebCamContainer>
    </BackgroundImage>
  );
};

export default WaitingScreen;
