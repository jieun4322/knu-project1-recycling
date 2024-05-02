import styled from "styled-components"
import adImage from "@/assets/Images/ad-screen-image1.jpg"
import { Link } from "react-router-dom";
// components
import Header from "@/Components/Common/Header"

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 50px);
    & img {
        width: 100%;
        height: 100%;
    }
`

const AdScreen = () => {

    return <>
        <Header></Header>    
        <Link to={`/ready`}>
            <Container>
                <img src={adImage} />
            </Container>
        </Link>
    </>
}


export default AdScreen;