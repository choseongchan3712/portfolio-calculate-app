import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  background-color: #f7f7f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f0f0f2;
  }
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
  num: string;
}

const Button =({ label, onClick, num }: ButtonProps) => { 
  return (
    <Container className={num} onClick={onClick} style={{gridArea: num}}>
      {label}
    </Container>
  );
};

export default Button;
