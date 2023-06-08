// import { Search } from '@mui/icons-material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom'
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
  LangBox,
  Register,
  Login,

} from './index'
import logo from '../../assets/images/LogoFruit.png'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>

        <Left>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <Language>
            ENG
            <LangBox>
              <span>Port</span>
              <span>Spanish</span>
              <span>Japanese</span>
              <span>Chinese</span>
              <span>Taglog</span>
            </LangBox>
          </Language>

          {/* <SearchContainer>
            <Input placeholder='Search...' />
           <SearchIcon style={{ color: "gray", fontSize:16}} /> 
          </SearchContainer> */}

        </Left>

        

        <Right>

          <MenuItem>
            <Register onClick={() => navigate("/register")}>REGISTER</Register>
          </MenuItem>

          <MenuItem>
            <Login onClick={() => navigate("/login")}>SIGN IN</Login>
          </MenuItem>

          <MenuItem>
            <Link to="/cart">
                <Badge badgeContent={4} color="success">
                  <ShoppingCartOutlinedIcon color="action" />
                </Badge>
            </Link>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar