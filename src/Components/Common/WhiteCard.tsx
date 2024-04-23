import styled from "@emotion/styled"

const Container = styled.section`
    min-height: 50px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #fff;
`;


const WhiteCard = (props: any) => {

    return <Container className={props.className}>{props.children}</Container>
}


export default WhiteCard