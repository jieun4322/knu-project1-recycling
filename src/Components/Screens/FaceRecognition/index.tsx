/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { faceProxy } from "@/store";
import Webcam from "react-webcam";

//components
import Header from "@/Components/Common/Header";
import WhiteCard from "@/Components/Common/WhiteCard";
import BackgroundImage from "@/Components/Common/BackgroundImage";
import FlexContainer from "@/Components/Common/FlexContainer";
import { apiStatuses } from "@/constants";
import Recognition from "@/api/Recognition";
import { useSnapshot } from "valtio";
import { base64ToFile } from "@/utils";

const StyledWhiteCard = styled(WhiteCard)`
  position: relative;
  overflow: hidden;
  justify-content: center;
  flex-grow: 1;
  margin: 10% 2% 10% 2%;
`;

const FrScreenInfo = styled.h3`
  display: block;
  top: 10%;
  left: 0;
  width: 100%;
  position: absolute;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

//폭죽 애니메이션
//https://alvaromontoro.com/blog/68002/creating-a-firework-effect-with-css
//https://jsfiddle.net/elin/7m3bL/

//체크박스 애니메이션
//https://bbbootstrap.com/snippets/animated-checkmark-50934051
/*
1. 웹캠 띄우기
2. 웹캠 width, height 지정
3. Canvas로 바꾸기
4. 얼굴 가이드라인 그리기
5. 웹캠 얼굴 인식 -> 캡쳐 후 image저장
6. image 서버로 전송
*/

const WebCamContainer = styled.div`
  position: absolute;
  top: calc(10% + 100px);
  left: 50px;
  bottom: 50px;
  right: 50px;
`;

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

const frScreen = () => {
  const navigate = useNavigate();
  const face = useSnapshot(faceProxy);

  const myRecognition = new Recognition();
  const { setState } = faceProxy;

  const webcamRef: any = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current!.getScreenshot();
    myRecognition
      .face(base64ToFile(imageSrc, "recognition.png"))
      .then(() => navigate("/recognition-complete"))
      .catch(() => {
        setTimeout(() => {
          setState({
            status: apiStatuses.idle,
          });
        }, 1000);
      });
  };

  useEffect(() => {
    if (face.data.status === apiStatuses.idle) capture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [face.data.status]);

  return (
    <BackgroundImage>
      <Header></Header>
      <FlexContainer>
        <StyledWhiteCard>
          <FrScreenInfo>앞쪽 카메라를 바라 보세요</FrScreenInfo>
          <WebCamContainer>
            <Webcam
              audio={false}
              height={"100%"}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={"100%"}
              videoConstraints={videoConstraints}
            />
          </WebCamContainer>
        </StyledWhiteCard>
      </FlexContainer>
    </BackgroundImage>
  );
};

export default frScreen;
