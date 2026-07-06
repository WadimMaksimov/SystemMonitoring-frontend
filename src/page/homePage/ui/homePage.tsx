import * as Styled from './styled';

export const HomePage = () => {
  return (
    <>
      <Styled.Hero>
        <h1>Добро пожаловать в систему мониторинга</h1>
        <p>
          Наблюдайте за сервисами, метриками и оповещениями в реальном времени.
        </p>
      </Styled.Hero>

      <Styled.Grid>
        <Styled.Card>
          <h3>Сервисы</h3>
          <p>Состояние и uptime ключевых микросервисов.</p>
        </Styled.Card>
        <Styled.Card>
          <h3>Метрики</h3>
          <p>Нагрузка CPU, память и сетевой трафик.</p>
        </Styled.Card>
        <Styled.Card>
          <h3>Оповещения</h3>
          <p>Последние инциденты и их статус.</p>
        </Styled.Card>
      </Styled.Grid>
    </>
  );
};
