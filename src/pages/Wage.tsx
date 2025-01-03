// # 근로소득공제금액(공제한도 2,000만원)
// (1) 500만원 이하: 총급여액의 70%
// (2) 500만원 초과 1,500만원 이하: 350만원 ＋ (총급여액 - 500만원) × 40%
// (3) 1,500만원 초과 4,500만원 이하: 750만원 ＋ (총급여액 - 1,500만원) × 15%
// (4) 4,500만원 초과 1억원 이하: 1,200만원 ＋ (총급여액 - 4,500만원) × 5%
// (5) 1억원 초과: 1,475만원 ＋ (총급여액 - 1억원) × 2%

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { colorStyle } from "../GlobalStyled";
import PageTitle from "../components/PageTitle";

// # 근로소득금액 = 총급여 - 근로소득공제금액 - 비과세액

// # 과세표준구간별 종합소득세 세율
// (1) 1400만원 이하: 세율6%
// (2) 1400만원 초과 5000만원 이하: 세율15% 누진공제:1,260,000원
// (3) 5000만원 초과 8800만원 이하: 세율24% 누진공제:5,760,000원
// (4) 8800만원 초과 1억5000만원 이하: 세율35% 누진공제:15,440,000원
// (5) 1억5000만원 초과 3억원 이하: 세율38% 누진공제:19,940,000원
// (6) 3억원 초과 5억원 이하: 세율40% 누진공제:25,940,000원
// (7) 5억원 초과 10억원 이하: 세율42% 누진공제:35,940,000원
// (8) 10억원 초과: 세율 45% 누진공제:65,940,000원

//# 근로소득세액공제
// (1) 130만원 이하: 산출세액의 55%
// (2) 130만원 초과: 71만5천원＋130만원 초과금액의 30%

// # 국민연금: 총급여의 4.5%

// #건강보험: 총급여의 3.545%

// #장기요양보험: 건강보험료 * 12.81%

// #고용보험: 총급여의 0.9%

// #비과세액: 연 보통 240만원

//? 실수령액 = 총급여액 - 소득세((근로소득금액(총급여(- 비과세액) - 근로소득공제금액 - 기본공제 - 연금보험료공제 - 특별소득공제)*세율) - 근로소득세액공제) - 지방소득세(소득세10%) - (국민연금 + 건강보험 + 장기요양보험 + 고용보험)

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

const WageWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
    border-radius: 0;
  }
