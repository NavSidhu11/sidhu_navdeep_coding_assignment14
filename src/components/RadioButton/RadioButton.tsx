import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.6rem 1rem;
  border-radius: 30px;

  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e2e8f0' : backgroundColor || '#f8fafc'};

  color: ${({ disabled }) => (disabled ? '#94a3b8' : '#0f172a')};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};

  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 6px 18px rgba(99, 102, 241, 0.08)'};

  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#e2e8f0' : '#eef2ff')};
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StyledInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;

  accent-color: #6366f1;

  cursor: inherit;
`;

const LabelText = styled.span<{ disabled?: boolean; color?: string }>`
  color: ${({ disabled, color }) =>
    disabled ? '#94a3b8' : color || '#0f172a'};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Option',
  name = 'radio',
  value = 'option',
  checked = false,
  disabled = false,
  backgroundColor,
  color,
  onSelect,
}) => (
  <Wrapper disabled={disabled} backgroundColor={backgroundColor}>
    <StyledInput
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onSelect?.(e.target.value)
      }
      readOnly={!onSelect}
    />

    <LabelText disabled={disabled} color={color}>
      {label}
    </LabelText>
  </Wrapper>
);

export default RadioButton;
