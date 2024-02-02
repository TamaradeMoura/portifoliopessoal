import { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }

    body {
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        background-repeat: repeat;
        
    }
`

export default EstiloGlobal