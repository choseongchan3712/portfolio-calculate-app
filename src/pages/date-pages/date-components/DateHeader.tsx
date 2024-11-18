import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DateContext } from "./DateContext";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px 20px 0 0;

  .date {
    padding: 20px;
    width: 95%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    label {
      color: #000;
      padding-right: 20px;
      font-size: 20px;
    }
    #what_date {
      position: relative;
      outline: none;
      border: none;
      height: 100%;
      width: 80%;
      color: #000;
      font-size: 20px;
      background-color: #eeeeee;
      padding-left: 10px;
      border-radius: 20px;
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
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #000;
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
