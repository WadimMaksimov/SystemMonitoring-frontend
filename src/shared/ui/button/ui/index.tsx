import * as Styled from './styled';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return <Styled.Button onClick={onClick}>{text}</Styled.Button>;
};
