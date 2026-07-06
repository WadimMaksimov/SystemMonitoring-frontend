import type { HeaderNavProps } from '../type';
import * as Styled from './styled';

export const HeaderNav = (props: HeaderNavProps) => {
  const { items } = props;
  return (
    <Styled.HeaderNavWrapper>
      <Styled.HeaderNavList>
        {items.map((item) => (
          <Styled.HeaderNavItem key={item.id}>
            <Styled.HeaderNavLink to={item.link}>
              {item.title}
            </Styled.HeaderNavLink>
          </Styled.HeaderNavItem>
        ))}
      </Styled.HeaderNavList>
    </Styled.HeaderNavWrapper>
  );
};
