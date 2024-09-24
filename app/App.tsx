// App.tsx
import React from 'react';
import Login from './Login';

interface Props {
  onLogin: (username: string, password: string) => void;
}

class App extends React.Component<Props> {
  handleLogin = (username: string, password: string) => {
    // Call your authentication API or logic here
    console.log(`Logged in with username ${username} and password ${password}`);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
