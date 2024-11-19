import { useContext } from "react";
import DateBody from "./date-components/DateBody";
import { DateContext } from "./date-components/DateContext";
import moment from "moment";
import "moment/locale/ko";

const Week = (): JSX.Element => {
  moment.locale("ko");

  const { date } = useContext(DateContext)!;

  console.log(moment().diff(moment(date), "weeks"));
  console.log(moment().diff(moment(date), "days"));
  console.log(moment(date).add(1, "days"));

  const firstCalculating = (): string => {
    if (moment(date).startOf("day").isAfter(moment().startOf("day"))) {
      if (moment(date).diff(moment(), "days") + 1 < 7) {
        const result: string = `0주 ${
          moment(date).diff(moment(), "days") + 1
        }일 전`;
        return result;
      } else if (
        moment(date).diff(moment(), "days") + 1 > 7 &&
        (moment(date).diff(moment(), "days") + 1) % 7 !== 7
      ) {
        const result: string = `${moment(date)
          .add(1, "days")
          .diff(moment(), "weeks")}주 ${
          (moment(date).diff(moment(), "days") + 1) % 7
        }일 전`;
        return result;
      } else {
        const result: string = `${moment(date)
          .add(1, "days")
          .diff(moment(), "weeks")}주 전`;
        return result;
      }
    } else if (moment(date).startOf("day").isBefore(moment().startOf("day"))) {
      if (moment().add(1, "days").diff(moment(date), "days") < 7) {
        const result: string = `0주 ${
          moment().diff(moment(date), "days") + 1
        }일째 날`;
        return result;
      } else if (
        moment().add(1, "days").diff(moment(date), "days") > 7 &&
        moment().add(1, "days").diff(moment(date), "days") % 7 !== 7
      ) {
        const result: string = `${moment()
          .add(1, "days")
          .diff(moment(date), "weeks")}주 ${
          moment().add(1, "days").diff(moment(date), "days") % 7
        }일째 날`;
        return result;
      } else {
        const result: string = `${moment()
          .add(1, "days")
          .diff(moment(date), "weeks")}주째 날`;
        return result;
      }
    } else {
      const result: string = `0 주 1일째 날`;
      return result;
    }
  };

  const firstCalString: string = firstCalculating();

  return (
    <DateBody
      setedDate={date}
      firstCal={firstCalString}
      secCal="dd"
      countedDate="dd"
      whatUnit="주"
    />
  );
};

export default Week;
