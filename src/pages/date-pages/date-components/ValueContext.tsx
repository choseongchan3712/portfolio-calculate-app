import { createContext } from "react";

interface SecContextType {
  secValue: string;
  setSecValue: (value: string) => void;
}

interface BeforeContextType {
  before:string;
  setBefore: (value: string) => void;
}

interface AfterContextType {
  after:string;
  setAfter: (value: string) => void;
}

interface CountContextType {
  count: string;
  setCount: (value: string) =>void;
}

export const SecContext = createContext<SecContextType | null>(null);

export const BeforeContext = createContext<BeforeContextType | null>(null);

export const AfterContext = createContext<AfterContextType | null>(null);

export const CountContext = createContext<CountContextType | null>(null);