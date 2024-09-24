"use client";
import React, { useState, useEffect } from 'react';
import TableComponent from "./TableComponent"
import RequestResponseComponent from "./RequestResponseComponent"
import LoginForm from "./LoginForm"
import EditorComponent from "./EditorComponent"
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
  Menu,
} from '@carbon/react/icons';

type CarbonTheme = 'white' | 'g10' | 'g90' | 'g100';

const MainPage2 = () => {
  const [theme, setTheme] = useState<CarbonTheme>('white');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [currentView, setCurrentView] = useState<'table' | 'request-response' | 'edit-item'>('table');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastInteraction = currentTime - lastInteractionTime;
      if (timeSinceLastInteraction > 3000 && isSideNavExpanded) {
        setIsSideNavExpanded(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isSideNavExpanded, lastInteractionTime]);

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? 'g100' : 'white');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const toggleSideNav = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
    setLastInteractionTime(Date.now());
  };

  const handleNavigation = (view: 'table' | 'request-response' | 'edit-item') => {
    setCurrentView(view);
  };

  return (
    <Theme theme={theme}>
      <div className="container">
        <HeaderContainer
          render={({}) => (
            <>
              <Header aria-label="IBM Platform Name">
                <HeaderGlobalAction
                  aria-label="Menu"
                  onClick={toggleSideNav}
                  isActive={isSideNavExpanded}
                >
                  <Menu size={20} />
                </HeaderGlobalAction>
                <HeaderName href="#" prefix="IBM">
                  [Platform]
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                  <HeaderMenuItem href="#" onClick={() => handleNavigation('table')}>
                    Microservice
                  </HeaderMenuItem>
                  <HeaderMenuItem href="#" onClick={() => handleNavigation('request-response')}>
                    Test
                  </HeaderMenuItem>
                  <HeaderMenuItem href="#" onClick={() => handleNavigation('edit-item')}>
                    Edit
                  </HeaderMenuItem>
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
                      toggled={theme !== 'white'}
                      onToggle={toggleTheme}
                      labelText="Dark theme"
                    />
                  </div>
                </HeaderGlobalBar>
                <SideNav
                  aria-label="Side navigation"
                  expanded={isSideNavExpanded}
                  isPersistent={false}
                  onToggle={toggleSideNav}
                >
                  <SideNavItems>
                    <SideNavMenu title="Category 1">
                      <SideNavMenuItem href="#" onClick={() => handleNavigation('table')}>
                        Microservice
                      </SideNavMenuItem>
                      <SideNavMenuItem href="#" onClick={() => handleNavigation('request-response')}>
                        Test
                      </SideNavMenuItem>
                      <SideNavMenuItem href="#"onClick={() => handleNavigation('request-response')} >
                        Edit
                      </SideNavMenuItem>
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
        <main className={isLoggedIn ? 'container' : 'login'}>
          {isLoggedIn && currentView === 'table' && (
            <TableComponent />
          )}
          {isLoggedIn && currentView === 'request-response' && (
            <RequestResponseComponent />
          )}
          {isLoggedIn && currentView === 'edit-item' && (
            <EditorComponent />
          )}
          
          {!isLoggedIn && (
            <LoginForm onLogin={handleLogin} />
          )}
        </main>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          .login {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
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

export default MainPage2;