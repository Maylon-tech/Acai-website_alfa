import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
  height: 60px;
  background-color: #eee;
  ${mobile({ 
    height: '50px',  })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  ${mobile({ 
    padding: '10px 0', })}
`
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ 
    display: 'none', })}
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
  ${mobile({  width: '50px', })}
`

// Navbar - Center
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({  fontSize: '20px', })}
`

// Navbar - Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({  flex: 2, justifyContent: 'center', })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({  fontSize: '12px', marginLeft: '10px' })}
`