import { useContext } from "react";
import DateBody from "./date-components/DateBody";
import { DateContext } from "./date-components/DateContext";

const Month = (): JSX.Element => {
  const {date} = useContext(DateContext)!;
  return (
    // <DateBody date={date} />
    <></>
  );
};

export default Month;
