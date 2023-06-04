import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: rgb(14,130,51);
  background: linear-gradient(94deg, rgba(14,130,51,1) 7%, rgba(192,237,220,1) 49%, rgba(15,134,71,1) 94%);
`

export const ImageFloat = styled.div`
  flex: 2;
  position: relative;
`
export const ImageOne = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: orange;
  border-radius: 50%;
  width: 330px;
  height: 330px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`  
export const ImageTwo = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  border-radius: 50%;
  width: 380px;
  height: 380px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
` 
export const ImageThree = styled.div`
  position: absolute;
  right: 90px;
  bottom: -20px;
  background-color: green;
  border-radius: 50%;
  width: 280px;
  height: 280px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
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