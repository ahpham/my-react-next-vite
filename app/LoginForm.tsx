
"use client";
import React, { useState } from 'react'
import {
  Form,
  TextInput,
  Button,
  Stack,
  Grid,
  Column,
  Theme,
  PasswordInput
} from '@carbon/react'
import { Login } from '@carbon/icons-react'
import '@carbon/styles/css/styles.css';

export default function LoginForm(props: any) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Login attempted with:', { username, password })
      
    // Implement your login logic here
  }

  return (
    <Theme theme={ props.theme } >
      <Grid className="h-screen">
        <Column lg={{ span: 4, offset: 6 }} md={{ span: 4, offset: 2 }} sm={{ span: 4 }}>
          <Stack gap={7} className="h-full justify-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <Form onSubmit={props.onLogin}>
              <Stack gap={5}>
                <TextInput
                  id="username"
                  labelText="Username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <PasswordInput
                  id="password"
                  labelText="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  renderIcon={Login}
                >
                  Log in
                </Button>
              </Stack>
            </Form>
          </Stack>
        </Column>
      </Grid>
    </Theme>
  )
}