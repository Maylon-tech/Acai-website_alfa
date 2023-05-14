// import { Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
  background-color: #eee;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
`
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background: #fff;
  border-radius: 5px;
`

// Navbar - Left side
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Input = styled.input`
  border: none;
  outline: none;
`

// Navbar - Center
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`

// Navbar - Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>

          <SearchContainer>
            <Input />
           <SearchIcon style={{ color: "gray", fontSize:16}} /> 
          </SearchContainer>

        </Left>

        <Center>
          <Logo>AcaiShop</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="success">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar