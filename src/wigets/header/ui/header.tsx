import { Button } from '../../../shared/ui/button/ui';
import { HeaderNav } from '../../../shared/ui/headerNav';
import { Logo } from '../../../shared/ui/logo/Logo';
import { dataNav } from '../dataNav';
import * as Styled from './styled';

export const Header = () => {
  const authenticated = false;
  return (
    <Styled.HeaderNavWrapper>
      <Styled.HeaderInner>
        <Logo />
        <HeaderNav items={dataNav} />
        <Styled.HeaderButtonWrapper>
          {authenticated ? (
            <Button text="Выйти" onClick={() => console.log('Выйти')} />
          ) : (
            <Button text="Войти" onClick={() => console.log('Войти')} />
          )}
        </Styled.HeaderButtonWrapper>
      </Styled.HeaderInner>
    </Styled.HeaderNavWrapper>
  );
};
