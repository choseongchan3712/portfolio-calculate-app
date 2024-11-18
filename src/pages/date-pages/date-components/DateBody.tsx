import styled from "styled-components";

const Container = styled.div`
width: 100%;
padding: 20px;
background-color: #fff;
border-radius: 0 0 20px 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

interface ChildrenPropos {
  children: React.ReactNode;
}

const DateBody = ({ children }: ChildrenPropos): JSX.Element => {
  return <Container>{children}</Container>;
};

export default DateBody;
