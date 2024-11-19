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

const DDay = (): JSX.Element => {
  const {date} = useContext(DateContext)!;
  const { secValue } = useContext(SecContext)!;
  const { before } = useContext(BeforeContext)!;
  const { count } = useContext(CountContext)!;

  const firstCalculating = (value: string): string => {
    if (moment(value).startOf("day").isAfter(moment().startOf("day"))) {
      const result: string = `D-${moment(value).diff(moment(), "days") + 1}`;
      return result;
    } else if (moment(value).startOf("day").isBefore(moment().startOf("day"))) {
      const result: string = `D+${
        moment().diff(moment(value), "days")
      }`;
      return result;
    } else {
      const result: string = `D-day`;
      return result;
    }
  };

  const firstCalString: string = firstCalculating(date);

  const secCalculating = (value: string): string => {
    if (moment(value).startOf("day").isAfter(moment(secValue).startOf("day"))) {
      const result: string = `D-${moment(value).diff(
        moment(secValue),
        "days"
      )}`;
      return result;
    } else if (
      moment(value).startOf("day").isBefore(moment(secValue).startOf("day"))
    ) {
      const result: string = `D+${
        moment(secValue).diff(moment(value), "days")
      }`;
      return result;
    } else {
      const result: string = `D-day`;
      return result;
    }
  };

  const secondCalString: string = secCalculating(date);

  const countCalculating = (): string => {
    if (before === "before active") {
      const result: string = `${moment(date)
        .subtract(count, "days")
        .format("LL")}`;
      return result;
    } else {
      const result: string = `${moment(date).add(count, "days").format("LL")}`;
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
      whatUnit="일"
    />
  );
};

export default DDay;
