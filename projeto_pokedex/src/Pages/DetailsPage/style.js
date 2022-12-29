import styled from "styled-components";

export const ContainerDetails = styled.main`
    display: grid;
    grid-template-columns: 20% 20% 1fr;
    margin: 2%;
    padding: 2%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 5px;
`
export const Img = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30%;
    
    img {
        width: 100px;
        height: 100px;
    }
`
export const Statics = styled.section`
    width: 100%;
    padding: 5% 10%;
    box-shadow: 1px 2px 2px 2px #696969;
    border-radius: 5px;

    p {
        font-size: 25px;
        margin-bottom: 2%;
    }

    h2 {
        font-size: 35px;
        margin-bottom: 5%;
    }
`

export const Type = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    padding: 2% 0;
    box-shadow: 1px 2px 2px 2px #696969;
    border-radius: 5px;
    margin-left: 12%;

    p {
        font-size: 25px;
    }

    h2 {
        font-size: 35px;
    }
`

export const Moves = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    padding: 2% 0;
    box-shadow: 1px 2px 2px 2px #696969;
    border-radius: 5px;
    margin-top: 5%;
    margin-left: 12%;

    p {
        font-size: 25px;
    }

    h2 {
        font-size: 35px;
    }
`