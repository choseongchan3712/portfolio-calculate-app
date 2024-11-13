import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  background-color: #212121;
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 900;
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
  num: string;
}

const Button =({ label, onClick, num }: ButtonProps) => { //!
  return (
    <Container className={num} onClick={onClick} style={{gridArea: num}}>
      {label}
    </Container>
  );
};

export default Button;
