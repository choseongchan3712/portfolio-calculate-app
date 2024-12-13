import styled from "styled-components";
import DateHeader from "./date-pages/date-components/DateHeader";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  width: 70vw;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Date = (): JSX.Element => {
  return (
    <Container>
      <DateHeader />
      <Outlet />
    </Container>
  );
};

export default Date;
