import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getExchangeRates } from "../api";
import { colorStyle } from "../GlobalStyled";
import PageTitle from "../components/PageTitle";

const ExchangeWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
    border-radius: 0;
  }
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 15px;
  }

  .input_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

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
    }
  }

  .select_wrap {
    width: 100%;
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }

    select {
      all: unset;
      flex: 1;
      height: 50px;
      padding: 0 15px;
      background-color: #f7f7f9;
      border-radius: 10px;
      font-size: 16px;
      color: #333;
      cursor: pointer;

      @media (max-width: 480px) {
        height: 45px;
        padding: 0 10px;
        font-size: 14px;
      }
    }
  }

  .result_wrap {
    width: 100%;
    padding: 20px;
    background-color: #f7f7f9;
    border-radius: 10px;

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }

    p {
      font-size: 18px;
      color: #333;
      text-align: center;
      line-height: 1.5;

      @media (max-width: 768px) {
        font-size: 16px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
      }

      span {
        color: ${colorStyle.pointColor};
        font-weight: 500;
      }
    }
  }

  button {
    all: unset;
    width: 100%;
    height: 50px;
    background-color: ${colorStyle.pointColor};
    color: white;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    box-sizing: border-box;

    &:hover {
      background-color: #e48c09;
    }

    @media (max-width: 480px) {
      height: 45px;
      font-size: 14px;
    }
  }
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
    <>
    <PageTitle title="환율계산기"/>
      <ExchangeWrapper>
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
      </ExchangeWrapper>
    </>
  );
};

export default Exchange;
