import React from 'react'
import { Button, Container, Form, Input, Link, Title, Wrapper } from './index'

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>

                <Input placeholder="Name" />                
                <Input placeholder="password" />
                
                <Button>Login</Button>

                <Link>Don'y you remember the password?</Link>
                <Link>Create a new Account.</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login