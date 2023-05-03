import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #eee;
  position: relative;
  overflow: hidden;
`

export const Arrow = styled.div`
border: 2px solid orange;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`
export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
` 

export const Card = styled.div`
  width: 250px;
  height: 300px;
  border: 2px solid gray;
`