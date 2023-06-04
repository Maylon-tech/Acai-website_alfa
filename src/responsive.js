import { css } from "styled-components"

export const mobile = (props) => {
    return css`
        @media only screen and (max-width:380px) {
           ${props}
        }
    `
}


export const table = (props) => {
    return css`
        @media only screen and (max-width:520px) {
            display: none;
        }
    `
}


export const ipadAir = (props) => {
    return css`
        @media only screen and (max-width:768px) {
            display: none;
        }
    `
}


export const laptop = (props) => {
    return css`
        @media only screen and (max-width:1080px) {
            display: none;
        }
    `
}