import React from 'react';
import Label from '../components/Label';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Description = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export default function Skills() {
  return (
    <Section id="skills">
      <h2>Skills</h2>

      {/* Description */}
      <Description>
        I have experience building full-stack web applications using modern
        technologies. I focus on creating responsive, user-friendly interfaces
        and scalable backend systems. I am skilled in developing applications
        using React, TypeScript, and backend technologies such as Rails and PHP.
        I also have experience working with databases, authentication systems,
        and API integration. Additionally, I use tools like Docker, GitHub, and
        Storybook to manage development workflows, testing, and deployment,
        while following best practices for clean and maintainable code.
      </Description>

      {/* Languages & Frameworks */}
      <h4>Languages & Frameworks</h4>
      <p>Technologies I use to build modern web applications.</p>
      <Row>
        <Label text="React" backgroundColor="#4f46e5" color="#fff" />
        <Label text="JavaScript" backgroundColor="#10b981" color="#fff" />
        <Label text="TypeScript" backgroundColor="#6366f1" color="#fff" />
        <Label text="Rails" backgroundColor="#f59e0b" color="#fff" />
        <Label text="PHP" backgroundColor="#ef4444" color="#fff" />
        <Label text="HTML" />
        <Label text="CSS" />
      </Row>

      {/* Tools */}
      <h4 style={{ marginTop: '1rem' }}>Tools</h4>
      <p>Tools I use for development, testing, and deployment.</p>
      <Row>
        <Label text="Docker" />
        <Label text="GitHub" />
        <Label text="VS Code" />
        <Label text="Storybook" />
        <Label text="Postman" />
      </Row>
    </Section>
  );
}
