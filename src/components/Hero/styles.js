import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  border: 3px solid red;
  background: rgb(14,130,51);
background: linear-gradient(94deg, rgba(14,130,51,1) 7%, rgba(192,237,220,1) 49%, rgba(15,134,71,1) 94%);
`
export const ImageFloat = styled.div`
  flex: 1;
  position: relative;
`
export const ImageOne = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  background-color: orange;
  border-radius: 50%;
  width: 230px;
  height: 230px;

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
  width: 280px;
  height: 280px;

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
  bottom: 40px;
  background-color: green;
  border-radius: 50%;
  width: 230px;
  height: 230px;

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
  justify-content: space-around;
  border: 2px solid #333;
` 

export const Logo = styled.div``

export const Title = styled.div``

export const ButtonContent = styled.div`
  border: 2px solid orange;
`

export const ButtonDelivery = styled.div``

export const ButtonMobile = styled.div``