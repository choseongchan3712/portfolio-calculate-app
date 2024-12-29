import styled from "styled-components";
import DateHeader from "./date-pages/date-components/DateHeader";
import { Outlet } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 80%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Date = (): JSX.Element => {
  return (
    <>
    <PageTitle title="날짜계산기"/>
      <Container>
        <Wrapper>
          <DateHeader />
          <Outlet />
        </Wrapper>
      </Container>
    </>
  );
};

export default Date;
