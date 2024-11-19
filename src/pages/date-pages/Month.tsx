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

const Month = (): JSX.Element => {
  moment.locale("ko");

  const { date } = useContext(DateContext)!;
  const { secValue } = useContext(SecContext)!;
  const { before } = useContext(BeforeContext)!;
  const { count } = useContext(CountContext)!;

  const firstCalculating = (): string => {
    if (moment(date).startOf("day").isAfter(moment().startOf("day"))) {
      if (moment(date).diff(moment(), "days") + 1 < 30) {
        const result: string = `0개월 ${
          moment(date).diff(moment(), "days") + 1
        }일 전`;
        return result;
      } else if (
        moment(date).diff(moment(), "days") + 1 > 30 &&
        (moment(date).diff(moment(), "days") + 1) % 30 !== 0
      ) {
        const result: string = `${moment(date)
          .add(1, "days")
          .diff(moment(), "months")}개월 ${
          (moment(date).diff(moment(), "days") + 1) % 30
        }일 전`;
        return result;
      } else {
        const result: string = `${moment(date)
          .add(1, "days")
          .diff(moment(), "months")}개월 전`;
        return result;
      }
    } else if (moment(date).startOf("day").isBefore(moment().startOf("day"))) {
      if (moment().add(1, "days").diff(moment(date), "days") < 30) {
        const result: string = `0개월 ${
          moment().diff(moment(date), "days") + 1
        }일째 날`;
        return result;
      } else if (
        moment().add(1, "days").diff(moment(date), "days") > 30 &&
        moment().add(1, "days").diff(moment(date), "days") % 30 !== 0
      ) {
        const result: string = `${moment()
          .add(1, "days")
          .diff(moment(date), "months")}개월 ${
          moment().add(1, "days").diff(moment(date), "days") % 30
        }일째 날`;
        return result;
      } else {
        const result: string = `${moment()
          .add(1, "days")
          .diff(moment(date), "months")}개월째 날`;
        return result;
      }
    } else {
      const result: string = `0 개월 1일째 날`;
      return result;
    }
  };

  const firstCalString: string = firstCalculating();

  const secCalculating = (): string => {
    if (moment(date).startOf("day").isAfter(moment(secValue).startOf("day"))) {
      if (moment(date).diff(moment(secValue), "days") < 30) {
        const result: string = `0개월 ${moment(date).diff(
          moment(secValue),
          "days"
        )}일 전`;
        return result;
      } else if (
        moment(date).diff(moment(secValue), "days") > 30 &&
        moment(date).diff(moment(secValue), "days") % 30 !== 0
      ) {
        const result: string = `${moment(date).diff(
          moment(secValue),
          "months"
        )}개월 ${moment(date).diff(moment(secValue), "days") % 30}일 전`;
        return result;
      } else {
        const result: string = `${moment(date).diff(
          moment(secValue),
          "months"
        )}개월 전`;
        return result;
      }
    } else if (
      moment(date).startOf("day").isBefore(moment(secValue).startOf("day"))
    ) {
      if (moment(secValue).add(1, "days").diff(moment(date), "days") < 30) {
        const result: string = `0개월 ${
          moment(secValue).diff(moment(date), "days") + 1
        }일째 날`;
        return result;
      } else if (
        moment(secValue).add(1, "days").diff(moment(date), "days") > 30 &&
        moment(secValue).add(1, "days").diff(moment(date), "days") % 30 !== 0
      ) {
        const result: string = `${moment(secValue)
          .add(1, "days")
          .diff(moment(date), "months")}개월 ${
          moment(secValue).add(1, "days").diff(moment(date), "days") % 30
        }일째 날`;
        return result;
      } else {
        const result: string = `${moment(secValue)
          .add(1, "days")
          .diff(moment(date), "months")}개월째 날`;
        return result;
      }
    } else {
      const result: string = `0개월 1일째 날`;
      return result;
    }
  };

  const secondCalString: string = secCalculating();

  const countCalculating = (): string => {
    if (before === "before active") {
      const result: string = `${moment(date)
        .subtract(count, "months")
        .format("LL")}`;
      return result;
    } else {
      const result: string = `${moment(date).add(count, "months").format("LL")}`;
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
      whatUnit="개월"
    />
  );
};

export default Month;
