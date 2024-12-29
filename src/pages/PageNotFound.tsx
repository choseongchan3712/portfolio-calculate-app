import styled from "styled-components";
import PageTitle from "../components/PageTitle";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 60px;
`;

const PageNotFound = () => {
  return (
    <>
    <PageTitle title="404"/>
      <Container>404!</Container>;
    </>
  );
};

export default PageNotFound;
