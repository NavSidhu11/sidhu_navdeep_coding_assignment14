import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 2rem;
`;

const Item = styled.div`
  margin-bottom: 1.5rem;
`;

export default function Setup() {
  return (
    <Section id="setup">
      <h2>Developer Setup</h2>

      <Item>
        <h4>VS Code Setup</h4>
        <p>
          I use Visual Studio Code with extensions such as Prettier, ESLint, and
          GitHub integration for efficient development and code formatting.
        </p>
      </Item>

      <Item>
        <h4>Terminal Setup</h4>
        <p>
          I use PowerShell and WSL for running development servers, managing
          Docker containers, and executing Git commands.
        </p>
      </Item>

      <Item>
        <h4>Preferred Editor Font</h4>
        <p>
          I prefer using JetBrains Mono for better readability and coding
          experience.
        </p>
      </Item>
    </Section>
  );
}
