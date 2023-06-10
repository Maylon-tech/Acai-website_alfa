import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100px;
  background: #C8AFD4;

  ${mobile({ 
    height: '50px',  })}
`

export const Wrapper = styled.div`
  padding: 0 2rem;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;

  ${mobile({ 
    padding: '10px 0', })}
`

export const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  gap: 2rem;

  ${mobile({  fontSize: '20px', })}
 
`
export const Image = styled.img`
  width: 60px;
  height: 60px;
`

export const LogoText = styled.h1`
  color: #642667;
  font-size: 3rem;
  font-family: var(--logo-font);
  letter-spacing: 2px;
`


// export const Language = styled.span`
//   cursor: pointer;
//   font-size: 14px;
//   position: relative;
//   border: 2px solid lightgray;
//   padding: .2rem .8rem;
//   border-radius: 3px;
//   margin-left: 1.5rem;

//   ${mobile({ 
//     display: 'none', })}
// `

// export const LangBox = styled.div`
//   position: absolute;
//   top: 35px;
//   left: 0px;
//   width: 100px;
//   border-bottom: 1px solid lightgray;
//   background-color: #eee;
//   padding: .6rem;
//   display: flex;
//   gap:.5rem;
//   flex-direction: column;

//   display: none;

//   > span {
//     color: #333;
//     cursor: pointer;
//   }
// `

// export const SearchContainer = styled.div`
//   border: 1px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   background: #fff;
//   border-radius: 5px;


// Navbar - Left side
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1.5rem;
`
// export const Input = styled.input`
//   border: none;
//   outline: none;
//   ${mobile({  width: '50px', })}
// `


// Navbar - Center







// Navbar - Right
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 1.5rem;
  ${mobile({  flex: 2, justifyContent: 'center', })}
`

export const MenuItem = styled.div`

  cursor: pointer;

  ${mobile({  fontSize: '12px', marginLeft: '10px' })}
`

export const Register = styled.div`
  background-color: #845EC2;
  color: #fff;
  padding: .6rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`


export const Login = styled.div`
  background-color: #845EC2;
  color: #fff;
  padding: .6rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`

