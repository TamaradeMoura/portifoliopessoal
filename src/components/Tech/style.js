import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid #fff;
    margin: 2% auto 10%;
    width: 950px;
    max-width: 100%;
`

export const Titulo = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        font-family: 'Oswald', sans-serif;
        color: #fff;
        font-size: 30px;
    }
`

export const Languages = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    
    i {
        color: #fff;
        font-size: 50px;
        letter-spacing: 10px;
    }

    @media(max-width: 640px) {
        display: grid;
        grid-template-columns: 200px 200px;  
        justify-items: center;
        row-gap: 5px;
    }
`