`;

const StyledForm = styled.form`
  .select_wrap {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;

    select {
      all: unset;
      width: 120px;
      height: 50px;
      background-color: #f7f7f9;
      border-radius: 10px;
      padding: 0 15px;
      font-size: 16px;
      color: #000;
      display: flex;
      align-items: center;

      @media (max-width: 480px) {
        width: 100px;
        padding: 0 10px;
        font-size: 14px;
      }
    }

    input {
      all: unset;
      flex: 1;
      height: 50px;
      background-color: #f7f7f9;
      border-radius: 10px;
      padding: 0 15px;
      font-size: 16px;
      text-align: right;

      @media (max-width: 480px) {
        height: 45px;
        padding: 0 10px;
        font-size: 14px;
      }
    }

    span {
      font-size: 16px;
      color: #333;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  .insurance_wrap {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }

    label {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;
      color: #333;

      input {
        all: unset;
        height: 50px;
        background-color: #f7f7f9;
        border-radius: 10px;
        padding: 0 15px;
        font-size: 16px;
        text-align: right;

        @media (max-width: 480px) {
          height: 45px;
          padding: 0 10px;
          font-size: 14px;
        }
      }
    }
  }

  .non_tax {
    margin-bottom: 20px;

    label {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;
      color: #333;

      input {
        all: unset;
        width: 100%;
        height: 50px;
        background-color: #f7f7f9;
        border-radius: 10px;
        padding: 0 15px;
        font-size: 16px;
        text-align: right;
        box-sizing: border-box;

        @media (max-width: 480px) {
          height: 45px;
          padding: 0 10px;
          font-size: 14px;
        }
      }
    }
  }

  button {
    all: unset;
    width: 100%;
    height: 50px;
    background-color: ${colorStyle.pointColor};
    color: white;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    box-sizing: border-box;

    &:hover {
      background-color: #e48c09;
    }

    @media (max-width: 480px) {
      height: 45px;
      font-size: 14px;
    }
  }
`;

const ResultSection = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 20px;
  }

  .result {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;

    @media (max-width: 480px) {
      gap: 10px;
    }

    select {
      all: unset;
      width: 120px;
      height: 50px;
      background-color: #fff;
      border-radius: 10px;
      padding: 0 15px;
      font-size: 16px;
      color: #000;
      display: flex;
      align-items: center;

      @media (max-width: 480px) {
        width: 100px;
        height: 45px;
        padding: 0 10px;
        font-size: 14px;
      }
    }

    span {
      flex: 1;
      font-size: 18px;
      font-weight: 600;
      color: #333;
      text-align: right;

      @media (max-width: 768px) {
        font-size: 16px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  button {
    all: unset;
    width: 100%;
    height: 50px;
    background-color: #e9ecef;
    color: #495057;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    box-sizing: border-box;

    &:hover {
      background-color: #dee2e6;
    }

    @media (max-width: 480px) {
      height: 45px;
      font-size: 14px;
    }
  }
`;

const Wage = (): JSX.Element => {
  const [select, setSelect] = useState<string>();
  const [input, setInput] = useState<string>();
  const [famNum, setFamNum] = useState<string>();
  const [childNum, setChildNum] = useState<string>();
  const [nonTax, setNonTax] = useState<string>();
  const [result, setResult] = useState<string | null>(null);
  const [actual, setActual] = useState<string>();
  const [salary, setSalary] = useState<string>("");
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [taxableIncome, setTaxableIncome] = useState<string>();
  const [taxableAnnualSalary, setTaxableAnnualSalary] = useState<string>();
  const [numberOfDeduction, setNumberOfDeduction] = useState<string>();
  const [earnedIncomeDeductionCal, setEarnedIncomeDeductionCal] =
    useState<string>();
  const [earnedIncomeDeduction, setEarnedIncomeDeduction] = useState<string>();
  const [basicDeduction, setBasicDeduction] = useState<string>();
  const [pensionDeduction, setPensionDeduction] = useState<string>();
  const [specialIncomeDeduction, setSpecialIncomeDeduction] =
    useState<string>();
  const [earnedIncome, setEarnedIncome] = useState<string>();
  const [incomeTax, setIncomeTax] = useState<string>();
  const [taxDeduction, settaxDeduction] = useState<string>();
  const [childTaxCredit, setChildTaxCredit] = useState<string>();
  const [finalIncomeTax, setFinalIncomeTax] = useState<string>();
  const [localIncomeTax, setLocalIncomeTax] = useState<string>();
  const [nationalPension, setNationalPension] = useState<string>();
  const [healthInsurance, setHealthInsurance] = useState<string>();
  const [careInsurance, setcareInsurance] = useState<string>();
  const [employmentInsurance, setEmploymentInsurance] = useState<string>();
  const [actualSalary, setActualSalary] = useState<string>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setSelect(`${data.select}`);
    setInput(`${data.input_value}`);
    setFamNum(`${data.fam_num}`);
    setChildNum(`${data.child_num}`);
    setNonTax(`${data.non_tax}`);
    reset();
  };

  useEffect(() => {
    if (input) {
      if (select === "월급") {
        setSalary(input);
      } else if (select === "주급") {
        setSalary((parseFloat(input) * 4).toString());
      } else if (select === "연봉") {
        setSalary((parseFloat(input) / 12).toString());
      }
    }
  }, [input]);

  useEffect(() => {
    // const salary: string = "4500000"; //! 월급

    // const annualSalary: string= (parseFloat(salary)*12).toString();

    if (salary && famNum && childNum && nonTax) {
      const nonTaxableAmount: string = nonTax; //! 비과세액

      setTaxableIncome(
        (parseFloat(salary) - parseFloat(nonTaxableAmount)).toString()
      ); //! 과세소득

      setTaxableAnnualSalary((parseFloat(taxableIncome!) * 12).toString()); //! 과세연봉

      const numberOfFamily: string = famNum; //! 가족수

      const numberOfChildren: string = childNum; //! 자녀수

      setNumberOfDeduction(
        (parseFloat(numberOfFamily) + parseFloat(numberOfChildren)).toString()
      ); //! 공제대상자

      setEarnedIncomeDeductionCal(
        (() => {
          if (
            parseFloat(taxableAnnualSalary!) <= 5000000 &&
            parseFloat(taxableAnnualSalary!) > 0
          ) {
            return (parseFloat(taxableAnnualSalary!) * 0.7).toString();
          } else if (
            parseFloat(taxableAnnualSalary!) > 5000000 &&
            parseFloat(taxableAnnualSalary!) <= 15000000
          ) {
            return (
              3500000 +
              (parseFloat(taxableAnnualSalary!) - 5000000) * 0.4
            ).toString();
          } else if (
            parseFloat(taxableAnnualSalary!) > 15000000 &&
            parseFloat(taxableAnnualSalary!) <= 45000000
          ) {
            return (
              7500000 +
              (parseFloat(taxableAnnualSalary!) - 15000000) * 0.15
            ).toString();
          } else if (
            parseFloat(taxableAnnualSalary!) > 45000000 &&
            parseFloat(taxableAnnualSalary!) <= 100000000
          ) {
            return (
              12000000 +
              (parseFloat(taxableAnnualSalary!) - 45000000) * 0.05
            ).toString();
          } else if (parseFloat(taxableAnnualSalary!) > 100000000) {
            return (
              14750000 +
              (parseFloat(taxableAnnualSalary!) - 100000000) * 0.02
            ).toString();
          } else {
            return "0";
          }
        })()
      ); //! 근로소득공제금액계산

      setEarnedIncomeDeduction(
        (() => {
          if (parseFloat(earnedIncomeDeductionCal!) > 20000000) {
            return (20000000 / 12).toString();
          } else if (
            parseFloat(earnedIncomeDeductionCal!) <= 20000000 &&
            parseFloat(earnedIncomeDeductionCal!) > 0
          ) {
            return (parseFloat(earnedIncomeDeductionCal!) / 12).toString();
          } else {
            return "0";
          }
        })()
      ); //! 근로소득공제금액

      setBasicDeduction(
        ((parseFloat(numberOfDeduction!) * 1500000) / 12).toString()
      ); //! 기본공제

      setPensionDeduction((parseFloat(taxableIncome!) * 0.045).toString()); //! 연금공제

      setSpecialIncomeDeduction(
        (() => {
          if (parseFloat(taxableAnnualSalary!) <= 30000000) {
            if (parseFloat(numberOfDeduction!) === 1) {
              return (
                (3100000 + parseFloat(taxableAnnualSalary!) * 0.04) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) === 2) {
              return (
                (3600000 + parseFloat(taxableAnnualSalary!) * 0.04) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) >= 3) {
              return (
                (5000000 + parseFloat(taxableAnnualSalary!) * 0.07) /
                12
              ).toString();
            } else {
              return "0";
            }
          } else if (
            parseFloat(taxableAnnualSalary!) > 30000000 &&
            parseFloat(taxableAnnualSalary!) <= 45000000
          ) {
            if (parseFloat(numberOfDeduction!) === 1) {
              return (
                (3100000 +
                  parseFloat(taxableAnnualSalary!) * 0.04 -
                  (parseFloat(taxableAnnualSalary!) - 30000000) * 0.05) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) === 2) {
              return (
                (3600000 +
                  parseFloat(taxableAnnualSalary!) * 0.04 -
                  (parseFloat(taxableAnnualSalary!) - 30000000) * 0.05) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) >= 3) {
              return parseFloat(taxableAnnualSalary!) > 40000000
                ? (
                    (5000000 +
                      parseFloat(taxableAnnualSalary!) * 0.07 -
                      (parseFloat(taxableAnnualSalary!) - 30000000) * 0.05 +
                      (parseFloat(taxableAnnualSalary!) - 40000000) * 0.04) /
                    12
                  ).toString()
                : (
                    (5000000 +
                      parseFloat(taxableAnnualSalary!) * 0.07 -
                      (parseFloat(taxableAnnualSalary!) - 30000000) * 0.05) /
                    12
                  ).toString();
            } else {
              return "0";
            }
          } else if (
            parseFloat(taxableAnnualSalary!) > 45000000 &&
            parseFloat(taxableAnnualSalary!) <= 70000000
          ) {
            if (parseFloat(numberOfDeduction!) === 1) {
              return (
                (3100000 + parseFloat(taxableAnnualSalary!) * 0.015) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) === 2) {
              return (
                (3600000 + parseFloat(taxableAnnualSalary!) * 0.02) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) >= 3) {
              return (
                (5000000 +
                  parseFloat(taxableAnnualSalary!) * 0.05 +
                  (parseFloat(taxableAnnualSalary!) - 40000000) * 0.04) /
                12
              ).toString();
            } else {
              return "0";
            }
          } else if (
            parseFloat(taxableAnnualSalary!) > 70000000 &&
            parseFloat(taxableAnnualSalary!) <= 120000000
          ) {
            if (parseFloat(numberOfDeduction!) === 1) {
              return (
                (3100000 + parseFloat(taxableAnnualSalary!) * 0.005) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) === 2) {
              return (
                (3600000 + parseFloat(taxableAnnualSalary!) * 0.01) /
                12
              ).toString();
            } else if (parseFloat(numberOfDeduction!) >= 3) {
              return (
                (5000000 +
                  parseFloat(taxableAnnualSalary!) * 0.03 +
                  (parseFloat(taxableAnnualSalary!) - 40000000) * 0.04) /
                12
              ).toString();
            } else {
              return "0";
            }
          } else {
            return "0";
          }
        })()
      ); //! 특별소득공제

      setEarnedIncome(
        (
          parseFloat(taxableIncome!) -
          parseFloat(earnedIncomeDeduction!) -
          parseFloat(basicDeduction!) -
          parseFloat(pensionDeduction!) -
          parseFloat(specialIncomeDeduction!)
        ).toString()
      ); //! 근로소득

      setIncomeTax(
        (() => {
          if (
            parseFloat(earnedIncome!) * 12 > 0 &&
            parseFloat(earnedIncome!) * 12 <= 14000000
          ) {
            return (parseFloat(earnedIncome!) * 0.06).toString();
          } else if (
            parseFloat(earnedIncome!) * 12 > 14000000 &&
            parseFloat(earnedIncome!) * 12 <= 50000000
          ) {
            return (parseFloat(earnedIncome!) * 0.15 - 1260000 / 12).toString();
          } else if (
            parseFloat(earnedIncome!) * 12 > 50000000 &&
            parseFloat(earnedIncome!) * 12 <= 88000000
          ) {
            return (parseFloat(earnedIncome!) * 0.24 - 5760000 / 12).toString();
          } else if (
            parseFloat(earnedIncome!) * 12 > 88000000 &&
            parseFloat(earnedIncome!) * 12 <= 150000000
          ) {
            return (
              parseFloat(earnedIncome!) * 0.35 -
              15440000 / 12
            ).toString();
          } else if (
            parseFloat(earnedIncome!) * 12 > 150000000 &&
            parseFloat(earnedIncome!) * 12 <= 300000000
          ) {
            return (
              parseFloat(earnedIncome!) * 0.38 -
              19940000 / 12
            ).toString();
          } else if (
            parseFloat(earnedIncome!) * 12 > 300000000 &&
            parseFloat(earnedIncome!) * 12 <= 500000000
          ) {
            return (parseFloat(earnedIncome!) * 0.4 - 25940000 / 12).toString();
          } else if (
            parseFloat(earnedIncome!) * 12 > 500000000 &&
            parseFloat(earnedIncome!) * 12 <= 1000000000
          ) {
            return (
              parseFloat(earnedIncome!) * 0.42 -
              35940000 / 12
            ).toString();
          } else if (parseFloat(earnedIncome!) * 12 > 1000000000) {
            return (
              parseFloat(earnedIncome!) * 0.45 -
              65940000 / 12
            ).toString();
          } else {
            return "0";
          }
        })()
      ); //! 소득세

      settaxDeduction(
        (() => {
          if (
            parseFloat(incomeTax!) * 12 <= 1300000 &&
            parseFloat(incomeTax!) * 12 > 0
          ) {
            return (parseFloat(incomeTax!) * 0.55).toString();
          } else if (parseFloat(incomeTax!) * 12 > 1300000) {
            return (
              (715000 + (parseFloat(incomeTax!) * 12 - 1300000) * 0.55) /
              12
            ).toString();
          } else {
            return "0";
          }
        })()
      ); //! 근로소득세액공제

      setChildTaxCredit(
        (() => {
          if (parseFloat(numberOfChildren) === 1) {
            return (150000 / 12).toString();
          } else if (parseFloat(numberOfChildren) === 2) {
            return (350000 / 12).toString();
          } else if (parseFloat(numberOfChildren) >= 3) {
            return (
              (350000 + (parseFloat(numberOfChildren) - 2) * 300000) /
              12
            ).toString();
          } else {
            return "0";
          }
        })()
      ); //! 자녀세액공제

      setFinalIncomeTax(
        (
          parseFloat(incomeTax!) -
          parseFloat(taxDeduction!) -
          parseFloat(childTaxCredit!)
        ).toString()
      ); //! 최종소득세

      setLocalIncomeTax((parseFloat(finalIncomeTax!) * 0.1).toString()); //! 지방소득세

      setNationalPension((parseFloat(taxableIncome!) * 0.045).toString()); //! 국민연금

      setHealthInsurance((parseFloat(taxableIncome!) * 0.03545).toString()); //! 건강보험

      setcareInsurance((parseFloat(healthInsurance!) * 0.1281).toString()); //! 요양보험

      setEmploymentInsurance((parseFloat(taxableIncome!) * 0.009).toString()); //! 고용보험

      setActualSalary(() => {
        const values = {
          salary: parseFloat(salary || "0"),
          finalIncomeTax: parseFloat(finalIncomeTax || "0"),
          localIncomeTax: parseFloat(localIncomeTax || "0"),
          nationalPension: parseFloat(nationalPension || "0"),
          healthInsurance: parseFloat(healthInsurance || "0"),
          careInsurance: parseFloat(careInsurance || "0"),
          employmentInsurance: parseFloat(employmentInsurance || "0"),
        };

        const result =
          values.salary -
          values.finalIncomeTax -
          values.localIncomeTax -
          values.nationalPension -
          values.healthInsurance -
          values.careInsurance -
          values.employmentInsurance;

        return isNaN(result) ? "0" : result.toString();
      }); //! 실수령액

      console.log("Debug values:", {
        salary,
        finalIncomeTax,
        localIncomeTax,
        nationalPension,
        healthInsurance,
        careInsurance,
        employmentInsurance,
      });
    }
  }, [salary, famNum, childNum, nonTax]);

  useEffect(() => {
    if (actualSalary) {
      setActual(actualSalary);
    }
  }, [actualSalary]);

  console.log(actual);

  useEffect(() => {
    if (actual) {
      if (selectRef?.current?.value === "월급") {
        setResult(actual);
      } else if (selectRef?.current?.value === "주급") {
        setResult((parseFloat(actual) / 4)?.toString());
      } else if (selectRef?.current?.value === "연봉") {
        setResult((parseFloat(actual) * 12)?.toString());
      }
    }
  }, [actual]);

  const selectHandler = () => {
    if (actual) {
      if (selectRef?.current?.value === "월급") {
        setResult(actual);
      } else if (selectRef?.current?.value === "주급") {
        setResult((parseFloat(actual) / 4)?.toString());
      } else if (selectRef?.current?.value === "연봉") {
        setResult((parseFloat(actual) * 12)?.toString());
      }
    }
  };

  const clickHandler = () => {
    reset();
    setResult(null);
  };

  return (
    <>
    <PageTitle title="임금계산기"/>
      <Container>
        <WageWrapper>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div className="select_wrap">
              <select {...register("select")}>
                <option>월급</option>
                <option>주급</option>
                <option>연봉</option>
              </select>
              <input
                type="number"
                {...register("input_value", {
                  required: "입력값은 필수 입니다.",
                })}
              />
              <span>원</span>
            </div>
            <div className="insurance_wrap">
              <label>
                가족 인원수(본인포함)
                <input
                  type="number"
                  {...register("fam_num", {
                    required: "가족인원수는 필수 입니다.",
                  })}
                />
              </label>
              <label>
                미성년자 자녀 수
                <input
                  type="number"
                  {...register("child_num", {
                    required: "자녀수는 필수 입니다.",
                  })}
                />
              </label>
            </div>
            <div className="non_tax">
              <label>
                비과세액{" "}
                <input
                  type="number"
                  {...register("non_tax", {
                    required: "비과세액은 필수 입니다.",
                  })}
                />
              </label>
            </div>
            <div>
              <button>입력하기</button>
            </div>
          </StyledForm>
          <ResultSection>
            <div className="result">
              <select ref={selectRef} onChange={selectHandler}>
                <option>월급</option>
                <option>주급</option>
                <option>연봉</option>
              </select>
              <span>예상 실 수령액: {result}원</span>
            </div>
            <div>
              <button onClick={clickHandler}>초기화</button>
            </div>
          </ResultSection>
        </WageWrapper>
      </Container>
    </>
  );
};

export default Wage;
