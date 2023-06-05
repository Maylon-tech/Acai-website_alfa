import styled from 'styled-components'

export const Container = styled.div`    
    /* max-width: 1200px;
    margin: 3rem auto; */
    padding-top: 3.5rem;
    position: relative;
    background: rgb(204,160,232);
    background: linear-gradient(79deg, rgba(204,160,232,1) 40%, rgba(221,125,167,0.927608543417367) 80%);
`

//  Container Padrado  para todos os Componentes.
export const DefaultContainer = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
`


export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
`

// Product Card

export const Content = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 220px;
    height: 300px;
    background-color: rgba(250, 250, 250, .9);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const Image = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;

`

export const Info = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    /* background-color: rgba(0,0,0,0.6); */
`

export const InfoTitle = styled.h1`
    color: #222;
    padding: .2rem 1rem;
    flex: 1;
    font-size: 1.1rem;
    font-weight: bold;
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
`

export const Icon = styled.div`
    display: flex;
    justify-content: space-between;
    color: #222;
    font-size: 1.2rem;
    flex: 1;
    padding: .5rem;
    cursor: pointer;
`