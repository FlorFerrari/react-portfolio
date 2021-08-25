import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: "Inter", sans-serif;
                background: #1b1b1b
            }
            button {
                font-weight: bold;
                font-size: 1.1rem;
                cursor: pointer;
                padding: 1rem 2rem;
                border: 3px solid #23d997;
                background:transparent;
                color: white;
                transition: all 0.5s ease;
                font-family: "Inter", sans-serif;
                &:hover{
                    background-color: #23d997;
                    color: white;
                }
                
            }
            h2 {
                font-weight: lighter;
                font-size: 4rem;
                font-family: "Inter", sans-serif;
                }
            h3 {
                color: white;
                }
            h4 {
                font-family: bold;
                
            }
            span {
                font-family: bold;
                color: #23d997;
            }
            a {
                font-size: 1.1rem;
            }
            p {
                padding: 3rem 0rem;
                color: #ccc;
                font-size: 1.4rem;
                line-height: 150%;
                }
            span {
                font-family: "Inter", sans-serif;
            }
`
export default GlobalStyle;