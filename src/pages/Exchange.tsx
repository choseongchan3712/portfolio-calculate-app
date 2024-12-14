import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getExchangeRates } from "../api";
import { colorStyle } from "../GlobalStyled";

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 80%;
  max-width: 800px;
  padding: 20px;
  background-color: #f7f7f9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 200px;
`;

const Contents = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Before = styled.form`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  select {
    all: unset;
    height: 100%;
    width: 30%;
    background-color: #f7f7f9;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #f0f0f2;
    }
    
    option {
      font-size: 16px;
      background-color: #fff;
    }
  }
  input {
    all: unset;
    width: 60%;
    height: 100%;
    background-color: #f7f7f9;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    text-align: end;
    box-sizing: border-box;
    padding: 0 15px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #f0f0f2;
    }
    
    &:focus {
      border: 1px solid ${colorStyle.pointColor};
    }
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .name {
    width: 10%;
    height: 100%;
    background-color: #f7f7f9;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 0 10px 10px 0;
  }
`;

const After = styled.form`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  select {
    all: unset;
    height: 100%;
    width: 30%;
    background-color: #f7f7f9;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #f0f0f2;
    }
    
    option {
      font-size: 16px;
      background-color: #fff;
    }
  }
  input {
    all: unset;
    width: 60%;
    height: 100%;
    background-color: #f7f7f9;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    text-align: end;
    box-sizing: border-box;
    padding: 0 15px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #f0f0f2;
    }
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .name {
    width: 10%;
    height: 100%;
    background-color: #f7f7f9;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 0 10px 10px 0;
  }
`;

const Exchange = (): JSX.Element => {
  const valueName = useRef<HTMLSelectElement | null>(null);
  const exchangeName = useRef<HTMLSelectElement | null>(null);
  const wantRef = useRef<HTMLInputElement | null>(null);
  const doRef = useRef<HTMLInputElement | null>(null);
  const [selectValue, setSelectValue] = useState<string>("");
  const [exchangeValue, setExchangeValue] = useState<string>("");
  const [wantValue, setWantValue] = useState<number>(0);
  const [doValue, setDoValue] = useState<number>(0);

  const [krwData, setKrwData] = useState<number>(0);
  const [cnyData, setCnyData] = useState<number>(0);
  const [jpyData, setJpyData] = useState<number>(0);
  const [eurData, setEurData] = useState<number>(0);

  useEffect(() => {
    if (valueName.current && exchangeName.current) {
      setSelectValue(valueName.current.value);
      setExchangeValue(exchangeName.current.value);
    }

    if (wantRef.current && doRef.current) {
      setWantValue(parseFloat(wantRef.current.value)); //!
      setDoValue(parseFloat(doRef.current.value));
    }

    (async () => {
      try {
        const response = await getExchangeRates();
        setKrwData(response?.data?.rates?.KRW);
        setCnyData(response?.data?.rates?.CNY);
        setJpyData(response?.data?.rates?.JPY);
        setEurData(response?.data?.rates?.EUR);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const krwValue: number = krwData;

  const cnyValue: number = cnyData;

  const jpyValue: number = jpyData;

  const eurValue: number = eurData;

  const valueList: [string, number][] = [
    ["KRW", krwValue],
    ["CNY", cnyValue],
    ["JPY", jpyValue],
    ["EUR", eurValue],
    ["USD", 1],
  ];

  const beChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };
  const aftChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExchangeValue(e.target.value);
  };

  const doExchangeCal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWantValue(Number(e.target.value));
  };

  useEffect(() => {
    if (selectValue === "USD" && exchangeValue === "USD") {
      if (wantValue) {
        setDoValue(wantValue);
      } else if (!wantValue) {
        setDoValue(0);
      }
    } else if (selectValue === "USD" && exchangeValue !== "USD") {
      if (wantValue) {
        const nowValue = valueList.find(
          ([key, _]) => key === `${exchangeValue}`
        );
        setDoValue(wantValue * (nowValue?.[1] || 0)); //!
      } else if (!wantValue) {
        setDoValue(0);
      }
    } else if (selectValue !== "USD" && exchangeValue === "USD") {
      if (wantValue) {
        const nowValue = valueList.find(([key, _]) => key === `${selectValue}`);
        if (nowValue !== undefined) {
          setDoValue(wantValue / nowValue[1]);
        }
      } else if (!wantValue) {
        setDoValue(0);
      }
    } else if (selectValue !== "USD" && exchangeValue !== "USD") {
      if (wantValue) {
        const nowSelectValue = valueList.find(
          ([key, _]) => key === `${selectValue}`
        );
        const nowExchangeValue = valueList.find(
          ([key, _]) => key === `${exchangeValue}`
        );
        if (nowSelectValue !== undefined && nowExchangeValue !== undefined) {
          setDoValue(wantValue * (nowExchangeValue[1] / nowSelectValue[1]));
        }
      } else if (!wantValue) {
        setDoValue(0);
      }
    }
  }, [wantValue, selectValue, exchangeValue]);

  return (
    <Container>
      <Contents>
        <Before>
          <select ref={valueName} onChange={beChangeHandler}>
            <option value="USD">미국</option>
            <option value="KRW">한국</option>
            <option value="CNY">중국</option>
            <option value="JPY">일본</option>
            <option value="EUR">유로</option>
          </select>
          <input
            type="number"
            ref={wantRef}
            onChange={doExchangeCal}
            placeholder="0"
          />
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
          <input type="number" ref={doRef} value={doValue} readOnly />
          <div className="name">{exchangeValue}</div>
        </After>
      </Contents>
    </Container>
  );
};

export default Exchange;
