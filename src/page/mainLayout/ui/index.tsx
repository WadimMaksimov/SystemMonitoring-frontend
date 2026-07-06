import { Outlet } from 'react-router-dom';
import { Header } from '../../../wigets/header';
import * as Styled from './styled';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Styled.MainWrapper>
        <Outlet />
      </Styled.MainWrapper>
    </>
  );
};
