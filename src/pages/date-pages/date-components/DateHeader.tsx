import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DateContext } from "./DateContext";
import { colorStyle } from "../../../GlobalStyled";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 15px;
  }
`;

const DateInput = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  .input_wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 480px) {
      gap: 8px;
    }

    label {
      font-size: 16px;
      color: #333;
      font-weight: 500;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }

    input {
      all: unset;
      width: 100%;
      height: 50px;
      padding: 0 15px;
      background-color: #f7f7f9;
      border-radius: 10px;
      font-size: 16px;
      color: #333;
      box-sizing: border-box;

      @media (max-width: 480px) {
        height: 45px;
        padding: 0 10px;
        font-size: 14px;
      }

      &::-webkit-calendar-picker-indicator {
        cursor: pointer;
      }
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  a {
    all: unset;
    flex: 1;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colorStyle.pointColor};
    color: white;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    text-decoration: none;

    @media (max-width: 480px) {
      height: 45px;
      font-size: 14px;
    }

    &:hover {
      background-color: #e48c09;
    }

    &:last-child {
      background-color: #e9ecef;
      color: #495057;

      &:hover {
        background-color: #dee2e6;
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
      <DateInput>
        <div className="input_wrap">
          <label htmlFor="what_date">기준일</label>
          <input type="date" id="what_date" ref={dateRef} value={date} onChange={dateHandler}/>
        </div>
      </DateInput>

      <ButtonWrap>
        <Link to={""}>일수</Link>
        <Link to={"week"}>주수</Link>
        <Link to={"month"}>월수</Link>
        <Link to={"d-day"}>디데이카운트</Link>
      </ButtonWrap>
    </Container>
  );
};

export default DateHeader;
