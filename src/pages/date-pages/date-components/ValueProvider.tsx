import { useState } from "react";
import {
  AfterContext,
  BeforeContext,
  CountContext,
  SecContext,
} from "./ValueContext";

interface ChildrenType {
  children: React.ReactNode;
}

export const SecProvider = ({ children }: ChildrenType): JSX.Element => {
  const [secValue, setSecValue] = useState<string>("2025-01-01");
  return (
    <SecContext.Provider value={{ secValue, setSecValue }}>
      {children}
    </SecContext.Provider>
  );
};

export const BeforeProvider = ({ children }: ChildrenType): JSX.Element => {
  const [before, setBefore] = useState<string>("before active");
  return (
    <BeforeContext.Provider value={{ before, setBefore }}>
      {children}
    </BeforeContext.Provider>
  );
};

export const AfterProvider = ({ children }: ChildrenType): JSX.Element => {
  const [after, setAfter] = useState<string>("after");
  return (
    <AfterContext.Provider value={{ after, setAfter }}>
      {children}
    </AfterContext.Provider>
  );
};

export const CountProvider = ({ children }: ChildrenType): JSX.Element => {
  const [count, setCount] = useState<string>('0');
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
