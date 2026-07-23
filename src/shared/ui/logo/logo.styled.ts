import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled(Link)`
  gap: 13px;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const LogoImage = styled.img`
  width: 58px;
  height: 58px;
`;

export const LogoWrapperText = styled.div``;

export const LogoText = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
`;
export const LogoTextSecondary = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;
