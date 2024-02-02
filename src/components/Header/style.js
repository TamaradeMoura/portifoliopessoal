import styled from "styled-components";

export const Cabecalho = styled.header`
    margin-top: 80px;
`

export const Menu = styled.ul`
    display: flex;
    justify-content: right;
    margin-right: 150px;
    list-style: none;

    li {
        margin-left: 40px;
        cursor: pointer;
        font-family: 'Oswald', sans-serif;
        color: #fff;
    }

    li:hover {
        color: #f368e0;
    }
`