/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//components
import Header from "@/Components/Common/Header";
import WhiteCard from "@/Components/Common/WhiteCard";
import BackgroundImage from "@/Components/Common/BackgroundImage";
import FlexContainer from "@/Components/Common/FlexContainer";

const StyledWhiteCard = styled(WhiteCard)`
  position: relative;
  overflow: hidden;
  justify-content: center;
  flex-grow: 1;
  margin: 15% 2% 30% 2%;
`;

const AnimationContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;

  & .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  & .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }
  & .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
  }
`;

const frScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/waiting");
    }, 3000);
  }, [navigate]);

  return (
    <BackgroundImage>
      <Header></Header>
      <FlexContainer>
        <StyledWhiteCard>
          <AnimationContainer>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </AnimationContainer>
        </StyledWhiteCard>
      </FlexContainer>
    </BackgroundImage>
  );
};

export default frScreen;
