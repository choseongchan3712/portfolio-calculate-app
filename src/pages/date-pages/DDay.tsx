import { useContext } from "react";
import DateBody from "./date-components/DateBody";
import { DateContext } from "./date-components/DateContext";

const DDay = (): JSX.Element => {
  const {date} = useContext(DateContext)!;
  return (
    // <DateBody date={date} />
    <></>
  );
};

export default DDay;
