import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  height: 60px;
  background: #eee;
  ${mobile({ 
    height: '50px',  })}
`

export const Wrapper = styled.div`
  padding: 0 2rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  ${mobile({ 
    padding: '10px 0', })}
`
export const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  position: relative;
  border: 2px solid lightgray;
  padding: .2rem .8rem;
  border-radius: 3px;
  margin-left: 1.5rem;

  ${mobile({ 
    display: 'none', })}
`

export const LangBox = styled.div`
  position: absolute;
  top: 35px;
  left: 0px;
  width: 100px;
  border-bottom: 1px solid lightgray;
  background-color: #eee;
  padding: .6rem;
  display: flex;
  gap:.5rem;
  flex-direction: column;

  display: none;

  > span {
    color: #333;
    cursor: pointer;
  }
`


export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background: #fff;
  border-radius: 5px;
`

// Navbar - Left side
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({  width: '50px', })}
`

// Navbar - Center
export const Center = styled.div`
  flex: 1;
  text-align: center;
`

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({  fontSize: '20px', })}
  width: 60px;
  height: 60px;

  >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

// Navbar - Right
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({  flex: 2, justifyContent: 'center', })}
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({  fontSize: '12px', marginLeft: '10px' })}
`

export const Register = styled.div``


export const Login = styled.div``


export const MenuIte = styled.div``