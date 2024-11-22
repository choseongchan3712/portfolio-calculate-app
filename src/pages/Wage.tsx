// # 근로소득공제금액(공제한도 2,000만원)
// (1) 500만원 이하: 총급여액의 70%
// (2) 500만원 초과 1,500만원 이하: 350만원 ＋ (총급여액 - 500만원) × 40%
// (3) 1,500만원 초과 4,500만원 이하: 750만원 ＋ (총급여액 - 1,500만원) × 15%
// (4) 4,500만원 초과 1억원 이하: 1,200만원 ＋ (총급여액 - 4,500만원) × 5%
// (5) 1억원 초과: 1,475만원 ＋ (총급여액 - 1억원) × 2%

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

const salary: string = "4500000"; //! 월급

// const annualSalary: string= (parseFloat(salary)*12).toString();

const nonTaxableAmount: string = "200000"; //! 비과세액

const taxableIncome: string = (
  parseFloat(salary) - parseFloat(nonTaxableAmount)
).toString(); //! 과세소득

const taxableAnnualSalary: string = (parseFloat(taxableIncome) * 12).toString(); //! 과세연봉

const numberOfFamily: string = "1"; //! 가족수

const numberOfChildren: string = "0"; //! 자녀수

const numberOfDeduction: string = (parseFloat(numberOfFamily) + parseFloat(numberOfChildren)).toString(); //! 공제대상자

const earnedIncomeDeductionCal: string = (()=>{
  if (parseFloat(taxableAnnualSalary) <= 5000000 && parseFloat(taxableAnnualSalary) > 0) {
    return (parseFloat(taxableAnnualSalary) * 0.7).toString();
  } else if (parseFloat(taxableAnnualSalary) > 5000000 && parseFloat(taxableAnnualSalary) <= 15000000) {
    return (3500000 + (parseFloat(taxableAnnualSalary) - 5000000)*0.4).toString();
  } else if (parseFloat(taxableAnnualSalary) > 15000000 && parseFloat(taxableAnnualSalary) <= 45000000) {
    return (7500000 + (parseFloat(taxableAnnualSalary) - 15000000)*0.15).toString();
  } else if (parseFloat(taxableAnnualSalary) > 45000000 && parseFloat(taxableAnnualSalary) <= 100000000) {
    return (12000000 + (parseFloat(taxableAnnualSalary) - 45000000)*0.05).toString();
  } else if (parseFloat(taxableAnnualSalary) > 100000000) {
    return (14750000 + (parseFloat(taxableAnnualSalary) - 100000000)*0.02).toString();
  } else {
    return "0";
  }
})(); //! 근로소득공제금액계산

const earnedIncomeDeduction:string = (()=>{
  if (parseFloat(earnedIncomeDeductionCal) > 20000000) {
    return (20000000 / 12).toString();
  } else if (parseFloat(earnedIncomeDeductionCal) <= 20000000 && parseFloat(earnedIncomeDeductionCal) > 0) {
    return (parseFloat(earnedIncomeDeductionCal) / 12).toString();
  } else {
    return "0";
  }
})(); //! 근로소득공제금액

const basicDeduction: string = ((parseFloat(numberOfDeduction) * 1500000) / 12).toString(); //! 기본공제

const pensionDeduction: string = (parseFloat(taxableIncome) * 0.045).toString(); //! 연금공제

const specialIncomeDeduction: string = (()=> {
  if (parseFloat(taxableAnnualSalary) <= 30000000) {
    if (parseFloat(numberOfDeduction) === 1) {
      return ((3100000 + parseFloat(taxableAnnualSalary)*0.04) / 12).toString();
    } else if (parseFloat(numberOfDeduction) === 2) {
      return ((3600000 + parseFloat(taxableAnnualSalary)*0.04) / 12).toString();
    } else if (parseFloat(numberOfDeduction) >= 3) {
      return ((5000000 + parseFloat(taxableAnnualSalary)*0.07) / 12).toString();
    } else {
      return "0";
    }
  } else if (parseFloat(taxableAnnualSalary) > 30000000 && parseFloat(taxableAnnualSalary) <= 45000000) {
    if (parseFloat(numberOfDeduction) === 1) {
      return (((3100000 + parseFloat(taxableAnnualSalary)*0.04)-((parseFloat(taxableAnnualSalary) - 30000000)*0.05)) / 12).toString();
    } else if (parseFloat(numberOfDeduction) === 2) {
      return (((3600000 + parseFloat(taxableAnnualSalary)*0.04)-((parseFloat(taxableAnnualSalary) - 30000000)*0.05)) / 12).toString();
    } else if (parseFloat(numberOfDeduction) >= 3) {
      return parseFloat(taxableAnnualSalary) > 40000000 ? ((((5000000 + parseFloat(taxableAnnualSalary)*0.07)-((parseFloat(taxableAnnualSalary) - 30000000)*0.05)) + ((parseFloat(taxableAnnualSalary) - 40000000)*0.04)) / 12).toString() : (((5000000 + parseFloat(taxableAnnualSalary)*0.07)-((parseFloat(taxableAnnualSalary) - 30000000)*0.05)) / 12).toString();
    } else {
      return "0";
    }
  } else if (parseFloat(taxableAnnualSalary) > 45000000 && parseFloat(taxableAnnualSalary) <= 70000000) {
    if (parseFloat(numberOfDeduction) === 1) {
      return ((3100000 + parseFloat(taxableAnnualSalary)*0.015) / 12).toString();
    } else if (parseFloat(numberOfDeduction) === 2) {
      return ((3600000 + parseFloat(taxableAnnualSalary)*0.02) / 12).toString();
    } else if (parseFloat(numberOfDeduction) >= 3) {
      return (((5000000 + parseFloat(taxableAnnualSalary)*0.05) + ((parseFloat(taxableAnnualSalary) - 40000000)*0.04)) / 12).toString();
    } else {
      return "0";
    }
  } else if (parseFloat(taxableAnnualSalary) > 70000000 && parseFloat(taxableAnnualSalary) <= 120000000) {
    if (parseFloat(numberOfDeduction) === 1) {
      return ((3100000 + parseFloat(taxableAnnualSalary)*0.005) / 12).toString();
    } else if (parseFloat(numberOfDeduction) === 2) {
      return ((3600000 + parseFloat(taxableAnnualSalary)*0.01) / 12).toString();
    } else if (parseFloat(numberOfDeduction) >= 3) {
      return (((5000000 + parseFloat(taxableAnnualSalary)*0.03) + ((parseFloat(taxableAnnualSalary) - 40000000)*0.04)) / 12).toString();
    } else {
      return "0";
    }
  } else {
    return "0"
  }
})(); //! 특별소득공제

