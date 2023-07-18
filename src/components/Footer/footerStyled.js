import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #845EC2;
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
export const Desc = styled.p`
  margin: 20px 0px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  width: 85%;
`
export const SocialContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #eee;
  background-color: lightgray;
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
  color: #fff;
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
  color: lightgray;
  font-size: 1.1rem;
`

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`

export const ContactItem = styled.div`
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  color: #eeeeeecc;
  margin: 1.2rem 0;
`

export const Payment = styled.img`
  width: 50%;
  color: #fff;
`