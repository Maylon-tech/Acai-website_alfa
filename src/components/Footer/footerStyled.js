import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 1.5rem 2.2rem;
  background-color: #C8AFD8;;
  box-shadow: 10px 12px 23px rgba(0, 0, 0, .7);
`

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Logo = styled.h1`
 font-family: Arial, Helvetica, sans-serif; 
 color: #fff;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
`

export const Desc = styled.p`
  margin: 20px 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  color: #333;
  width: 85%;
`
export const SocialContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const SocialIcon = styled.div`
  width: 45px;
  height: 45px;
  background: transparent;
  border-radius: 50%;
  color: #333;
  color: #${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  > svg {
    font-size: 2rem;
    cursor: pointer;
    
  }
`

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`
export const Title = styled.h3`
  margin-bottom: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  font-size: 1.1rem;
`

export const Right = styled.div`
  flex: 2;
  padding: 20px;
`

export const ContactItem = styled.div`
  width: 90%;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  margin: 1.2rem 0;

  > span {
    color: #222;
    font-size: 1.2rem;
  }
`

export const Payment = styled.img`
  width: 50%;
  color: #333;
`