// Login.tsx
"use client"
import * as React from 'react';
import { Button, Form, FormGroup, PasswordInput, TextInput } from '@carbon/react';
import './globals.scss';
interface Props {
  //onLogin: (username: string, password: string) => void;
}

interface State {
  username: string;
  password: string;
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    //this.props.onLogin(username, password);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup legendText="Login">     
          <TextInput
            id="text"
            labelText="Username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder="Enter username"
          />
        
          <PasswordInput
            id="password"
            labelText="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Enter password"
          />
        </FormGroup>
        <Button
          type="submit"
          size="lg"
          kind="primary"
          disabled={false}
        >
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
