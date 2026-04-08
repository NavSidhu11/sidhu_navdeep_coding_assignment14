import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  display: block;
  max-width: 100%;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};

  border-radius: ${({ borderRadius }) => borderRadius || '18px'};

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e2e8f0' : backgroundColor || 'transparent'};

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  filter: ${({ disabled }) =>
    disabled ? 'grayscale(100%) brightness(0.9)' : 'none'};

  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 15px 35px rgba(0, 0, 0, 0.08)'};

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    filter 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.04)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0 20px 45px rgba(0, 0, 0, 0.12)'};
  }
`;

const Img: React.FC<ImgProps> = ({
  src = 'https://placehold.co/400x250',
  alt = 'Image',
  width,
  height,
  disabled = false,
  backgroundColor,
  borderRadius,
  objectFit = 'cover',
}) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    disabled={disabled}
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    objectFit={objectFit}
  />
);

export default Img;
