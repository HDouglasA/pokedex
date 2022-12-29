import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #F8F8FF;
        font-family: cursive;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4vh 1vw;
        background-color: #0080FF;
        box-shadow: 1px 2px 2px 2px #696969;

        img{
            height: 6vh;
            cursor: pointer;
            transition: all 0.5s;
        }

        img:hover{
            -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            filter: drop-shadow(10px 5px 5px rgba(0,0,0,.5));
        }

        button {
            width: 110px;
            height: 40px;
            background-color: #F5F5F5;
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
    }
`