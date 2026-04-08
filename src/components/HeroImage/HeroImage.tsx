import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '460px'};

  background-image: ${({ src, disabled }) =>
    !disabled && src ? `url(${src})` : 'none'};

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e2e8f0' : backgroundColor || '#0f172a'};

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  overflow: hidden;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  filter: ${({ disabled }) =>
    disabled ? 'grayscale(100%) brightness(0.9)' : 'none'};

  transition:
    transform 0.4s ease,
    opacity 0.3s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.02)')};
  }

  @media (max-width: 600px) {
    height: 260px;
  }
`;

const Overlay = styled.div<{ overlayColor?: string; disabled?: boolean }>`
  position: absolute;
  inset: 0;

  background: ${({ overlayColor, disabled }) =>
    disabled
      ? 'rgba(148, 163, 184, 0.6)'
      : overlayColor ||
        'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(99,102,241,0.6))'};
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2.5rem;
  max-width: 800px;
`;

const HeroTitle = styled.h1<{ color?: string; disabled?: boolean }>`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  margin: 0 0 1rem;
  letter-spacing: 0.5px;

  color: ${({ color, disabled }) =>
    disabled ? '#94a3b8' : color || '#ffffff'};
`;

const HeroSubtitle = styled.p<{ color?: string; disabled?: boolean }>`
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin: 0;
  line-height: 1.6;

  color: ${({ color, disabled }) =>
    disabled ? '#cbd5e1' : color || '#e2e8f0'};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src = 'https://placehold.co/1200x460',
  title = 'Hero Title',
  subtitle = 'Subtitle goes here',
  backgroundColor,
  color,
  disabled = false,
  height,
  overlayColor,
}) => (
  <HeroWrapper
    src={src}
    height={height}
    backgroundColor={backgroundColor}
    disabled={disabled}
  >
    <Overlay overlayColor={overlayColor} disabled={disabled} />
    <Content>
      <HeroTitle color={color} disabled={disabled}>
        {title}
      </HeroTitle>
      <HeroSubtitle color={color} disabled={disabled}>
        {subtitle}
      </HeroSubtitle>
    </Content>
  </HeroWrapper>
);

export default HeroImage;
