import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DateContext } from "./DateContext";
import { colorStyle } from "../../../GlobalStyled";

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  margin-top: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .date {
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
    label {
      color: #333;
      padding-right: 20px;
      font-size: 16px;
      font-weight: 500;
    }
    
    #what_date {
      position: relative;
      outline: none;
      border: none;
      height: 50px;
      width: 80%;
      color: #333;
      font-size: 16px;
      background-color: #f7f7f9;
      padding: 0 15px;
      border-radius: 10px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #f8f9fa;
      }
      
      &:focus {
        border: 1px solid ${colorStyle.pointColor};
      }
      
      &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        top: 0;
        left: 0;
      }
    }
  }

  .navigation {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f7f7f9;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
    a {
      text-decoration: none;
      color: #333;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 10px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #fff;
      }
    }
  }
`;

const DateHeader = (): JSX.Element => {
  const dateRef = useRef<HTMLInputElement | null>(null);
  const {date, setDate} = useContext(DateContext)!;
  useEffect(()=>{
    if (dateRef.current) {
      setDate(dateRef.current.value);
    }
  }, []);

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }; 

  return (
    <Container>
      <div className="date">
        <label htmlFor="what_date">기준일</label>
        <input type="date" id="what_date" ref={dateRef} value={date} onChange={dateHandler}/>
      </div>

      <div className="navigation">
        <Link to={""}>일수</Link>
        <Link to={"week"}>주수</Link>
        <Link to={"month"}>월수</Link>
        <Link to={"d-day"}>디데이카운트</Link>
      </div>
    </Container>
  );
};

export default DateHeader;
