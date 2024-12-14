import styled from "styled-components";
import { colorStyle } from "../../GlobalStyled";

const Container = styled.div`
  grid-area: display;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  font-size: 24px;
  font-weight: 500;
  color: #333;
  background-color: #f7f7f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

interface ValueProps {
  value: string;
}

const Display = ({ value }: ValueProps): JSX.Element => {
  return <Container className="display">{value}</Container>;
};

export default Display;
