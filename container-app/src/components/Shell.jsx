import { NavLink, Outlet } from "react-router-dom";

import styled from "styled-components";

import apps from "../apps";
import LanguageSwitch from "./LanguageSwitch";
import AuthSwitch from "./AuthSwitch";

const Shell = () => {
  return (
    <AppContainer>
      <Header>
        <img src="yara-logo.svg" alt="Yara" />

        <h1>Microfrontend Platform PoC</h1>
        <AuthSwitch />
        <LanguageSwitch />
      </Header>

      <Container>
        <nav>
          {apps.map(({ id, name }) => (
            <StyledNavLink key={id} to={`/${id}`}>
              {name}
            </StyledNavLink>
          ))}
        </nav>

        <main>
          <Outlet />
        </main>
      </Container>
    </AppContainer>
  );
};

export default Shell;

export const AppContainer = styled.header`
  margin: 1rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  img {
    margin-right: 4rem;
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 300;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;

  nav {
    width: 16rem;
    margin-right: 2rem;
  }

  main {
    flex: 1;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  border: 0.125rem solid rgb(229, 231, 235);
  border-radius: 0.375rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 200 !important;
  text-decoration: none;
  color: #000;
  line-height: 1.5rem;

  &:first-of-type {
    margin-bottom: 1.25rem;
  }

  &.active {
    background-color: rgba(191, 219, 254, 1);
  }

  &:hover {
    background-color: rgba(191, 219, 254, 0.3);
  }
`;
