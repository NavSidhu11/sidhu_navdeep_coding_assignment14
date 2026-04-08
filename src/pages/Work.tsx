import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

export default function Work() {
  return (
    <Section id="work">
      <h2>My Projects</h2>

      <Row>
        <LinkWrapper
          href="https://github.com/NavSidhu11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            title="Portfolio Website"
            description="React portfolio with Docker deployment and CI/CD pipeline."
            imageSrc="https://placehold.co/300x200/4f46e5/ffffff"
            footerText="React · Docker · GitHub"
          />
        </LinkWrapper>

        <LinkWrapper
          href="https://github.com/NavSidhu11/prairie_threads.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            title="E-commerce App"
            description="Rails-based online store with cart and checkout functionality."
            imageSrc="https://placehold.co/300x200/10b981/ffffff"
            footerText="Rails · PostgreSQL"
          />
        </LinkWrapper>

        <LinkWrapper
          href="https://github.com/NavSidhu11/cinephile_cms.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            title="Movie CMS"
            description="PHP CMS with CRUD operations, authentication, and category management."
            imageSrc="https://placehold.co/300x200/f59e0b/ffffff"
            footerText="PHP · MySQL"
          />
        </LinkWrapper>
      </Row>
    </Section>
  );
}
