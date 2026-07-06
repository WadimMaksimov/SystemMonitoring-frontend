import styled from 'styled-components';

export const HeaderNavWrapper = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.01);
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 1px 8px rgba(31, 31, 31, 0.04);
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
