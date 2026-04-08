import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<DropdownProps>`
  display: block;
  width: 100%;
  max-width: 340px;

  padding: 0.75rem 1.2rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

  border-radius: 14px;
  border: 2px solid ${({ disabled }) => (disabled ? '#cbd5e1' : '#a5b4fc')};

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e2e8f0' : backgroundColor || '#ffffff'};

  color: ${({ color, disabled }) =>
    disabled ? '#94a3b8' : color || '#0f172a'};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};

  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 8px 20px rgba(99, 102, 241, 0.08)'};

  transition: all 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ disabled }) => (disabled ? '#cbd5e1' : '#6366f1')};
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Dropdown: React.FC<DropdownProps> = ({
  options = defaultOptions,
  placeholder = 'Select an option',
  backgroundColor,
  color,
  disabled = false,
  onSelect,
}) => (
  <StyledSelect
    disabled={disabled}
    backgroundColor={backgroundColor}
    color={color}
    defaultValue=""
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
      onSelect?.(e.target.value)
    }
  >
    <option value="" disabled>
      {placeholder}
    </option>

    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
