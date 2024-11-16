import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 50px;
position: relative;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #000;
a {
  color: #fff;
}
`;

const DateHeader = ():JSX.Element => {
  return <Container>
    <Link to={""}>일수</Link>
    <Link to={"week"}>주수</Link>
    <Link to={"month"}>월수</Link>
    <Link to={"d-day"}>디데이카운트</Link>
  </Container>;
};

export default DateHeader;