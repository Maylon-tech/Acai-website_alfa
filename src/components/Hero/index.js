import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #eee;
  /* background: rgb(204,160,232);
  background: linear-gradient(79deg, rgba(204,160,232,1) 40%, rgba(221,125,167,0.927608543417367) 80%); */
`

export const ImageFloat = styled.div`
  flex: 1;
  position: relative;
`

export const ImageOne = styled.div`
  width: 500px;
  height: 500px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

export const InfoContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
` 

export const Logo = styled.div`
  width: 380px;
  height: 150px;

  > img {
    width: 100%;
  }
`

export const Title = styled.h1`
  padding: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
`

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const ButtonDelivery = styled.button`
  width: 160px;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  background: rgb(120,39,144);
  background: radial-gradient(circle, rgba(120,39,144,1) 7%, rgba(183,103,205,1) 49%, rgba(115,68,166,1) 93%);
`

export const ButtonMobile = styled.button`
  width: 160px;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  background: rgb(120,39,144);
  background: radial-gradient(circle, rgba(120,39,144,1) 7%, rgba(183,103,205,1) 49%, rgba(115,68,166,1) 93%);
`