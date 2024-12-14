import styled from "styled-components";
import { buttonList } from "../list";
import Button from "./calculate-components/Button";
import Display from "./calculate-components/Display";
import { useState } from "react";
import { evaluate } from "mathjs";
import { colorStyle } from "../GlobalStyled";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "display display display display display display display display display display"
    "box0 box1 box2 box3 box4 box5 box6 box7 box8 box9"
    "box10 box11 box12 box13 box14 box15 box16 box17 box18 box19"
    "box20 box21 box22 box23 box24 box25 box26 box27 box28 box29"
    "box30 box31 box32 box33 box34 box35 box36 box37 box38 box39"
    "box40 box41 box42 box43 box44 box45 box46 box46 box47 box48";
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas:
      "display display display display display"
      "box0 box1 box2 box3 box4"
      "box5 box6 box7 box8 box9"
      "box10 box11 box12 box13 box14"
      "box15 box16 box17 box18 box19"
      "box20 box21 box22 box23 box24"
      "box25 box26 box27 box28 box29"
      "box30 box31 box32 box33 box34";
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-template-areas:
      "display display display display"
      "box0 box1 box2 box3"
      "box4 box5 box6 box7"
      "box8 box9 box10 box11"
      "box12 box13 box14 box15"
      "box16 box17 box18 box19"
      "box20 box21 box22 box23"
      "box24 box25 box26 box27"
      "box28 box29 box30 box31"
      "box32 box33 box34 box35";
    gap: 8px;
  }

  .box6,
  .box7,
  .box8 {
    background-color: #f7f7f9;
    color: #333;
    font-size: 16px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #f0f0f2;
    }
  }

  .box16,
  .box17,
  .box18,
  .box26,
  .box27,
  .box28,
  .box36,
  .box37,
  .box38,
  .box46,
  .box47 {
    background-color: #f7f7f9;
    color: #333;
    font-size: 16px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #f0f0f2;
    }
  }

  .box9,
  .box19,
  .box29,
  .box39,
  .box48 {
    background-color: ${colorStyle.pointColor};
    color: #fff;
    font-size: 16px;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const Calculate = (): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [memory, setMemory] = useState<number>(0);

  const clickHandler = (value: string): void => {
    console.log(value);
    if (value === "=") {
      try {
        setResult(evaluate(input).toString());
        setInput(evaluate(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("0");
    } else if (value === "±") {
      setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === "mc") {
      setMemory(0);
    } else if (value === "m+") {
      setMemory(memory + parseFloat(input));
    } else if (value === "m-") {
      setMemory(memory - parseFloat(input));
    } else if (value === "mr") {
      setInput(memory.toString());
    } else if (value === "2nd") {
      // 2nd 기능을 어떻게 구현할지 결정해야 함. 예를 들어, 추가적인 기능들을 활성화하는 방식.
    } else if (value === "x²") {
      setInput((prev) => Math.pow(parseFloat(prev), 2).toString());
    } else if (value === "x³") {
      setInput((prev) => Math.pow(parseFloat(prev), 3).toString());
    } else if (value === "xʸ") {
      setInput((prev) => prev + "**");
    } else if (value === "eˣ") {
      setInput((prev) => Math.exp(parseFloat(prev)).toString());
    } else if (value === "10ˣ") {
      setInput((prev) => Math.pow(10, parseFloat(prev)).toString());
    } else if (value === "¹/x") {
      setInput((prev) => (1 / parseFloat(prev)).toString());
    } else if (value === "√x") {
      setInput((prev) => Math.sqrt(parseFloat(prev)).toString());
    } else if (value === "∛x") {
      setInput((prev) => Math.cbrt(parseFloat(prev)).toString());
    } else if (value === "ⁿ√x") {
      setInput((prev) => prev + "nthRoot");
    } else if (value === "ln") {
      setInput((prev) => Math.log(parseFloat(prev)).toString());
    } else if (value === "log₁₀") {
      setInput((prev) => Math.log10(parseFloat(prev)).toString());
    } else if (value === "x!") {
      setInput((prev) => factorial(parseInt(prev)).toString());
    } else if (value === "sin") {
      setInput((prev) => Math.sin(toRadians(parseFloat(prev))).toString());
    } else if (value === "cos") {
      setInput((prev) => Math.cos(toRadians(parseFloat(prev))).toString());
    } else if (value === "tan") {
      setInput((prev) => Math.tan(toRadians(parseFloat(prev))).toString());
    } else if (value === "e") {
      setInput((prev) => Math.E.toString());
    } else if (value === "EE") {
      setInput((prev) => prev + "e");
    } else if (value === "Rad") {
      // Rad 기능을 구현하려면 추가적인 구현이 필요합니다.
    } else if (value === "sinh") {
      setInput((prev) => Math.sinh(parseFloat(prev)).toString());
    } else if (value === "cosh") {
      setInput((prev) => Math.cosh(parseFloat(prev)).toString());
    } else if (value === "tanh") {
      setInput((prev) => Math.tanh(parseFloat(prev)).toString());
    } else if (value === "π") {
      setInput((prev) => Math.PI.toString());
    } else if (value === "Rand") {
      setInput((prev) => Math.random().toString());
    } else {
      if (input.includes("nthRoot")) {
        const firstNum = (input: string) => input.replace("nthRoot", "");
        const first = firstNum(input);
        setInput(Math.pow(Number(first), 1 / Number(value)).toString())
        console.log(input);
      } else {
        setInput((prev) => prev + value);
        setResult("");
      }
    }
  };

  const factorial = (n: number): number => {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const toRadians = (degree: number): number => {
    return (degree * Math.PI) / 180;
  };

  return (
    <Container>
      <Display value={result || input} />
      {/*  */}
      {buttonList.map((data, index) => (
        <Button
          key={index}
          label={data}
          onClick={() => clickHandler(data)}
          num={"box" + String(index)}
        />
      ))}
    </Container>
  );
};

export default Calculate;

//! parseFloat(): 문자열에 숫자가 포함되어 있을 경우 해당 숫자 값을 소수점까지 포함하여 변환할 수 있음. 사용자로부터 string값을 number로 변환하여 계산할 때 유용하게 사용함.
//? 예: parseFloat("123.45") => 123.45; parseFloat("123abc") => 123

//! startsWith(): 문자열이 특정 문자나 문자열로 시작하는지를 확인하는데 사용됨. 반환값은 boolean
//? 예: string.startsWith(searchString, position): searchString => 문자열의 시작 부분에서 찾고자 하는 문자나 문자열을 지정함; position (선택 사항) => 검사할 시작 위치를 지정하며, 기본값은 0임

//! eval & evaluate:
//? eval은 string으로 전달된 값을 코드로 실행함(수학적 계산 가능), 하지만 보안 및 성능 문제로 경고가 발생.
//? 안전하게 사용할려면 mathjs라이브러리의 evaluate로 eval 대체 가능, evaluate은 자바스크립트 코드가 아닌 수학 수식만 처리하고, 잘못된 수식이 들어오면 error을 반환하여 보안 위험이 낮음.
