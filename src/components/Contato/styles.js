import styled from "styled-components";


export const Contents = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
    margin-bottom: 5%;
`

export const Titulo = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        font-family: 'Oswald', sans-serif;
        color: #fff;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 350px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.30);

    @media(max-width: 1080px) {
        margin: 25px 100px;
    }

    h3 {
        font-family: 'Oswald', sans-serif;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    input {
        margin: 0 10px;
        width: 330px;
        padding: 5px;
        margin-top: 5px;
        border: none;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        outline: none;

        &:focus {
            border: 2px solid #555;
            border-radius: 5px;
        }
    }

    textarea {
        margin: 0 10px;
        width: 330px;
        height: 80px;
        padding: 5px;
        margin-top: 5px;
        resize: none;
        border: none;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        outline: none;

        &:focus {
            border: 2px solid #555;
            border-radius: 5px;
        }
    }
    
    button {
            margin: 5px 5px; 
            cursor: pointer;
            border: none;
            font-family: 'Roboto', sans-serif; 
            background-color: #f368e0 ;
            width: 100px;
            height: 30px;
            border-radius: 20px;
            color: #fff;

             &:hover {
                background-color: #ff9ff3;
            }
    }
`


export const Links = styled.div`
    display: flex;
    margin: 0 auto;

    li {
        margin-left: 10px;
        margin-bottom: 10px;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
        font-family: 'Roboto', sans-serif;

    }

    i {
        font-size: 30px;
    }
`
export const Container2 = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
width: 350px;
height: 120px;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.30);

@media(max-width: 1080px) {
    margin: 25px 100px;
}

h3 {
    font-family: 'Oswald', sans-serif;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
}

`