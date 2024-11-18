import styled from "styled-components";
import DateBody from "./date-components/DateBody";
import { colorStyle } from "../../GlobalStyled";
import { useContext } from "react";
import { DateContext } from "./date-components/DateContext";

const DayWrap = styled.div`
  color: black;
  padding: 10px;
  width: 100%;
  .today_wrap {
    padding: 20px 10px 50px 10px;
    text-align: center;
    font-size: 30px;
    span {
      color: ${colorStyle.pointColor};
    }
  }

  .calculate_wrap {
    width: 100%;
    padding: 10px;
    .what_days {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 10px 20px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      .date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 48%;
        form {
          width: 95%;
          input {
            position: relative;
            outline: none;
            border: none;
            height: 100%;
            width: 100%;
            color: #000;
            font-size: 20px;
            background-color: #eeeeee;
            padding: 10px;
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

        div {
          font-size: 24px;
        }
      }
      .days {
        width: 48%;
        font-size: 24px;
        display: flex;
        justify-content: flex-end;
        color: ${colorStyle.pointColor};
      }
    }

    .what_date {
      width: 100%;
      padding: 20px 10px 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      .days {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 48%;
        .days_contents {
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          form {
            width: 100%;
            display: flex;
            align-items: center;
            input {
              all: unset;
              height: 100%;
              width: 100%;
              color: #000;
              font-size: 20px;
              background-color: #eeeeee;
              padding: 10px;
              border-radius: 20px;
              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
          }
          div {
            font-size: 24px;
          }
        }

        .button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .before, .after {
            padding: 10px;
            font-size: 24px;
            color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
            border: 1px solid rgba(0, 0, 0, 0.3);
          }
          .before {
            border-radius: 10px 0 0 10px;
            border-right: none;
          }
          .after {
            border-radius: 0 10px 10px 0;
          }
        }
      }

      .date {
        font-size: 24px;
      }
    }
  }

  .reset {
    margin-top: 20px;
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
    font-size: 24px;
  }
`;

const Day = (): JSX.Element => {
  const {date} = useContext(DateContext)!;

  return (
    <DateBody>
      <DayWrap>
        <div className="today_wrap">
          {date} 기준으로 <br />
          오늘은 <span>1일째 날</span>입니다
        </div>

        <div className="calculate_wrap">
          <div className="what_days">
            <div className="date">
              <form>
                <input type="date" />
              </form>
              <div>은</div>
            </div>
            <div className="days">47일째 날</div>
          </div>

          <div className="what_date">
            <div className="days">
              <div className="days_contents">
                <form>
                  <input type="number" />
                </form>
                <div>일</div>
              </div>
              <div className="button">
                <div className="before">전</div>
                <div className="after">후</div>
              </div>
            </div>

            <div className="date">2025년 2월 23일</div>
          </div>
        </div>

        <div className="reset">초기화</div>
      </DayWrap>
    </DateBody>
  );
};

export default Day;
