import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background: linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),
  url("https://www.thespruceeats.com/thmb/mH7RWOmgg0xk7dz1pe2zHETdVGw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-162912489-584df2435f9b58a8cd096aaa.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  /* background: rgb(204,160,232);
  background: linear-gradient(79deg, rgba(204,160,232,1) 40%, rgba(221,125,167,0.927608543417367) 80%); */
`


export const InfoContent = styled.div`
  width: 40%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, .6);
` 

export const Logo = styled.div`
  width: 300px;
  height: 250px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Title = styled.h1`
  padding: 1rem;
  font-size: 1.5rem;
  color: #fff;
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