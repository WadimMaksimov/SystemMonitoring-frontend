import styled from 'styled-components';

export const Hero = styled.section`
  padding: 36px 20px;
  background: linear-gradient(
    90deg,
    rgba(108, 99, 255, 0.06),
    rgba(255, 255, 255, 0)
  );
  border-radius: 12px;
  margin-bottom: 20px;

  h1 {
    margin: 0 0 8px 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 28px;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 6px 14px rgba(31, 31, 31, 0.04);

  h3 {
    margin: 0 0 8px 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export default {};
