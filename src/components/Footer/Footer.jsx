import React from 'react'
import { 
    Center, ContactItem, 
    Container, Desc, Left, 
    List, ListItem, Logo,
     Right, SocialContainer, 
     SocialIcon, Title 
} from './footerStyled'
import { Facebook, Instagram, MailOutline, Payment, Phone, Room, Twitter, WhatsApp } from '@mui/icons-material'

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Logo</Logo>
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
                <Room style={{ marginRight: "13px"}} />
                622 Dixie path, South Tobirama 98776
            </ContactItem>
            <ContactItem>
                <Phone style={{ marginRight: "13px"}} />
                +99 8766 3328
            </ContactItem>
            <ContactItem>
                <MailOutline style={{ marginRight: "13px"}} />
                contact@devMani.com
            </ContactItem>
            
        </Right>
    </Container>
  )
}

export default Footer