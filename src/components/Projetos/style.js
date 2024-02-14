import styled from "styled-components";

export const Titulo = styled.h1`
    display: flex;
    justify-content: center;

    h1 {
        font-family: 'Oswald', sans-serif;
        color: #fff;
    }
`

export const Projeto = styled.div`
    display: grid;
    grid-template-columns: 550px 550px;
    justify-content: space-evenly;
    margin-bottom: 5%;

    @media(max-width: 1080px) {
        display: block;
    }

`

export const text = styled.div`
    text-align: center;

h2 {
    margin: 10px auto;
    width: 150px;
    font-family: 'Oswald', sans-serif;
}

p {
    text-align: left;
    margin-top: 15px;
    font-family: 'Roboto', sans-serif;

}
    @media(max-width: 1080px) {
        margin: 0 auto;
        width: 550px;
    }

    @media(max-width: 640px) {
        text-align: center;
    }
` 

export const Proj1 = styled.div`
    margin-top: 5%;
    margin-bottom: 10px;

    img {
        margin-top: 15px;
        margin-left: 20px;
        width: 500px;
        border: 2px solid #fff;
        
    }
        @media(max-width: 1080px) {
            text-align: center;
        }

        @media(max-width: 640px) {
            img {
                width: 350px;
                margin-left: 2px;
            }
        }

    `

    export const Button = styled.button`
        background-color: #f368e0;
        border: none;
        width: 150px;
        height: 20px;
        border-radius: 30px;
        margin-top: 5px;
        
        a {
            text-decoration: none;
            color: #000;
            font-family: 'Roboto', sans-serif;
        
        }
    `

    export const Logos = styled.div`
        font-size: 30px;
        color: #fff;
        margin-top: 12px;
         
        i {
            padding-left: 5px;
         }
    `
    