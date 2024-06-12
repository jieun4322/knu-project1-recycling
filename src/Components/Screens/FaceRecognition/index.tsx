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
  deviceId: localStorage.getItem("faceCameraId"),
  // facingMode: "user",
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

  // const onchange = (event: any) => {
  //   myRecognition
  //     .face(event.target.files[0])
  //     .then(() => navigate("/recognition-complete"));
  // };

  useEffect(() => {
    // 이거 잠깐 주석
    if (face.data.status === apiStatuses.idle)
      setTimeout(() => capture(), 1000);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [face.data.status]);

  return (
    <BackgroundImage>
      <Header>{/* <input onChange={onchange} type="file" /> */}</Header>
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
              videoConstraints={videoConstraints as any}
            />
          </WebCamContainer>
        </StyledWhiteCard>
      </FlexContainer>
    </BackgroundImage>
  );
};

export default frScreen;
