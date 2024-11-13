import styled from "styled-components";

const Container = styled.div`
  grid-area: display;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 100px;
`;

interface ValueProps {
  value: string;
}

const Display = ({ value }: ValueProps): JSX.Element => {
  return <Container className="display">{value}</Container>;
};

export default Display;
