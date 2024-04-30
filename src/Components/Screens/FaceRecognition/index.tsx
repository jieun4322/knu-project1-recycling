/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { setAdditionalState, setResultState } from "@/store"

//components
import Header from "@/Components/Common/Header"
import WhiteCard from "@/Components/Common/WhiteCard"
import BackgroundImage from "@/Components/Common/BackgroundImage"
import FlexContainer from "@/Components/Common/FlexContainer"
import { apiStatuses } from "@/constants"

const StyledWhiteCard = styled(WhiteCard)`
    position: relative;
    overflow: hidden; 
    justify-content: center;
    flex-grow: 1;
    margin: 15% 2% 30% 2%;
`;

const FrScreenInfo = styled.h3`
    display: block;
    top: 20%;
    position: absolute;
    font-size : 50px;
    font-weight: bold;
    text-align: center;
    padding: 10%;
`;

//폭죽 애니메이션
//https://alvaromontoro.com/blog/68002/creating-a-firework-effect-with-css

//체크박스 애니메이션
//https://bbbootstrap.com/snippets/animated-checkmark-50934051

const frScreen = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setAdditionalState({
                point: 0,
                petCount: 0,
                api: {
                    status: apiStatuses.idle
                }
            });
            setResultState({
                api: {
                    status: apiStatuses.idle
                }
            })
            navigate("/waiting")
        }, 3000)
    }, [navigate]);

    return <BackgroundImage>
        <Header></Header>
        <FlexContainer>
            <StyledWhiteCard>
                <FrScreenInfo>앞쪽 카메라를 바라 보세요</FrScreenInfo>
            </StyledWhiteCard>
        </FlexContainer>
    </BackgroundImage>
}

export default frScreen;