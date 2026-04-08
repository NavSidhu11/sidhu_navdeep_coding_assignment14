import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Section = styled.div`
  margin-top: 2rem;
`;

const Hero = styled.div`
  background: #f3f4f6;
  padding: 2rem;
  border-radius: 12px;
`;

const Name = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Home() {
  const navigate = useNavigate(); // ✅ FIXED (inside function)

  return (
    <Section id="home">
      <Hero>
        <Name>Hi, I’m Navdeep 👋</Name>

        <Subtitle>
          Full Stack Web Development Student | React • Rails • Docker
        </Subtitle>

        <Description>
          I am a passionate Full Stack Web Development student at RRC Polytech.
          I enjoy building modern web applications using React, TypeScript, and
          backend technologies like Rails and PHP.
        </Description>

        <Description>
          I have experience working with real-world projects including
          e-commerce systems, content management systems, and full-stack
          applications with authentication and database integration. I am
          working as a Team Lead at Sunglass Hut, improving customer experience
          and team performance.
        </Description>

        <ButtonRow>
          <Button
            label="View My Work"
            backgroundColor="#4f46e5"
            onClick={() => navigate('/work')}
          />

          <Button
            label="Contact Me"
            onClick={() => (window.location.href = 'mailto:nsidhu25@rrc.ca')}
          />
        </ButtonRow>
      </Hero>
    </Section>
  );
}
