import { useContext } from "react";
import DateBody from "./date-components/DateBody";
import { DateContext } from "./date-components/DateContext";
import moment from "moment";
import "moment/locale/ko";
import {
  BeforeContext,
  CountContext,
  SecContext,
} from "./date-components/ValueContext";

const Week = (): JSX.Element => {
  moment.locale("ko");

  const { date } = useContext(DateContext)!;
  const { secValue } = useContext(SecContext)!;
  const { before } = useContext(BeforeContext)!;
  const { count } = useContext(CountContext)!;

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

  const secCalculating = (): string => {
    if (moment(date).startOf("day").isAfter(moment(secValue).startOf("day"))) {
      if (moment(date).diff(moment(secValue), "days") < 7) {
        const result: string = `0주 ${moment(date).diff(
          moment(secValue),
          "days"
        )}일 전`;
        return result;
      } else if (
        moment(date).diff(moment(secValue), "days") > 7 &&
        moment(date).diff(moment(secValue), "days") % 7 !== 7
      ) {
        const result: string = `${moment(date).diff(
          moment(secValue),
          "weeks"
        )}주 ${moment(date).diff(moment(secValue), "days") % 7}일 전`;
        return result;
      } else {
        const result: string = `${moment(date).diff(
          moment(secValue),
          "weeks"
        )}주 전`;
        return result;
      }
    } else if (
      moment(date).startOf("day").isBefore(moment(secValue).startOf("day"))
    ) {
      if (moment(secValue).add(1, "days").diff(moment(date), "days") < 7) {
        const result: string = `0주 ${
          moment(secValue).diff(moment(date), "days") + 1
        }일째 날`;
        return result;
      } else if (
        moment(secValue).add(1, "days").diff(moment(date), "days") > 7 &&
        moment(secValue).add(1, "days").diff(moment(date), "days") % 7 !== 7
      ) {
        const result: string = `${moment(secValue)
          .add(1, "days")
          .diff(moment(date), "weeks")}주 ${
          moment(secValue).add(1, "days").diff(moment(date), "days") % 7
        }일째 날`;
        return result;
      } else {
        const result: string = `${moment(secValue)
          .add(1, "days")
          .diff(moment(date), "weeks")}주째 날`;
        return result;
      }
    } else {
      const result: string = `1일째 날`;
      return result;
    }
  };

  const secondCalString: string = secCalculating();

  const countCalculating = (): string => {
    if (before === "before active") {
      const result: string = `${moment(date)
        .subtract(count, "weeks")
        .format("LL")}`;
      return result;
    } else {
      const result: string = `${moment(date).add(count, "weeks").format("LL")}`;
      return result;
    }
  };

  const countingDate: string = countCalculating();

  return (
    <DateBody
      setedDate={date}
      firstCal={firstCalString}
      secCal={secondCalString}
      countedDate={countingDate}
      whatUnit="주"
    />
  );
};

export default Week;
