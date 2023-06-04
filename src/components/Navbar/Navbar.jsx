// import { Search } from '@mui/icons-material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
} from './index'


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>

          <SearchContainer>
            <Input placeholder='Search...' />
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