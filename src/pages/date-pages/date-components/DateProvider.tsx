import { useState } from "react";
import { DateContext } from "./DateContext";

interface ChildrenType {
  children: React.ReactNode;
}

const dt = new Date();

const nowDate: string = `${dt.getFullYear()}-${
  dt.getMonth() + 1
}-${dt.getDate()}`;

const DateProvider = ({ children }: ChildrenType) => {
  const [date, setDate] = useState<string>(`${nowDate}`);
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
