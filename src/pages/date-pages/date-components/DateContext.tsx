import { createContext } from "react";

interface DateContextType {
  date: string;
  setDate: (value: string) => void;
}

export const DateContext = createContext<DateContextType | null> (null);

