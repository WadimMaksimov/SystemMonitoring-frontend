import * as Styled from './logo.styled';
import logo from '../../assets/img/logo.png';

export const Logo = () => {
  return (
    <Styled.LogoWrapper to="/">
      <Styled.LogoImage src={logo} alt="Logo" />
      <Styled.LogoWrapperText>
        <Styled.LogoText>System Monitoring</Styled.LogoText>
        <Styled.LogoTextSecondary>
          MONITOR. ANALYZE. PROTECT.
        </Styled.LogoTextSecondary>
      </Styled.LogoWrapperText>
    </Styled.LogoWrapper>
  );
};
