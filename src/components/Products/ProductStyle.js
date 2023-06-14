import styled from 'styled-components'

export const Container = styled.div`    
    max-width: 980px;
    margin: 0 auto; 
    padding-top: 3.5rem;
    position: relative;
    background-color: #eee;
`

//  Container Padrado  para todos os Componentes.
export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    margin: 1rem 3rem;
`

export const DefaultContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
`

// Product Card

export const Content = styled.div`
    margin: 0 auto;
    background-color: rgba(250, 250, 250, .6);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8); 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Info = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
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