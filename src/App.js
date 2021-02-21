import React, { useState } from 'react';
import './App.scss';
import {
  Content,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Search20,
  Notification20,
  EmailNew32,
  Grid32,
  IotPlatform16
} from '@carbon/icons-react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './content/Login';
import DashBoard from './content/Dashboard';
import SMS from './content/SMS';
import Modem from './content/Modem';
import NewSMS from './components/NewSMS';
import BulkSMS from './components/BulkSMS';

const DashView = () => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="SMS without borders">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="">
              C | Deck
          </HeaderName>
            <HeaderNavigation aria-label="C | Deck">
              <HeaderMenuItem href="#">API</HeaderMenuItem>
              <HeaderMenuItem href="#">Docs</HeaderMenuItem>
              <HeaderMenuItem href="#">About</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search">
                <Search20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Notifications">
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher">
                <AppSwitcher20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavLink large renderIcon={Grid32} element={Link} to="/dash">
                  Dashboard
          </SideNavLink>
                <SideNavLink large renderIcon={EmailNew32} element={Link} to="/sms">
                  SMS
          </SideNavLink>
                <SideNavLink large renderIcon={IotPlatform16} element={Link} to="/modem">
                  Modems
          </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>

          <Content id="main-content" className="bx--col-lg-13 bx--offset-lg-3">
            <Switch>
              <Route exact path="/dash" component={DashBoard} />
              <Route exact path="/sms" component={SMS} />
              <Route exact path="/sms/:modem" />
              <Route exact path="/new-sms" component={NewSMS} />
              <Route exact path="/bulk-sms" component={BulkSMS} />
              <Route exact path="/modem" component={Modem} />
            </Switch>
          </Content>
        </>
      )}
    />
  );
};

const App = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  let view;

  if (isLoggedIn) {
    view = <DashView />
  } else {
    view = <Login />
  }

  return (
    <>
      {view}
    </>
  );
}

export default App;
