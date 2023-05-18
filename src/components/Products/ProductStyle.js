import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`



export const Content = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background-color: gray;
    position: relative;
`

export const Circle = styled.div`
  
`

export const Image = styled.img`
    height: 75%;
    object-fit: cover;
    width: 100%;
    padding: 1rem;
    
`

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.6);
`

export const Icon = styled.div`
  
`