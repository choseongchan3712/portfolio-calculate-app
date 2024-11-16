import styled from "styled-components";
import DateHeader from "./date-pages/date-components/DateHeader";
import { Outlet } from "react-router-dom";

const Container = styled.div``;

const Date = ():JSX.Element => {
  return <Container>
    <DateHeader />
    <Outlet />
  </Container>;
};

export default Date;