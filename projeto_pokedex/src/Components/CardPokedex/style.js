import styled from "styled-components";

export const ContainerPokemon = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
    padding: 10%; 
    background-color: #CCE5FF;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5%;
    border: 2px solid black;   

    h3{
        text-align: center;
        color: gray;
    }

    img {
        width: 80px;
        height: 80px;
        margin-left: auto;
        margin-right: auto; 
        padding: 25%; 
    }
`

export const Btn = styled.section`
    display: flex;
    gap: 20px;

    button {
        width: 100px;
        height: 40px;
        background-color:#F5F5F5;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        box-shadow: 1px 2px 2px 2px #696969;
    }

    button:hover{
        background-color: #FF9933;
        border: none;
        color: white;
        cursor: pointer;
        transition: 0.2;
    }

    button:active{
        box-shadow: 2px 2px 5px gray;
    }
`