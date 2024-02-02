import styled from "styled-components";

export const About = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30%;
    margin-bottom: 5%;

    h2 {
        font-family: 'Oswald', sans-serif;
        color: #fff;
        font-size: 30px;
    }
    `

    export const Text = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -2%;

    p {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        text-indent: 60px;
    }

    `

    export const Img = styled.div`
        display: flex;
        justify-content: right;
        margin-top: 4%;
        margin-right: 25%;
        margin-bottom: 5%;

        img {
            width: 250px;
            transform: rotate(10deg)
        }
    `

    export const Img2 = styled.div`
        display: flex;
        justify-content: left;
        margin-top: -10%;
        margin-left: 20%;
        margin-bottom: 5%;

        img {
            width: 250px;
            transform: rotate(-10deg)
        }
    `

    export const Btn = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 2%;

        .button {
            cursor: pointer;
            border: none;
            font-family: 'Roboto', sans-serif; 
            background-color: #f368e0 ;
            width: 100px;
            height: 30px;
            border-radius: 20px;
        }
    `