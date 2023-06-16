import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #845EC2;
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Logo = styled.h1`
 font-family: Arial, Helvetica, sans-serif; 
`
export const Desc = styled.p`
  margin: 20px 0px;
  font-family: Arial, Helvetica, sans-serif;
`
export const SocialContainer = styled.div`
  display: flex;
`

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  color: #${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`

export const Title = styled.h3`
  margin-bottom: 30px;
  font-family: Arial, Helvetica, sans-serif;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
`


export const Right = styled.div`
  flex: 1;
  padding: 20px;
`

export const ContactItem = styled.div`
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
`

export const Payment = styled.img`
  width: 50%;
`