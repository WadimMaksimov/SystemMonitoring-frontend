import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const LogoText = styled.span`
  margin-left: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`;
