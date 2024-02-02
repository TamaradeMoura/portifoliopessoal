
import styled from "styled-components"

export const HeroDiv = styled.div`
    display: block;
    jsutify-content: left;
    margin-left: 15%;
    margin-top: 5%;

    

    h1 {
        font-family: 'Oswald', sans-serif;
    }

    p {
        margin-left: 10px;
        margin-top: 10px;
        font-family: 'Roboto', sans-serif;

        .texto {
            position: relative;
            top: -29px;
            left: 80px;
            width: 200px;
        }
    }

    @media(max-width: 1080px) {
        margin-left: 20%;
    }
`

