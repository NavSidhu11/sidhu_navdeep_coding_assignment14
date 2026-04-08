import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import Setup from './pages/Setup';

const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
`;

const Nav = styled.nav`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #374151;

  &:hover {
    color: #4f46e5;
  }
`;

export default function App() {
  return (
    <Page>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/setup">Setup</NavLink>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </Page>
  );
}
