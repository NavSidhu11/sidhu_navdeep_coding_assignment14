import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 2rem;
`;

const Card = styled.div`
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 10px;
  max-width: 300px;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: #4f46e5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Resources() {
  return (
    <Section id="resources">
      <h2>Resources</h2>

      <Row>
        <Card>
          <Img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" />
          <h4>React Documentation</h4>
          <p>
            Official documentation to learn React concepts, hooks, and best
            practices.
          </p>
          <Link href="https://react.dev" target="_blank">
            Visit
          </Link>
        </Card>

        <Card>
          <Img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" />
          <h4>MDN Web Docs</h4>
          <p>
            Comprehensive resource for HTML, CSS, and JavaScript references.
          </p>
          <Link href="https://developer.mozilla.org" target="_blank">
            Visit
          </Link>
        </Card>

        <Card>
          <Img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" />
          <h4>Docker Docs</h4>
          <p>Learn containerization and deployment using Docker.</p>
          <Link href="https://www.docker.com" target="_blank">
            Visit
          </Link>
        </Card>
      </Row>
    </Section>
  );
}
