import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Wrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  border-radius: 20px;
  overflow: hidden;

  background: ${({ backgroundColor, disabled }) =>
    disabled
      ? '#e2e8f0'
      : backgroundColor
        ? backgroundColor
        : 'linear-gradient(180deg, #ffffff, #f8fafc)'};

  color: ${({ color, disabled }) =>
    disabled ? '#94a3b8' : color || '#0f172a'};

  box-shadow: ${({ disabled }) =>
    disabled ? '0 4px 12px rgba(0,0,0,0.05)' : '0 20px 40px rgba(0,0,0,0.08)'};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};

  transition: all 0.3s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-6px)')};
    box-shadow: ${({ disabled }) =>
      disabled
        ? '0 4px 12px rgba(0,0,0,0.05)'
        : '0 25px 50px rgba(0,0,0,0.12)'};
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 200px;
  object-fit: cover;

  filter: ${({ disabled }) =>
    disabled ? 'grayscale(100%) brightness(0.9)' : 'none'};

  transition: filter 0.3s ease;
`;

const Body = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const Title = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: ${({ disabled }) => (disabled ? '#94a3b8' : 'inherit')};
`;

const Description = styled.p<{ disabled?: boolean }>`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ disabled }) => (disabled ? '#a0aec0' : '#475569')};
`;

const Footer = styled.div<{ disabled?: boolean }>`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ disabled }) => (disabled ? '#cbd5e1' : '#e2e8f0')};

  font-size: 0.9rem;
  font-weight: 500;

  background-color: ${({ disabled }) => (disabled ? '#edf2f7' : '#f8fafc')};

  color: ${({ disabled }) => (disabled ? '#94a3b8' : '#64748b')};
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'Card description.',
  imageSrc = 'https://placehold.co/360x200',
  imageAlt = 'Card image',
  backgroundColor,
  color,
  disabled = false,
  footerText = 'Footer',
}) => (
  <Wrapper backgroundColor={backgroundColor} color={color} disabled={disabled}>
    <CardImage src={imageSrc} alt={imageAlt} disabled={disabled} />

    <Body>
      <Title disabled={disabled}>{title}</Title>
      <Description disabled={disabled}>{description}</Description>
    </Body>

    <Footer disabled={disabled}>{footerText}</Footer>
  </Wrapper>
);

export default Card;
