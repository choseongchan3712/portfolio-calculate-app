import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getExchangeRates } from "../api";

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
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    color: black;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 900;
    border-radius: 20px 0 0 20px;
    line-height: 105%;
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
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
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
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    color: black;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 900;
    border-radius: 20px 0 0 20px;
    line-height: 105%;
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
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
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
