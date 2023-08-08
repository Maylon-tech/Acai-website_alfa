import React from 'react'
import logo from '../../assets/images/LogoFruit.png'
import { 
    Center, ContactItem, 
    Container, Desc, Image, Left, 
    List, ListItem, Logo,
     Right, SocialContainer, 
     SocialIcon, Title 
} from './footerStyled'
import { Facebook, Instagram, MailOutline, Payment, Phone, Room, Twitter, WhatsApp } from '@mui/icons-material'

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                <Image src={logo} />
            </Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi 
                accusamus commodi quisquam esse illum odio id maiores neque repellat, dolor quos.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <WhatsApp />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Main Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>       
                <ListItem>Terms</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem></ListItem>
            </List>
        </Center>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Man Fashio</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>

            <ContactItem>
                <Room style={{ marginRight: "8px"}} />
                <span>622 Dixie path, South Tobirama 98776</span>
            </ContactItem>
            <ContactItem>
                <Phone style={{ marginRight: "8px"}} />
                <span>+99 8766 3328</span>
            </ContactItem>
            <ContactItem>
                <MailOutline style={{ marginRight: "8px"}} />
                <span>contact@devMani.com</span>
            </ContactItem>
            
        </Right>
    </Container>
  )
}

export default Footer