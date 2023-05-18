import styled from 'styled-components'

export const Container = styled.div`
    border: 3px solid orange;
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    max-width: 1200px;
    margin: 3rem auto;
    padding-top: 3.5rem;
    position: relative;
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



export const Content = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background-color: gray;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

export const Image = styled.img`
    height: 75%;
    object-fit: cover;
    width: 100%;
    padding: 1rem;
    z-index: 2;
    border-radius: 50%;
`

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    margin-top: 1rem;
    /* background-color: rgba(0,0,0,0.6); */
`

export const Icon = styled.div`
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
`