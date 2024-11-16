import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
height: 70px;
background-color: #000;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Menu = styled.div`
color: #fff;
display: flex;
align-items: center;
justify-content: center;
a {
  display: block;
  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;



const Header = ():JSX.Element => {
  return <Container>
      <Menu>
        <Link to={"/"}>공학계산기</Link>
      </Menu>
      <Menu>
        <Link to={"/exchange"}>환율계산기</Link>
      </Menu>
      <Menu>
        <Link to={"/date"}>날짜계산기</Link>
      </Menu>
      <Menu>
        <Link to={"/"}>시급계산기</Link>
      </Menu>


  </Container>;
};

export default Header;