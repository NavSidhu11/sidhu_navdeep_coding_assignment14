import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const paddingMap = {
  small: '0.5rem 1rem',
  medium: '0.75rem 1.6rem',
  large: '1rem 2.4rem',
};

const fontMap = {
  small: '0.85rem',
  medium: '1rem',
  large: '1.2rem',
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ size = 'medium' }) => paddingMap[size]};
  font-size: ${({ size = 'medium' }) => fontMap[size]};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 0.4px;

  border: none;
  border-radius: 50px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  background: ${({ backgroundColor, disabled }) =>
    disabled
      ? '#cbd5e1'
      : backgroundColor
        ? backgroundColor
        : 'linear-gradient(135deg, #6366f1, #ec4899)'};

  color: ${({ color, disabled }) =>
    disabled ? '#9ca3af' : color || '#ffffff'};

  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};

  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 8px 20px rgba(99, 102, 241, 0.25)'};

  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.35);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 6px 15px rgba(99, 102, 241, 0.2);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  onClick,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    size={size}
    onClick={!disabled ? onClick : undefined}
  >
    {label}
  </StyledButton>
);

export default Button;