const earnedIncome:string = (parseFloat(taxableIncome) - parseFloat(earnedIncomeDeduction) - parseFloat(basicDeduction) - parseFloat(pensionDeduction) - parseFloat(specialIncomeDeduction)).toString() ;//! 근로소득

const incomeTax:string = (()=>{
  if ((parseFloat(earnedIncome)*12) > 0 && (parseFloat(earnedIncome)*12) <= 14000000) {
    return (parseFloat(earnedIncome)*0.06).toString();
  } else if ((parseFloat(earnedIncome)*12) > 14000000 && (parseFloat(earnedIncome)*12) <= 50000000) {
    return (parseFloat(earnedIncome)*0.15 - (1260000 / 12)).toString();
  } else if ((parseFloat(earnedIncome)*12) > 50000000 && (parseFloat(earnedIncome)*12) <= 88000000) {
    return (parseFloat(earnedIncome)*0.24 - (5760000 / 12)).toString();
  } else if ((parseFloat(earnedIncome)*12) > 88000000 && (parseFloat(earnedIncome)*12) <= 150000000) {
    return (parseFloat(earnedIncome)*0.35 - (15440000 / 12)).toString();
  } else if ((parseFloat(earnedIncome)*12) > 150000000 && (parseFloat(earnedIncome)*12) <= 300000000) {
    return (parseFloat(earnedIncome)*0.38 - (19940000 / 12)).toString();
  } else if ((parseFloat(earnedIncome)*12) > 300000000 && (parseFloat(earnedIncome)*12) <= 500000000) {
    return (parseFloat(earnedIncome)*0.4 - (25940000 / 12)).toString();
  } else if ((parseFloat(earnedIncome)*12) > 500000000 && (parseFloat(earnedIncome)*12) <= 1000000000) {
    return (parseFloat(earnedIncome)*0.42 - (35940000 / 12)).toString();
  } else if ((parseFloat(earnedIncome)*12) > 1000000000) {
    return (parseFloat(earnedIncome)*0.45 - (65940000 / 12)).toString();
  } else {
    return "0";
  }
})(); //! 소득세

const taxDeduction:string = (()=>{
  if((parseFloat(incomeTax)*12) <= 1300000 && (parseFloat(incomeTax)*12) > 0) {
    return (parseFloat(incomeTax)*0.55).toString();
  } else if((parseFloat(incomeTax)*12) > 1300000) {
    return ((715000 + ((parseFloat(incomeTax)*12) - 1300000)*0.55) / 12).toString();
  } else {
    return "0";
  }
})(); //! 근로소득세액공제

const childTaxCredit:string = (()=>{
  if(parseFloat(numberOfChildren) === 1) {
    return (150000 / 12).toString();
  } else if (parseFloat(numberOfChildren) === 2) {
    return (350000 / 12).toString();
  } else if (parseFloat(numberOfChildren) >= 3) {
    return ((350000 + (parseFloat(numberOfChildren) - 2) * 300000) / 12).toString();
  } else {
    return "0";
  }
})(); //! 자녀세액공제

const finalIncomeTax:string = (parseFloat(incomeTax) - parseFloat(taxDeduction) - parseFloat(childTaxCredit)).toString(); //! 최종소득세

const localIncomeTax:string = (parseFloat(finalIncomeTax) * 0.1).toString(); //! 지방소득세

const nationalPension:string = (parseFloat(taxableIncome) * 0.045).toString(); //! 국민연금

const healthInsurance:string = (parseFloat(taxableIncome) * 0.03545).toString(); //! 건강보험

const careInsurance:string = (parseFloat(healthInsurance) * 0.1281).toString(); //! 요양보험

const employmentInsurance:string = (parseFloat(taxableIncome) * 0.009).toString(); //! 고용보험

const actualSalary:string = (parseFloat(salary) - parseFloat(finalIncomeTax) - parseFloat(localIncomeTax) - parseFloat(nationalPension) - parseFloat(healthInsurance) - parseFloat(careInsurance) - parseFloat(employmentInsurance)).toString();//! 실수령액

console.log(actualSalary);


const Wage = (): JSX.Element => {
  return <></>;
};

export default Wage;
