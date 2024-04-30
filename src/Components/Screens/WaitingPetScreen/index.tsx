import styled from "@emotion/styled"
import { useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom"
import {useSnapshot} from "valtio"

import {setResultState, userInfoProxy, additionalDataProxy, resultInfoProxy} from "@/store"
import PetApi from "@/api/Pet";
import PointApi from "@/api/Point";
import { apiStatuses } from "@/constants";


// 컴포넌트 
import Header from "@/Components/Common/Header"
import WhiteCard from "@/Components/Common/WhiteCard"
import Button from "@/Components/Common/Button"
import BackgroundImage from "@/Components/Common/BackgroundImage"
import FlexContainer from "@/Components/Common/FlexContainer"
import Spinner from "@/Components/Common/Spinner";
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
    .left{

    }
    .right{

    }
`;

const WaitingScreen = () => {
    const user:any = useSnapshot(userInfoProxy);
    const additional:any = useSnapshot(additionalDataProxy);
    const result:any = useSnapshot(resultInfoProxy);

    const petApi = new PetApi;
    const pointApi = new PointApi;

    const navigate = useNavigate();

    const callComplete = useRef(false);

    const callApi = () => {
        petApi.injectCheck()
    }

    const petInjectionComplete = () => {
        pointApi.getAll().then(() => {
            setResultState({
                api: {
                    status: apiStatuses.idle
                }
            })
            navigate("/result")
        });
    }

    const completeOnClick = () => {
        if(result.api.status !== apiStatuses.idle) callComplete.current = true;
        else petInjectionComplete();
    };
    
    useEffect(() => {
        callApi(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [additional.petCount]);

    
    return <BackgroundImage>
        <Header></Header>
        <ContentContainer>

            <StyledTop>
                <StyledWhiteCard><TopInfo>{user.name}님 반가워요</TopInfo></StyledWhiteCard>
            </StyledTop>

            <StyledWhiteCard>
                <StyledFlexContainer>
                <PutPetText>페트병을 투입해 주세요</PutPetText>
                <SubMessage>30초 동안 투입하지 않으면 다음화면으로 넘어갑니다.</SubMessage>
                <Line></Line>
                </StyledFlexContainer>
                <ViewContainer className="left">투입한 페트</ViewContainer>
                <ViewContainer className="right">Point</ViewContainer>
                <ViewContainer className="left">{additional.petCount}</ViewContainer>
                <ViewContainer className="right">{additional.point}</ViewContainer>
            </StyledWhiteCard>
            

            <StyledFooter>
            {additional.petCount > 0 ? <Button onClick={completeOnClick} disabled={result.api.status !== apiStatuses.idle}>{result.api.status === apiStatuses.pending ? <Spinner /> :  "투입 종료하기"}</Button> : null}
            </StyledFooter>
            
        </ContentContainer>
    </BackgroundImage>
}

export default WaitingScreen;