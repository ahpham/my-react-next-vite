"use client";
import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  TextInput,
  Button,
  Theme,
  Toggle,
} from '@carbon/react';
import {
  Switcher,
  Notification,
  UserAvatar,
} from '@carbon/react/icons';
import { HeaderContainerRenderProps } from '@carbon/react/lib/components/UIShell/HeaderContainer';
import LoginForm from './LoginForm';

const MainPage = () => {
  type CarbonTheme = 'white' | 'g10' | 'g90' | 'g100';
  const [theme, setTheme] = useState<CarbonTheme>('white');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'white' ? 'g100' : 'white');
  };

  return (
    <Theme theme={theme}>
      <div className="container">
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }: HeaderContainerRenderProps) => (
            <>
              <Header aria-label="IBM Platform Name">
                <HeaderName href="#" prefix="IBM">
                  [EntireX Microservices Gateway]
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                  <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction aria-label="Notifications">
                    <Notification size={20} />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="User Avatar">
                    <UserAvatar size={20} />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="App Switcher">
                    <Switcher size={20} />
                  </HeaderGlobalAction>
                  <div className="theme-toggle">
                    <Toggle
                      aria-label="Theme toggle"
                      id="theme-toggle"
                      size="sm"
                      toggled={theme === 'g100'}
                      onToggle={toggleTheme}
                      labelText="Dark theme"
                    />
                  </div>
                </HeaderGlobalBar>
                <SideNav
                  aria-label="Side navigation"
                  expanded={isSideNavExpanded}
                  isPersistent={false}
                >
                  <SideNavItems>
                    <SideNavMenu title="Category 1">
                      <SideNavMenuItem href="#">Link 1</SideNavMenuItem>
                      <SideNavMenuItem href="#">Link 2</SideNavMenuItem>
                      <SideNavMenuItem href="#">Link 3</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="Category 2">
                      <SideNavMenuItem href="#">Link 4</SideNavMenuItem>
                      <SideNavMenuItem href="#">Link 5</SideNavMenuItem>
                      <SideNavMenuItem href="#">Link 6</SideNavMenuItem>
                    </SideNavMenu>
                  </SideNavItems>
                </SideNav>
              </Header>
            </>
          )}
        />
        <main className="content">
          <LoginForm theme={ theme } />
        </main>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          .content {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .theme-toggle {
            display: flex;
            align-items: center;
            margin-right: 1rem;
          }
        `}</style>
      </div>
    </Theme>
  );
};

const LoginComponent = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <TextInput
            id="username"
            labelText="Username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <TextInput
            type="password"
            id="password"
            labelText="Password"
            placeholder="Enter password"
          />
        </div>
        <Button type="submit">Log In</Button>
      </form>
      <style jsx>{`
        .login-container {
          background-color: var(--cds-layer);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .form-group {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default MainPage;
