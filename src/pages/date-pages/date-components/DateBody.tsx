import styled from "styled-components";
import moment from "moment";
import 'moment/locale/ko';
import { colorStyle } from "../../../GlobalStyled";
import { useContext} from "react";
import { AfterContext, BeforeContext, CountContext, SecContext } from "./ValueContext";
import { DateContext } from "./DateContext";

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DayWrap = styled.div`
  width: 100%;
  padding: 20px;
  color: #333;
  
  .today_wrap {
    padding: 15px;
    text-align: center;
    font-size: 24px;
    line-height: 36px;
    background-color: #f7f7f9;
    border-radius: 10px;
    margin-bottom: 20px;
    span {
      color: ${colorStyle.pointColor};
      font-weight: 500;
    }
  }

  .calculate_wrap {
    width: 100%;
    padding: 20px;
    background-color: #f7f7f9;
    border-radius: 10px;

    .what_days {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 15px;
      
      .date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 48%;
        
        form {
          width: 95%;
          input {
            all: unset;
            position: relative;
            height: 50px;
            width: 100%;
            color: #333;
            font-size: 16px;
            background-color: #fff;
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

        div {
          font-size: 16px;
          color: #333;
          display: flex;
          align-items: center;
          margin-left: 10px;
        }
      }
      
      .days {
        width: 48%;
        font-size: 16px;
        display: flex;
        justify-content: flex-end;
        color: ${colorStyle.pointColor};
        font-weight: 500;
      }
    }

    .what_date {
      width: 100%;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 15px;
      
      .days {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 48%;
        
        .days_contents {
          width: 82%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          
          form {
            width: 89%;
            display: flex;
            align-items: center;
            
            input {
              all: unset;
              height: 50px;
              width: 100%;
              color: #333;
              font-size: 16px;
              background-color: #fff;
              padding: 0 15px;
              border-radius: 10px;
              text-align: right;
              transition: all 0.3s ease;
              
              &:hover {
                background-color: #f8f9fa;
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
          }
          
          div {
            font-size: 16px;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-width: 50px;
            margin-left: 10px;
          }
        }

        .button {
          display: flex;
          align-items: center;
          gap: 1px;
          
          .before,
          .after {
            height: 50px;
            padding: 0 15px;
            font-size: 16px;
            color: #333;
            cursor: pointer;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            
            &:hover {
              background-color: #f8f9fa;
            }
          }
          
          .before {
            border-radius: 10px 0 0 10px;
          }
          
          .before.active {
            color: ${colorStyle.pointColor};
            font-weight: 500;
          }
          
          .after {
            border-radius: 0 10px 10px 0;
          }
          
          .after.active {
            color: ${colorStyle.pointColor};
            font-weight: 500;
          }
        }
      }

      .date {
        width: 48%;
        font-size: 16px;
        text-align: right;
        color: ${colorStyle.pointColor};
        font-weight: 500;
      }
    }
  }

  .reset {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #f8f9fa;
    }
  }
`;

interface DateType {
  setedDate: string;
  firstCal: string;
  secCal: string;
  countedDate: string;
  whatUnit:string;
}

const DateBody = ({setedDate, firstCal, secCal, countedDate, whatUnit}:DateType): JSX.Element => {
  moment.locale('ko');
  const {secValue, setSecValue} = useContext(SecContext)!;
  const {before, setBefore} = useContext(BeforeContext)!;
  const {after, setAfter} = useContext(AfterContext)!;
  const {count, setCount} = useContext(CountContext)!;
  const {setDate} = useContext(DateContext)!;

  const secHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSecValue(e.target.value);
  };

  const beforeHandler = () => {
    if (after === "after active") {
      setBefore("before active");
      setAfter("after");
    } else {
      setBefore("before active");
    }
  };

  const afterHandler = () => {
    if (before === "before active") {
      setBefore("before");
      setAfter("after active");
    } else {
      setAfter("after active");
    }
  };

  const countHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(e.target.value);
  };

  const resetHandler = () => {
    setDate(moment().format("YYYY-MM-DD"));
    setSecValue("2025-01-01");
    setCount("0");
    setBefore("before active");
    setAfter("after");
  }

  return (
    <Container>
      <DayWrap>
        <div className="today_wrap">
          {moment(setedDate).format("LL")} 기준으로 <br />
          오늘은 <span>{firstCal}</span>입니다
        </div>

        <div className="calculate_wrap">
          <div className="what_days">
            <div className="date">
              <form>
                <input type="date" value={secValue} onChange={secHandler}/>
              </form>
              <div>은</div>
            </div>
            <div className="days">{secCal}</div>
          </div>

          <div className="what_date">
            <div className="days">
              <div className="days_contents">
                <form>
                  <input type="number" onChange={countHandler} value={count}/>
                </form>
                <div>{whatUnit}</div>
              </div>
              <div className="button">
                <div className={before} onClick={beforeHandler}>전</div>
                <div className={after} onClick={afterHandler}>후</div>
              </div>
            </div>

            <div className="date">{countedDate}</div>
          </div>
        </div>

        <div className="reset" onClick={resetHandler}>초기화</div>
      </DayWrap>
    </Container>
  );
};

export default DateBody;
