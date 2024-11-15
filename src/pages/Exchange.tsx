import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: calc(100vh - 70px);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Before = styled.form`
  width: 80%;
  height: 5vw;
  margin-bottom: 20px;
  display: flex;
  select {
    all: unset;
    height: 100%;
    width: 30%;
    background-color: #f7f7f9;
    border-right: 1px solid rgba(0, 0, 0 ,0.3);
    color: black;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 900;
    border-radius: 20px 0 0 20px;
    option {
      font-size: 16px;
    }
  }
  input {
    all: unset;
    width: 60%;
    height: 100%;
    background-color: #fff;
    color: black;
    font-size: 40px;
    font-weight: 900;
    text-align: end;
    box-sizing: border-box;
    padding-right: 10px;
  }
  .name {
    width: 10%;
    height: 100%;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 900;
    border-radius: 0 20px 20px 0;
  }
`;
const After = styled.form`
  width: 80%;
  height: 5vw;
  margin-bottom: 20px;
  display: flex;
  select {
    all: unset;
    height: 100%;
    width: 30%;
    background-color: #f7f7f9;
    border-right: 1px solid rgba(0, 0, 0 ,0.3);
    color: black;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 900;
    border-radius: 20px 0 0 20px;
    option {
      font-size: 16px;
    }
  }
  input {
    all: unset;
    width: 60%;
    height: 100%;
    background-color: #fff;
    color: black;
    font-size: 40px;
    font-weight: 900;
    text-align: end;
    box-sizing: border-box;
    padding-right: 10px;
  }
  .name {
    width: 10%;
    height: 100%;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 900;
    border-radius: 0 20px 20px 0;
  }
`;

const Exchange = (): JSX.Element => {
  const valueName = useRef<HTMLSelectElement | null>(null);
  const exchangeName = useRef<HTMLSelectElement | null>(null);
  const [selectValue, setSelectValue] = useState<string>('');
  const [exchangeValue, setExchangeValue] = useState<string>('');
  useEffect(()=>{
    if(valueName.current && exchangeName.current) {
      setSelectValue(valueName.current.value);
      setExchangeValue(exchangeName.current.value);
    }
  }, []);

  const beChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  }
  const aftChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setExchangeValue(e.target.value);
  }

  return (
    <Container>
      <Contents>
        <Before>
          <select ref={valueName} onChange={beChangeHandler}>
            <option value="KRW">한국</option>
            <option value="USD">미국</option>
            <option value="CNY">중국</option>
            <option value="JPY">일본</option>
            <option value="EUR">유로</option>
          </select>
          <input type="text" />
          <div className="name">{selectValue}</div>
        </Before>
        <After>
        <select ref={exchangeName} onChange={aftChangeHandler}>
            <option value="KRW">한국</option>
            <option value="USD">미국</option>
            <option value="CNY">중국</option>
            <option value="JPY">일본</option>
            <option value="EUR">유로</option>
          </select>
          <input type="text" />
          <div className="name">{exchangeValue}</div>
        </After>
      </Contents>
    </Container>
  );
};

export default Exchange;
