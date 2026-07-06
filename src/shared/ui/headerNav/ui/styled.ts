import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 12px;
  /* allow nav to take remaining space so logo+nav stay left and other controls (button) stay right */
  flex: 1 1 auto;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderNavItem = styled.li``;

export const HeaderNavLink = styled(Link)`
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 600;
  transition: all 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;
