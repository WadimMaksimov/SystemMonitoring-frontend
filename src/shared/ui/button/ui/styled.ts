import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    #5b55e6 100%
  );
  box-shadow: 0 8px 20px rgba(108, 99, 255, 0.12);
  transition:
    transform 140ms ease,
    box-shadow 140ms ease,
    opacity 140ms ease;

  &:hover {
    box-shadow: 0 14px 34px rgba(108, 99, 255, 0.16);
  }

  &:active {
    box-shadow: 0 6px 12px rgba(31, 31, 31, 0.06);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(108, 99, 255, 0.08);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;
