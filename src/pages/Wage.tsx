// # 근로소득공제금액(공제한도 2,000만원)
// (1) 500만원 이하: 총급여액의 70%
// (2) 500만원 초과 1,500만원 이하: 350만원 ＋ (총급여액 - 500만원) × 40%
// (3) 1,500만원 초과 4,500만원 이하: 750만원 ＋ (총급여액 - 1,500만원) × 15%
// (4) 4,500만원 초과 1억원 이하: 1,200만원 ＋ (총급여액 - 4,500만원) × 5%
// (5) 1억원 초과: 1,475만원 ＋ (총급여액 - 1억원) × 2%

// # 근로소득금액 = 총급여 - 근로소득공제금액 - 비과세액

// # 과세표준구간별 종합소득세 세율
// (1) 1400만원 이하: 세율6%
// (2) 1400만원 초과 5000만원 이하: 세율15%
// (3) 5000만원 초과 8800만원 이하: 세율24%
// (4) 8800만원 초과 1억5000만원 이하: 세율35%
// (5) 1억5000만원 초과 3억원 이하: 세율38%
// (6) 3억원 초과 5억원 이하: 세율40%
// (7) 5억원 초과 10억원 이하: 세율42%
// (8) 10억원 초과: 세율 45%

//# 근로소득세액공제
// (1) 130만원 이하: 산출세액의 55%
// (2) 130만원 초과: 71만5천원＋130만원 초과금액의 30%

// # 국민연금: 총급여의 4.5%

// #건강보험: 총급여의 3.545%

// #장기요양보험: 건강보험료 * 12.81%

// #고용보험: 총급여의 0.9%

// #비과세액: 연 보통 240만원

// 실수령액 = 총급여액 - 소득세((근로소득금액(총급여 - 근로소득공제금액 - 비과세액)*세율) - 근로소득세액공제) - 지방소득세(소득세10%) - (국민연금 + 건강보험 + 장기요양보험 + 고용보험)

const salary: string = "3500000"; //! 월급

const numberOfFamily: string = "4"; //! 가족수

const numberofChildren: string = "2"; //! 자녀수

const incomeTaxCal = (salary: string, numberOfFamily: string): string => {
  if (parseFloat(salary) < 1060000) {
    const result: string = "0";
    return result;
  } else if (parseFloat(salary) >= 1060000 && parseFloat(salary) < 1065000) {
    if (numberOfFamily === "1") {
      const result: string = "1040";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1065000 && parseFloat(salary) < 1070000) {
    if (numberOfFamily === "1") {
      const result: string = "1110";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1070000 && parseFloat(salary) < 1075000) {
    if (numberOfFamily === "1") {
      const result: string = "1180";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1075000 && parseFloat(salary) < 1080000) {
    if (numberOfFamily === "1") {
      const result: string = "1250";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1080000 && parseFloat(salary) < 1085000) {
    if (numberOfFamily === "1") {
      const result: string = "1320";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1085000 && parseFloat(salary) < 1090000) {
    if (numberOfFamily === "1") {
      const result: string = "1390";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1090000 && parseFloat(salary) < 1095000) {
    if (numberOfFamily === "1") {
      const result: string = "1460";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1095000 && parseFloat(salary) < 1100000) {
    if (numberOfFamily === "1") {
      const result: string = "1530";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1100000 && parseFloat(salary) < 1105000) {
    if (numberOfFamily === "1") {
      const result: string = "1600";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1105000 && parseFloat(salary) < 1110000) {
    if (numberOfFamily === "1") {
      const result: string = "1670";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1110000 && parseFloat(salary) < 1115000) {
    if (numberOfFamily === "1") {
      const result: string = "1740";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1115000 && parseFloat(salary) < 1120000) {
    if (numberOfFamily === "1") {
      const result: string = "1810";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1120000 && parseFloat(salary) < 1125000) {
    if (numberOfFamily === "1") {
      const result: string = "1880";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1125000 && parseFloat(salary) < 1130000) {
    if (numberOfFamily === "1") {
      const result: string = "1950";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1130000 && parseFloat(salary) < 1135000) {
    if (numberOfFamily === "1") {
      const result: string = "2020";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1135000 && parseFloat(salary) < 1140000) {
    if (numberOfFamily === "1") {
      const result: string = "2090";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1140000 && parseFloat(salary) < 1145000) {
    if (numberOfFamily === "1") {
      const result: string = "2160";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1145000 && parseFloat(salary) < 1150000) {
    if (numberOfFamily === "1") {
      const result: string = "2230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1150000 && parseFloat(salary) < 1155000) {
    if (numberOfFamily === "1") {
      const result: string = "2300";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1155000 && parseFloat(salary) < 1160000) {
    if (numberOfFamily === "1") {
      const result: string = "2370";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1160000 && parseFloat(salary) < 1165000) {
    if (numberOfFamily === "1") {
      const result: string = "2440";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1165000 && parseFloat(salary) < 1170000) {
    if (numberOfFamily === "1") {
      const result: string = "2500";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1170000 && parseFloat(salary) < 1175000) {
    if (numberOfFamily === "1") {
      const result: string = "2570";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1175000 && parseFloat(salary) < 1180000) {
    if (numberOfFamily === "1") {
      const result: string = "2640";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1180000 && parseFloat(salary) < 1185000) {
    if (numberOfFamily === "1") {
      const result: string = "2710";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1185000 && parseFloat(salary) < 1190000) {
    if (numberOfFamily === "1") {
      const result: string = "2780";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1190000 && parseFloat(salary) < 1195000) {
    if (numberOfFamily === "1") {
      const result: string = "2850";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1195000 && parseFloat(salary) < 1200000) {
    if (numberOfFamily === "1") {
      const result: string = "2920";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1200000 && parseFloat(salary) < 1205000) {
    if (numberOfFamily === "1") {
      const result: string = "2990";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1205000 && parseFloat(salary) < 1210000) {
    if (numberOfFamily === "1") {
      const result: string = "3060";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1210000 && parseFloat(salary) < 1215000) {
    if (numberOfFamily === "1") {
      const result: string = "3130";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1215000 && parseFloat(salary) < 1220000) {
    if (numberOfFamily === "1") {
      const result: string = "3200";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1220000 && parseFloat(salary) < 1225000) {
    if (numberOfFamily === "1") {
      const result: string = "3270";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1225000 && parseFloat(salary) < 1230000) {
    if (numberOfFamily === "1") {
      const result: string = "3340";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1230000 && parseFloat(salary) < 1235000) {
    if (numberOfFamily === "1") {
      const result: string = "3410";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1235000 && parseFloat(salary) < 1240000) {
    if (numberOfFamily === "1") {
      const result: string = "3480";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1240000 && parseFloat(salary) < 1245000) {
    if (numberOfFamily === "1") {
      const result: string = "3550";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1245000 && parseFloat(salary) < 1250000) {
    if (numberOfFamily === "1") {
      const result: string = "3620";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1250000 && parseFloat(salary) < 1255000) {
    if (numberOfFamily === "1") {
      const result: string = "3700";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1255000 && parseFloat(salary) < 1260000) {
    if (numberOfFamily === "1") {
      const result: string = "3810";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1260000 && parseFloat(salary) < 1265000) {
    if (numberOfFamily === "1") {
      const result: string = "3910";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1265000 && parseFloat(salary) < 1270000) {
    if (numberOfFamily === "1") {
      const result: string = "4010";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1270000 && parseFloat(salary) < 1275000) {
    if (numberOfFamily === "1") {
      const result: string = "4120";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1275000 && parseFloat(salary) < 1280000) {
    if (numberOfFamily === "1") {
      const result: string = "4220";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1280000 && parseFloat(salary) < 1285000) {
    if (numberOfFamily === "1") {
      const result: string = "4320";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1285000 && parseFloat(salary) < 1290000) {
    if (numberOfFamily === "1") {
      const result: string = "4430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1290000 && parseFloat(salary) < 1295000) {
    if (numberOfFamily === "1") {
      const result: string = "4530";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1295000 && parseFloat(salary) < 1300000) {
    if (numberOfFamily === "1") {
      const result: string = "4630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1300000 && parseFloat(salary) < 1305000) {
    if (numberOfFamily === "1") {
      const result: string = "4740";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1305000 && parseFloat(salary) < 1310000) {
    if (numberOfFamily === "1") {
      const result: string = "4840";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1310000 && parseFloat(salary) < 1315000) {
    if (numberOfFamily === "1") {
      const result: string = "4940";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1315000 && parseFloat(salary) < 1320000) {
    if (numberOfFamily === "1") {
      const result: string = "5050";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1320000 && parseFloat(salary) < 1325000) {
    if (numberOfFamily === "1") {
      const result: string = "5150";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1325000 && parseFloat(salary) < 1330000) {
    if (numberOfFamily === "1") {
      const result: string = "5250";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1330000 && parseFloat(salary) < 1335000) {
    if (numberOfFamily === "1") {
      const result: string = "5360";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1335000 && parseFloat(salary) < 1340000) {
    if (numberOfFamily === "1") {
      const result: string = "5460";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1340000 && parseFloat(salary) < 1345000) {
    if (numberOfFamily === "1") {
      const result: string = "5560";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1060";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1345000 && parseFloat(salary) < 1350000) {
    if (numberOfFamily === "1") {
      const result: string = "5670";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1170";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1350000 && parseFloat(salary) < 1355000) {
    if (numberOfFamily === "1") {
      const result: string = "5770";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1270";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1355000 && parseFloat(salary) < 1360000) {
    if (numberOfFamily === "1") {
      const result: string = "5870";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1370";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1360000 && parseFloat(salary) < 1365000) {
    if (numberOfFamily === "1") {
      const result: string = "5980";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1480";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1365000 && parseFloat(salary) < 1370000) {
    if (numberOfFamily === "1") {
      const result: string = "6080";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1580";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1370000 && parseFloat(salary) < 1375000) {
    if (numberOfFamily === "1") {
      const result: string = "6180";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1680";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1375000 && parseFloat(salary) < 1380000) {
    if (numberOfFamily === "1") {
      const result: string = "6290";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1790";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1380000 && parseFloat(salary) < 1385000) {
    if (numberOfFamily === "1") {
      const result: string = "6390";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1890";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1385000 && parseFloat(salary) < 1390000) {
    if (numberOfFamily === "1") {
      const result: string = "6490";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "1990";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1390000 && parseFloat(salary) < 1395000) {
    if (numberOfFamily === "1") {
      const result: string = "6600";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2100";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1395000 && parseFloat(salary) < 1400000) {
    if (numberOfFamily === "1") {
      const result: string = "6700";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2200";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1400000 && parseFloat(salary) < 1405000) {
    if (numberOfFamily === "1") {
      const result: string = "6800";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2300";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1405000 && parseFloat(salary) < 1410000) {
    if (numberOfFamily === "1") {
      const result: string = "6910";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2410";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1410000 && parseFloat(salary) < 1415000) {
    if (numberOfFamily === "1") {
      const result: string = "7010";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2510";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1415000 && parseFloat(salary) < 1420000) {
    if (numberOfFamily === "1") {
      const result: string = "7110";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2610";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1420000 && parseFloat(salary) < 1425000) {
    if (numberOfFamily === "1") {
      const result: string = "7210";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2710";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1425000 && parseFloat(salary) < 1430000) {
    if (numberOfFamily === "1") {
      const result: string = "7320";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2820";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1430000 && parseFloat(salary) < 1435000) {
    if (numberOfFamily === "1") {
      const result: string = "7420";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "2920";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1435000 && parseFloat(salary) < 1440000) {
    if (numberOfFamily === "1") {
      const result: string = "7520";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3020";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1440000 && parseFloat(salary) < 1445000) {
    if (numberOfFamily === "1") {
      const result: string = "7630";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3130";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1445000 && parseFloat(salary) < 1450000) {
    if (numberOfFamily === "1") {
      const result: string = "7730";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1450000 && parseFloat(salary) < 1455000) {
    if (numberOfFamily === "1") {
      const result: string = "7830";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3330";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1455000 && parseFloat(salary) < 1460000) {
    if (numberOfFamily === "1") {
      const result: string = "7940";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3440";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1460000 && parseFloat(salary) < 1465000) {
    if (numberOfFamily === "1") {
      const result: string = "8040";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3540";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1465000 && parseFloat(salary) < 1470000) {
    if (numberOfFamily === "1") {
      const result: string = "8140";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3640";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1470000 && parseFloat(salary) < 1475000) {
    if (numberOfFamily === "1") {
      const result: string = "8250";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3750";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1475000 && parseFloat(salary) < 1480000) {
    if (numberOfFamily === "1") {
      const result: string = "8350";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3850";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1480000 && parseFloat(salary) < 1485000) {
    if (numberOfFamily === "1") {
      const result: string = "8450";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "3950";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1485000 && parseFloat(salary) < 1490000) {
    if (numberOfFamily === "1") {
      const result: string = "8560";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "4060";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1490000 && parseFloat(salary) < 1495000) {
    if (numberOfFamily === "1") {
      const result: string = "8660";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "4160";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1495000 && parseFloat(salary) < 1500000) {
    if (numberOfFamily === "1") {
      const result: string = "8760";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "4260";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1500000 && parseFloat(salary) < 1510000) {
    if (numberOfFamily === "1") {
      const result: string = "8920";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "4420";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1510000 && parseFloat(salary) < 1520000) {
    if (numberOfFamily === "1") {
      const result: string = "9120";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "4620";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1520000 && parseFloat(salary) < 1530000) {
    if (numberOfFamily === "1") {
      const result: string = "9330";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "4830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1530000 && parseFloat(salary) < 1540000) {
    if (numberOfFamily === "1") {
      const result: string = "9540";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "5040";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1540000 && parseFloat(salary) < 1550000) {
    if (numberOfFamily === "1") {
      const result: string = "9740";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "5240";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1550000 && parseFloat(salary) < 1560000) {
    if (numberOfFamily === "1") {
      const result: string = "9950";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "5450";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1560000 && parseFloat(salary) < 1570000) {
    if (numberOfFamily === "1") {
      const result: string = "10160";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "5660";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1570000 && parseFloat(salary) < 1580000) {
    if (numberOfFamily === "1") {
      const result: string = "10360";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "5860";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1580000 && parseFloat(salary) < 1590000) {
    if (numberOfFamily === "1") {
      const result: string = "10570";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "6070";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1590000 && parseFloat(salary) < 1600000) {
    if (numberOfFamily === "1") {
      const result: string = "10780";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "6280";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1600000 && parseFloat(salary) < 1610000) {
    if (numberOfFamily === "1") {
      const result: string = "10980";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "6480";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1610000 && parseFloat(salary) < 1620000) {
    if (numberOfFamily === "1") {
      const result: string = "11190";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "6690";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1620000 && parseFloat(salary) < 1630000) {
    if (numberOfFamily === "1") {
      const result: string = "11400";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "6900";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1630000 && parseFloat(salary) < 1640000) {
    if (numberOfFamily === "1") {
      const result: string = "11600";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "7100";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1640000 && parseFloat(salary) < 1650000) {
    if (numberOfFamily === "1") {
      const result: string = "11810";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "7310";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1650000 && parseFloat(salary) < 1660000) {
    if (numberOfFamily === "1") {
      const result: string = "12020";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "7520";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1660000 && parseFloat(salary) < 1670000) {
    if (numberOfFamily === "1") {
      const result: string = "12220";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "7720";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1670000 && parseFloat(salary) < 1680000) {
    if (numberOfFamily === "1") {
      const result: string = "12430";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "7930";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1680000 && parseFloat(salary) < 1690000) {
    if (numberOfFamily === "1") {
      const result: string = "12640";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "8140";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1690000 && parseFloat(salary) < 1700000) {
    if (numberOfFamily === "1") {
      const result: string = "12840";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "8340";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1700000 && parseFloat(salary) < 1710000) {
    if (numberOfFamily === "1") {
      const result: string = "13050";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "8550";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1710000 && parseFloat(salary) < 1720000) {
    if (numberOfFamily === "1") {
      const result: string = "13260";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "8760";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1720000 && parseFloat(salary) < 1730000) {
    if (numberOfFamily === "1") {
      const result: string = "13460";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "8960";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "1040";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1730000 && parseFloat(salary) < 1740000) {
    if (numberOfFamily === "1") {
      const result: string = "13670";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "9170";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "1240";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1740000 && parseFloat(salary) < 1750000) {
    if (numberOfFamily === "1") {
      const result: string = "13880";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "9380";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "1440";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1750000 && parseFloat(salary) < 1760000) {
    if (numberOfFamily === "1") {
      const result: string = "14080";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "9580";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "1640";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1760000 && parseFloat(salary) < 1770000) {
    if (numberOfFamily === "1") {
      const result: string = "14290";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "9790";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "1830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1770000 && parseFloat(salary) < 1780000) {
    if (numberOfFamily === "1") {
      const result: string = "14500";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "10000";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "2030";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1780000 && parseFloat(salary) < 1790000) {
    if (numberOfFamily === "1") {
      const result: string = "14700";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "10200";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "2230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1790000 && parseFloat(salary) < 1800000) {
    if (numberOfFamily === "1") {
      const result: string = "14910";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "10410";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "2430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1800000 && parseFloat(salary) < 1810000) {
    if (numberOfFamily === "1") {
      const result: string = "15110";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "10610";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "2630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1810000 && parseFloat(salary) < 1820000) {
    if (numberOfFamily === "1") {
      const result: string = "15320";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "10820";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "2830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1820000 && parseFloat(salary) < 1830000) {
    if (numberOfFamily === "1") {
      const result: string = "15530";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "11030";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "3020";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1830000 && parseFloat(salary) < 1840000) {
    if (numberOfFamily === "1") {
      const result: string = "15730";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "11230";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "3220";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1840000 && parseFloat(salary) < 1850000) {
    if (numberOfFamily === "1") {
      const result: string = "15940";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "11440";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "3420";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1850000 && parseFloat(salary) < 1860000) {
    if (numberOfFamily === "1") {
      const result: string = "16150";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "11650";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "3620";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1860000 && parseFloat(salary) < 1870000) {
    if (numberOfFamily === "1") {
      const result: string = "16350";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "11850";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "3820";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1870000 && parseFloat(salary) < 1880000) {
    if (numberOfFamily === "1") {
      const result: string = "16560";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "12060";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "4020";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1880000 && parseFloat(salary) < 1890000) {
    if (numberOfFamily === "1") {
      const result: string = "16770";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "12270";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "4220";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1890000 && parseFloat(salary) < 1900000) {
    if (numberOfFamily === "1") {
      const result: string = "16970";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "12470";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "4410";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "1040";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1900000 && parseFloat(salary) < 1910000) {
    if (numberOfFamily === "1") {
      const result: string = "17180";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "12680";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "4610";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "1240";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1910000 && parseFloat(salary) < 1920000) {
    if (numberOfFamily === "1") {
      const result: string = "17390";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "12890";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "4810";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "1440";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1920000 && parseFloat(salary) < 1930000) {
    if (numberOfFamily === "1") {
      const result: string = "17590";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "13090";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "5010";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "1630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1930000 && parseFloat(salary) < 1940000) {
    if (numberOfFamily === "1") {
      const result: string = "17900";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "13300";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "5210";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "1830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1940000 && parseFloat(salary) < 1950000) {
    if (numberOfFamily === "1") {
      const result: string = "18120";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "13580";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "5410";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "2030";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1950000 && parseFloat(salary) < 1960000) {
    if (numberOfFamily === "1") {
      const result: string = "18340";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "13890";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "5610";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "2230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1960000 && parseFloat(salary) < 1970000) {
    if (numberOfFamily === "1") {
      const result: string = "18570";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "14200";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "5810";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "2430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1970000 && parseFloat(salary) < 1980000) {
    if (numberOfFamily === "1") {
      const result: string = "18790";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "14410";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "6010";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "2630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1980000 && parseFloat(salary) < 1990000) {
    if (numberOfFamily === "1") {
      const result: string = "19010";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "14630";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "6210";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "2830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 1990000 && parseFloat(salary) < 2000000) {
    if (numberOfFamily === "1") {
      const result: string = "19230";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "14840";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "6410";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "3030";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2000000 && parseFloat(salary) < 2010000) {
    if (numberOfFamily === "1") {
      const result: string = "19450";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "15060";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "6610";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "3230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2010000 && parseFloat(salary) < 2020000) {
    if (numberOfFamily === "1") {
      const result: string = "19670";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "15280";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "6810";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "3430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2020000 && parseFloat(salary) < 2030000) {
    if (numberOfFamily === "1") {
      const result: string = "19890";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "15500";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "7010";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "3630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2030000 && parseFloat(salary) < 2040000) {
    if (numberOfFamily === "1") {
      const result: string = "20110";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "15720";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "7210";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "3830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2040000 && parseFloat(salary) < 2050000) {
    if (numberOfFamily === "1") {
      const result: string = "20330";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "15940";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "7410";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "4030";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2050000 && parseFloat(salary) < 2060000) {
    if (numberOfFamily === "1") {
      const result: string = "20550";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "16160";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "7610";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "4230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2060000 && parseFloat(salary) < 2070000) {
    if (numberOfFamily === "1") {
      const result: string = "21,450";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "15,990";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "7,790";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "4,410";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "1,040";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2070000 && parseFloat(salary) < 2080000) {
    if (numberOfFamily === "1") {
      const result: string = "21,770";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "16,190";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "7,990";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "4,610";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "1,240";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2080000 && parseFloat(salary) < 2090000) {
    if (numberOfFamily === "1") {
      const result: string = "22,090";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "16,400";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "8,180";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "4,810";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "1,430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2090000 && parseFloat(salary) < 2100000) {
    if (numberOfFamily === "1") {
      const result: string = "22,420";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "16,600";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "8,380";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "5,010";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "1,630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2100000 && parseFloat(salary) < 2110000) {
    if (numberOfFamily === "1") {
      const result: string = "22,740";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "16,810";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "8,580";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "5,210";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "1,830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2110000 && parseFloat(salary) < 2120000) {
    if (numberOfFamily === "1") {
      const result: string = "23,060";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "17,020";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "8,780";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "5,400";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "2,030";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2120000 && parseFloat(salary) < 2130000) {
    if (numberOfFamily === "1") {
      const result: string = "23,380";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "17,220";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "8,980";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "5,600";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "2,230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2130000 && parseFloat(salary) < 2140000) {
    if (numberOfFamily === "1") {
      const result: string = "23,700";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "17,430";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "9,180";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "5,800";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "2,430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2140000 && parseFloat(salary) < 2150000) {
    if (numberOfFamily === "1") {
      const result: string = "24,020";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "17,640";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "9,380";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "6,000";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "2,630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2150000 && parseFloat(salary) < 2160000) {
    if (numberOfFamily === "1") {
      const result: string = "24,340";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "17,840";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "9,570";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "6,200";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "2,820";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2160000 && parseFloat(salary) < 2170000) {
    if (numberOfFamily === "1") {
      const result: string = "24,660";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "18,050";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "9,770";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "6,400";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "3,020";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2170000 && parseFloat(salary) < 2180000) {
    if (numberOfFamily === "1") {
      const result: string = "24,990";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "18,260";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "9,970";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "6,600";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "3,220";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2180000 && parseFloat(salary) < 2190000) {
    if (numberOfFamily === "1") {
      const result: string = "25,310";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "18,460";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "10,170";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "6,790";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "3,420";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2190000 && parseFloat(salary) < 2200000) {
    if (numberOfFamily === "1") {
      const result: string = "25,630";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "18,670";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "10,370";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "6,990";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "3,620";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2200000 && parseFloat(salary) < 2210000) {
    if (numberOfFamily === "1") {
      const result: string = "25,950";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "18,950";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "10,570";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "7,190";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "3,820";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2210000 && parseFloat(salary) < 2220000) {
    if (numberOfFamily === "1") {
      const result: string = "26,270";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "19,270";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "10,760";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "7,390";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "4,010";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2220000 && parseFloat(salary) < 2230000) {
    if (numberOfFamily === "1") {
      const result: string = "26,590";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "19,590";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "10,960";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "7,590";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "4,210";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2230000 && parseFloat(salary) < 2240000) {
    if (numberOfFamily === "1") {
      const result: string = "26,910";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "19,910";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "11,160";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "7,790";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "4,410";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "1,040";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2240000 && parseFloat(salary) < 2250000) {
    if (numberOfFamily === "1") {
      const result: string = "27,240";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "20,240";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "11,360";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "7,980";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "4,610";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "1,230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2250000 && parseFloat(salary) < 2260000) {
    if (numberOfFamily === "1") {
      const result: string = "27,560";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "20,560";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "11,560";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "8,180";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "4,810";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "1,430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2260000 && parseFloat(salary) < 2270000) {
    if (numberOfFamily === "1") {
      const result: string = "27,880";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "20,880";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "11,760";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "8,380";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "5,010";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "1,630";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2270000 && parseFloat(salary) < 2280000) {
    if (numberOfFamily === "1") {
      const result: string = "28,200";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "21,200";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "11,960";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "8,580";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "5,210";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "1,830";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2280000 && parseFloat(salary) < 2290000) {
    if (numberOfFamily === "1") {
      const result: string = "28,520";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "21,520";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "12,150";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "8,780";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "5,400";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "2,030";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2290000 && parseFloat(salary) < 2300000) {
    if (numberOfFamily === "1") {
      const result: string = "28,840";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "21,840";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "12,350";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "8,980";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "5,600";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "2,230";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2300000 && parseFloat(salary) < 2310000) {
    if (numberOfFamily === "1") {
      const result: string = "29,160";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "22,160";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "12,550";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "9,180";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "5,800";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "2,430";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2310000 && parseFloat(salary) < 2320000) {
    if (numberOfFamily === "1") {
      const result: string = "29,480";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "22,480";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "12,750";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "9,370";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "6,000";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "2,620";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2320000 && parseFloat(salary) < 2330000) {
    if (numberOfFamily === "1") {
      const result: string = "29,810";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "22,810";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "12,950";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "9,570";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "6,200";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "2,820";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2330000 && parseFloat(salary) < 2340000) {
    if (numberOfFamily === "1") {
      const result: string = "30,130";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "23,130";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "13,150";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "9,770";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "6,400";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "3,020";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2340000 && parseFloat(salary) < 2350000) {
    if (numberOfFamily === "1") {
      const result: string = "30,450";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "23,450";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "13,340";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "9,970";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "6,590";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "3,220";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2350000 && parseFloat(salary) < 2360000) {
    if (numberOfFamily === "1") {
      const result: string = "30,770";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "23,770";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "13,540";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "10,170";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "6,790";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "3,420";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2360000 && parseFloat(salary) < 2370000) {
    if (numberOfFamily === "1") {
      const result: string = "31,090";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "24,090";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "13,740";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "10,370";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "6,990";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "3,620";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2370000 && parseFloat(salary) < 2380000) {
    if (numberOfFamily === "1") {
      const result: string = "31,410";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "24,410";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "13,940";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "10,560";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "7,190";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "3,810";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2380000 && parseFloat(salary) < 2390000) {
    if (numberOfFamily === "1") {
      const result: string = "31,730";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "24,730";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "14,140";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "10,760";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "7,390";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "4,010";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2390000 && parseFloat(salary) < 2400000) {
    if (numberOfFamily === "1") {
      const result: string = "32,050";
      return result;
    } else if (numberOfFamily === "2") {
      const result: string = "25,050";
      return result;
    } else if (numberOfFamily === "3") {
      const result: string = "14,340";
      return result;
    } else if (numberOfFamily === "4") {
      const result: string = "10,960";
      return result;
    } else if (numberOfFamily === "5") {
      const result: string = "7,590";
      return result;
    } else if (numberOfFamily === "6") {
      const result: string = "4,210";
      return result;
    } else {
      const result: string = "0";
      return result;
    }
  } else if (parseFloat(salary) >= 2400000 && parseFloat(salary) < 2410000) {
    if (numberOfFamily === "1") {
      return "32,380";
    } else if (numberOfFamily === "2") {
      return "25,380";
    } else if (numberOfFamily === "3") {
      return "14,530";
    } else if (numberOfFamily === "4") {
      return "11,160";
    } else if (numberOfFamily === "5") {
      return "7,780";
    } else if (numberOfFamily === "6") {
      return "4,410";
    } else if (numberOfFamily === "7") {
      return "1,030";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2410000 && parseFloat(salary) < 2420000) {
    if (numberOfFamily === "1") {
      return "32,700";
    } else if (numberOfFamily === "2") {
      return "25,700";
    } else if (numberOfFamily === "3") {
      return "14,730";
    } else if (numberOfFamily === "4") {
      return "11,360";
    } else if (numberOfFamily === "5") {
      return "7,980";
    } else if (numberOfFamily === "6") {
      return "4,610";
    } else if (numberOfFamily === "7") {
      return "1,230";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2420000 && parseFloat(salary) < 2430000) {
    if (numberOfFamily === "1") {
      return "33,020";
    } else if (numberOfFamily === "2") {
      return "26,020";
    } else if (numberOfFamily === "3") {
      return "14,930";
    } else if (numberOfFamily === "4") {
      return "11,560";
    } else if (numberOfFamily === "5") {
      return "8,180";
    } else if (numberOfFamily === "6") {
      return "4,810";
    } else if (numberOfFamily === "7") {
      return "1,430";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2430000 && parseFloat(salary) < 2440000) {
    if (numberOfFamily === "1") {
      return "33,340";
    } else if (numberOfFamily === "2") {
      return "26,340";
    } else if (numberOfFamily === "3") {
      return "15,130";
    } else if (numberOfFamily === "4") {
      return "11,760";
    } else if (numberOfFamily === "5") {
      return "8,380";
    } else if (numberOfFamily === "6") {
      return "5,010";
    } else if (numberOfFamily === "7") {
      return "1,630";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2440000 && parseFloat(salary) < 2450000) {
    if (numberOfFamily === "1") {
      return "33,660";
    } else if (numberOfFamily === "2") {
      return "26,660";
    } else if (numberOfFamily === "3") {
      return "15,330";
    } else if (numberOfFamily === "4") {
      return "11,950";
    } else if (numberOfFamily === "5") {
      return "8,580";
    } else if (numberOfFamily === "6") {
      return "5,200";
    } else if (numberOfFamily === "7") {
      return "1,830";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2450000 && parseFloat(salary) < 2460000) {
    if (numberOfFamily === "1") {
      return "33,980";
    } else if (numberOfFamily === "2") {
      return "26,980";
    } else if (numberOfFamily === "3") {
      return "15,530";
    } else if (numberOfFamily === "4") {
      return "12,150";
    } else if (numberOfFamily === "5") {
      return "8,780";
    } else if (numberOfFamily === "6") {
      return "5,400";
    } else if (numberOfFamily === "7") {
      return "2,030";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2460000 && parseFloat(salary) < 2470000) {
    if (numberOfFamily === "1") {
      return "34,300";
    } else if (numberOfFamily === "2") {
      return "27,300";
    } else if (numberOfFamily === "3") {
      return "15,730";
    } else if (numberOfFamily === "4") {
      return "12,350";
    } else if (numberOfFamily === "5") {
      return "8,980";
    } else if (numberOfFamily === "6") {
      return "5,600";
    } else if (numberOfFamily === "7") {
      return "2,230";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2470000 && parseFloat(salary) < 2480000) {
    if (numberOfFamily === "1") {
      return "34,630";
    } else if (numberOfFamily === "2") {
      return "27,630";
    } else if (numberOfFamily === "3") {
      return "15,920";
    } else if (numberOfFamily === "4") {
      return "12,550";
    } else if (numberOfFamily === "5") {
      return "9,170";
    } else if (numberOfFamily === "6") {
      return "5,800";
    } else if (numberOfFamily === "7") {
      return "2,420";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2480000 && parseFloat(salary) < 2490000) {
    if (numberOfFamily === "1") {
      return "34,950";
    } else if (numberOfFamily === "2") {
      return "27,950";
    } else if (numberOfFamily === "3") {
      return "16,120";
    } else if (numberOfFamily === "4") {
      return "12,750";
    } else if (numberOfFamily === "5") {
      return "9,370";
    } else if (numberOfFamily === "6") {
      return "6,000";
    } else if (numberOfFamily === "7") {
      return "2,620";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2490000 && parseFloat(salary) < 2500000) {
    if (numberOfFamily === "1") {
      return "35,270";
    } else if (numberOfFamily === "2") {
      return "28,270";
    } else if (numberOfFamily === "3") {
      return "16,320";
    } else if (numberOfFamily === "4") {
      return "12,950";
    } else if (numberOfFamily === "5") {
      return "9,570";
    } else if (numberOfFamily === "6") {
      return "6,200";
    } else if (numberOfFamily === "7") {
      return "2,820";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2500000 && parseFloat(salary) < 2510000) {
    if (numberOfFamily === "1") {
      return "35,600";
    } else if (numberOfFamily === "2") {
      return "28,600";
    } else if (numberOfFamily === "3") {
      return "16,530";
    } else if (numberOfFamily === "4") {
      return "13,150";
    } else if (numberOfFamily === "5") {
      return "9,780";
    } else if (numberOfFamily === "6") {
      return "6,400";
    } else if (numberOfFamily === "7") {
      return "3,030";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2510000 && parseFloat(salary) < 2520000) {
    if (numberOfFamily === "1") {
      return "35,940";
    } else if (numberOfFamily === "2") {
      return "28,940";
    } else if (numberOfFamily === "3") {
      return "16,740";
    } else if (numberOfFamily === "4") {
      return "13,360";
    } else if (numberOfFamily === "5") {
      return "9,990";
    } else if (numberOfFamily === "6") {
      return "6,610";
    } else if (numberOfFamily === "7") {
      return "3,240";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2520000 && parseFloat(salary) < 2530000) {
    if (numberOfFamily === "1") {
      return "36,280";
    } else if (numberOfFamily === "2") {
      return "29,280";
    } else if (numberOfFamily === "3") {
      return "16,950";
    } else if (numberOfFamily === "4") {
      return "13,580";
    } else if (numberOfFamily === "5") {
      return "10,200";
    } else if (numberOfFamily === "6") {
      return "6,830";
    } else if (numberOfFamily === "7") {
      return "3,450";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2530000 && parseFloat(salary) < 2540000) {
    if (numberOfFamily === "1") {
      return "36,630";
    } else if (numberOfFamily === "2") {
      return "29,630";
    } else if (numberOfFamily === "3") {
      return "17,160";
    } else if (numberOfFamily === "4") {
      return "13,790";
    } else if (numberOfFamily === "5") {
      return "10,410";
    } else if (numberOfFamily === "6") {
      return "7,040";
    } else if (numberOfFamily === "7") {
      return "3,660";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2540000 && parseFloat(salary) < 2550000) {
    if (numberOfFamily === "1") {
      return "36,970";
    } else if (numberOfFamily === "2") {
      return "29,970";
    } else if (numberOfFamily === "3") {
      return "17,370";
    } else if (numberOfFamily === "4") {
      return "14,000";
    } else if (numberOfFamily === "5") {
      return "10,620";
    } else if (numberOfFamily === "6") {
      return "7,250";
    } else if (numberOfFamily === "7") {
      return "3,870";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2550000 && parseFloat(salary) < 2560000) {
    if (numberOfFamily === "1") {
      return "37,310";
    } else if (numberOfFamily === "2") {
      return "30,310";
    } else if (numberOfFamily === "3") {
      return "17,590";
    } else if (numberOfFamily === "4") {
      return "14,210";
    } else if (numberOfFamily === "5") {
      return "10,840";
    } else if (numberOfFamily === "6") {
      return "7,460";
    } else if (numberOfFamily === "7") {
      return "4,090";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2560000 && parseFloat(salary) < 2570000) {
    if (numberOfFamily === "1") {
      return "37,650";
    } else if (numberOfFamily === "2") {
      return "30,650";
    } else if (numberOfFamily === "3") {
      return "17,800";
    } else if (numberOfFamily === "4") {
      return "14,420";
    } else if (numberOfFamily === "5") {
      return "11,050";
    } else if (numberOfFamily === "6") {
      return "7,670";
    } else if (numberOfFamily === "7") {
      return "4,300";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2570000 && parseFloat(salary) < 2580000) {
    if (numberOfFamily === "1") {
      return "38,000";
    } else if (numberOfFamily === "2") {
      return "31,000";
    } else if (numberOfFamily === "3") {
      return "18,010";
    } else if (numberOfFamily === "4") {
      return "14,630";
    } else if (numberOfFamily === "5") {
      return "11,260";
    } else if (numberOfFamily === "6") {
      return "7,880";
    } else if (numberOfFamily === "7") {
      return "4,510";
    } else if (numberOfFamily === "8") {
      return "1,130";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2580000 && parseFloat(salary) < 2590000) {
    if (numberOfFamily === "1") {
      return "38,340";
    } else if (numberOfFamily === "2") {
      return "31,340";
    } else if (numberOfFamily === "3") {
      return "18,220";
    } else if (numberOfFamily === "4") {
      return "14,850";
    } else if (numberOfFamily === "5") {
      return "11,470";
    } else if (numberOfFamily === "6") {
      return "8,100";
    } else if (numberOfFamily === "7") {
      return "4,720";
    } else if (numberOfFamily === "8") {
      return "1,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2590000 && parseFloat(salary) < 2600000) {
    if (numberOfFamily === "1") {
      return "38,830";
    } else if (numberOfFamily === "2") {
      return "31,680";
    } else if (numberOfFamily === "3") {
      return "18,430";
    } else if (numberOfFamily === "4") {
      return "15,060";
    } else if (numberOfFamily === "5") {
      return "11,680";
    } else if (numberOfFamily === "6") {
      return "8,310";
    } else if (numberOfFamily === "7") {
      return "4,930";
    } else if (numberOfFamily === "8") {
      return "1,560";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2600000 && parseFloat(salary) < 2610000) {
    if (numberOfFamily === "1") {
      return "39,690";
    } else if (numberOfFamily === "2") {
      return "32,020";
    } else if (numberOfFamily === "3") {
      return "18,650";
    } else if (numberOfFamily === "4") {
      return "15,270";
    } else if (numberOfFamily === "5") {
      return "11,900";
    } else if (numberOfFamily === "6") {
      return "8,520";
    } else if (numberOfFamily === "7") {
      return "5,150";
    } else if (numberOfFamily === "8") {
      return "1,770";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2610000 && parseFloat(salary) < 2620000) {
    if (numberOfFamily === "1") {
      return "40,540";
    } else if (numberOfFamily === "2") {
      return "32,360";
    } else if (numberOfFamily === "3") {
      return "18,920";
    } else if (numberOfFamily === "4") {
      return "15,480";
    } else if (numberOfFamily === "5") {
      return "12,110";
    } else if (numberOfFamily === "6") {
      return "8,730";
    } else if (numberOfFamily === "7") {
      return "5,360";
    } else if (numberOfFamily === "8") {
      return "1,980";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2620000 && parseFloat(salary) < 2630000) {
    if (numberOfFamily === "1") {
      return "41,400";
    } else if (numberOfFamily === "2") {
      return "32,710";
    } else if (numberOfFamily === "3") {
      return "19,250";
    } else if (numberOfFamily === "4") {
      return "15,690";
    } else if (numberOfFamily === "5") {
      return "12,320";
    } else if (numberOfFamily === "6") {
      return "8,940";
    } else if (numberOfFamily === "7") {
      return "5,570";
    } else if (numberOfFamily === "8") {
      return "2,190";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2630000 && parseFloat(salary) < 2640000) {
    if (numberOfFamily === "1") {
      return "42,260";
    } else if (numberOfFamily === "2") {
      return "33,050";
    } else if (numberOfFamily === "3") {
      return "19,580";
    } else if (numberOfFamily === "4") {
      return "15,910";
    } else if (numberOfFamily === "5") {
      return "12,530";
    } else if (numberOfFamily === "6") {
      return "9,160";
    } else if (numberOfFamily === "7") {
      return "5,780";
    } else if (numberOfFamily === "8") {
      return "2,410";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2640000 && parseFloat(salary) < 2650000) {
    if (numberOfFamily === "1") {
      return "43,110";
    } else if (numberOfFamily === "2") {
      return "33,390";
    } else if (numberOfFamily === "3") {
      return "19,910";
    } else if (numberOfFamily === "4") {
      return "16,120";
    } else if (numberOfFamily === "5") {
      return "12,740";
    } else if (numberOfFamily === "6") {
      return "9,370";
    } else if (numberOfFamily === "7") {
      return "5,990";
    } else if (numberOfFamily === "8") {
      return "2,620";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2650000 && parseFloat(salary) < 2660000) {
    if (numberOfFamily === "1") {
      return "43,970";
    } else if (numberOfFamily === "2") {
      return "33,730";
    } else if (numberOfFamily === "3") {
      return "20,240";
    } else if (numberOfFamily === "4") {
      return "16,330";
    } else if (numberOfFamily === "5") {
      return "12,960";
    } else if (numberOfFamily === "6") {
      return "9,580";
    } else if (numberOfFamily === "7") {
      return "6,210";
    } else if (numberOfFamily === "8") {
      return "2,830";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2660000 && parseFloat(salary) < 2670000) {
    if (numberOfFamily === "1") {
      return "44,820";
    } else if (numberOfFamily === "2") {
      return "34,080";
    } else if (numberOfFamily === "3") {
      return "20,570";
    } else if (numberOfFamily === "4") {
      return "16,540";
    } else if (numberOfFamily === "5") {
      return "13,170";
    } else if (numberOfFamily === "6") {
      return "9,790";
    } else if (numberOfFamily === "7") {
      return "6,420";
    } else if (numberOfFamily === "8") {
      return "3,040";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2670000 && parseFloat(salary) < 2680000) {
    if (numberOfFamily === "1") {
      return "45,680";
    } else if (numberOfFamily === "2") {
      return "34,420";
    } else if (numberOfFamily === "3") {
      return "20,900";
    } else if (numberOfFamily === "4") {
      return "16,750";
    } else if (numberOfFamily === "5") {
      return "13,380";
    } else if (numberOfFamily === "6") {
      return "10,000";
    } else if (numberOfFamily === "7") {
      return "6,630";
    } else if (numberOfFamily === "8") {
      return "3,250";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2680000 && parseFloat(salary) < 2690000) {
    if (numberOfFamily === "1") {
      return "46,540";
    } else if (numberOfFamily === "2") {
      return "34,760";
    } else if (numberOfFamily === "3") {
      return "21,230";
    } else if (numberOfFamily === "4") {
      return "16,970";
    } else if (numberOfFamily === "5") {
      return "13,590";
    } else if (numberOfFamily === "6") {
      return "10,220";
    } else if (numberOfFamily === "7") {
      return "6,840";
    } else if (numberOfFamily === "8") {
      return "3,470";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2690000 && parseFloat(salary) < 2700000) {
    if (numberOfFamily === "1") {
      return "47,390";
    } else if (numberOfFamily === "2") {
      return "35,100";
    } else if (numberOfFamily === "3") {
      return "21,560";
    } else if (numberOfFamily === "4") {
      return "17,180";
    } else if (numberOfFamily === "5") {
      return "13,800";
    } else if (numberOfFamily === "6") {
      return "10,430";
    } else if (numberOfFamily === "7") {
      return "7,050";
    } else if (numberOfFamily === "8") {
      return "3,680";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2700000 && parseFloat(salary) < 2710000) {
    if (numberOfFamily === "1") {
      return "48,250";
    } else if (numberOfFamily === "2") {
      return "35,450";
    } else if (numberOfFamily === "3") {
      return "21,890";
    } else if (numberOfFamily === "4") {
      return "17,390";
    } else if (numberOfFamily === "5") {
      return "14,020";
    } else if (numberOfFamily === "6") {
      return "10,640";
    } else if (numberOfFamily === "7") {
      return "7,270";
    } else if (numberOfFamily === "8") {
      return "3,890";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2710000 && parseFloat(salary) < 2720000) {
    if (numberOfFamily === "1") {
      return "49,100";
    } else if (numberOfFamily === "2") {
      return "35,790";
    } else if (numberOfFamily === "3") {
      return "22,220";
    } else if (numberOfFamily === "4") {
      return "17,600";
    } else if (numberOfFamily === "5") {
      return "14,230";
    } else if (numberOfFamily === "6") {
      return "10,850";
    } else if (numberOfFamily === "7") {
      return "7,480";
    } else if (numberOfFamily === "8") {
      return "4,100";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2720000 && parseFloat(salary) < 2730000) {
    if (numberOfFamily === "1") {
      return "49,960";
    } else if (numberOfFamily === "2") {
      return "36,130";
    } else if (numberOfFamily === "3") {
      return "22,550";
    } else if (numberOfFamily === "4") {
      return "17,810";
    } else if (numberOfFamily === "5") {
      return "14,440";
    } else if (numberOfFamily === "6") {
      return "11,060";
    } else if (numberOfFamily === "7") {
      return "7,690";
    } else if (numberOfFamily === "8") {
      return "4,310";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2730000 && parseFloat(salary) < 2740000) {
    if (numberOfFamily === "1") {
      return "50,810";
    } else if (numberOfFamily === "2") {
      return "36,470";
    } else if (numberOfFamily === "3") {
      return "22,880";
    } else if (numberOfFamily === "4") {
      return "18,030";
    } else if (numberOfFamily === "5") {
      return "14,650";
    } else if (numberOfFamily === "6") {
      return "11,280";
    } else if (numberOfFamily === "7") {
      return "7,900";
    } else if (numberOfFamily === "8") {
      return "4,530";
    } else if (numberOfFamily === "9") {
      return "1,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2740000 && parseFloat(salary) < 2750000) {
    if (numberOfFamily === "1") {
      return "51,670";
    } else if (numberOfFamily === "2") {
      return "36,810";
    } else if (numberOfFamily === "3") {
      return "23,210";
    } else if (numberOfFamily === "4") {
      return "18,240";
    } else if (numberOfFamily === "5") {
      return "14,860";
    } else if (numberOfFamily === "6") {
      return "11,490";
    } else if (numberOfFamily === "7") {
      return "8,110";
    } else if (numberOfFamily === "8") {
      return "4,740";
    } else if (numberOfFamily === "9") {
      return "1,360";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2750000 && parseFloat(salary) < 2760000) {
    if (numberOfFamily === "1") {
      return "52,530";
    } else if (numberOfFamily === "2") {
      return "37,160";
    } else if (numberOfFamily === "3") {
      return "23,540";
    } else if (numberOfFamily === "4") {
      return "18,450";
    } else if (numberOfFamily === "5") {
      return "15,070";
    } else if (numberOfFamily === "6") {
      return "11,700";
    } else if (numberOfFamily === "7") {
      return "8,320";
    } else if (numberOfFamily === "8") {
      return "4,950";
    } else if (numberOfFamily === "9") {
      return "1,570";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2760000 && parseFloat(salary) < 2770000) {
    if (numberOfFamily === "1") {
      return "53,380";
    } else if (numberOfFamily === "2") {
      return "37,500";
    } else if (numberOfFamily === "3") {
      return "23,870";
    } else if (numberOfFamily === "4") {
      return "18,660";
    } else if (numberOfFamily === "5") {
      return "15,290";
    } else if (numberOfFamily === "6") {
      return "11,910";
    } else if (numberOfFamily === "7") {
      return "8,540";
    } else if (numberOfFamily === "8") {
      return "5,160";
    } else if (numberOfFamily === "9") {
      return "1,790";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2770000 && parseFloat(salary) < 2780000) {
    if (numberOfFamily === "1") {
      return "54,240";
    } else if (numberOfFamily === "2") {
      return "37,840";
    } else if (numberOfFamily === "3") {
      return "24,200";
    } else if (numberOfFamily === "4") {
      return "18,950";
    } else if (numberOfFamily === "5") {
      return "15,500";
    } else if (numberOfFamily === "6") {
      return "12,120";
    } else if (numberOfFamily === "7") {
      return "8,750";
    } else if (numberOfFamily === "8") {
      return "5,370";
    } else if (numberOfFamily === "9") {
      return "2,000";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2780000 && parseFloat(salary) < 2790000) {
    if (numberOfFamily === "1") {
      return "55,090";
    } else if (numberOfFamily === "2") {
      return "38,180";
    } else if (numberOfFamily === "3") {
      return "24,520";
    } else if (numberOfFamily === "4") {
      return "19,270";
    } else if (numberOfFamily === "5") {
      return "15,710";
    } else if (numberOfFamily === "6") {
      return "12,340";
    } else if (numberOfFamily === "7") {
      return "8,960";
    } else if (numberOfFamily === "8") {
      return "5,590";
    } else if (numberOfFamily === "9") {
      return "2,210";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2790000 && parseFloat(salary) < 2800000) {
    if (numberOfFamily === "1") {
      return "55,950";
    } else if (numberOfFamily === "2") {
      return "38,530";
    } else if (numberOfFamily === "3") {
      return "24,850";
    } else if (numberOfFamily === "4") {
      return "19,600";
    } else if (numberOfFamily === "5") {
      return "15,920";
    } else if (numberOfFamily === "6") {
      return "12,550";
    } else if (numberOfFamily === "7") {
      return "9,170";
    } else if (numberOfFamily === "8") {
      return "5,800";
    } else if (numberOfFamily === "9") {
      return "2,420";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2800000 && parseFloat(salary) < 2810000) {
    if (numberOfFamily === "1") {
      return "56,800";
    } else if (numberOfFamily === "2") {
      return "39,300";
    } else if (numberOfFamily === "3") {
      return "25,180";
    } else if (numberOfFamily === "4") {
      return "19,930";
    } else if (numberOfFamily === "5") {
      return "16,130";
    } else if (numberOfFamily === "6") {
      return "12,760";
    } else if (numberOfFamily === "7") {
      return "9,380";
    } else if (numberOfFamily === "8") {
      return "6,010";
    } else if (numberOfFamily === "9") {
      return "2,630";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2810000 && parseFloat(salary) < 2820000) {
    if (numberOfFamily === "1") {
      return "57,660";
    } else if (numberOfFamily === "2") {
      return "40,160";
    } else if (numberOfFamily === "3") {
      return "25,510";
    } else if (numberOfFamily === "4") {
      return "20,260";
    } else if (numberOfFamily === "5") {
      return "16,350";
    } else if (numberOfFamily === "6") {
      return "12,970";
    } else if (numberOfFamily === "7") {
      return "9,600";
    } else if (numberOfFamily === "8") {
      return "6,220";
    } else if (numberOfFamily === "9") {
      return "2,850";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2820000 && parseFloat(salary) < 2830000) {
    if (numberOfFamily === "1") {
      return "58,520";
    } else if (numberOfFamily === "2") {
      return "41,020";
    } else if (numberOfFamily === "3") {
      return "25,840";
    } else if (numberOfFamily === "4") {
      return "20,590";
    } else if (numberOfFamily === "5") {
      return "16,560";
    } else if (numberOfFamily === "6") {
      return "13,180";
    } else if (numberOfFamily === "7") {
      return "9,810";
    } else if (numberOfFamily === "8") {
      return "6,430";
    } else if (numberOfFamily === "9") {
      return "3,060";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2830000 && parseFloat(salary) < 2840000) {
    if (numberOfFamily === "1") {
      return "59,370";
    } else if (numberOfFamily === "2") {
      return "41,870";
    } else if (numberOfFamily === "3") {
      return "26,170";
    } else if (numberOfFamily === "4") {
      return "20,920";
    } else if (numberOfFamily === "5") {
      return "16,770";
    } else if (numberOfFamily === "6") {
      return "13,400";
    } else if (numberOfFamily === "7") {
      return "10,020";
    } else if (numberOfFamily === "8") {
      return "6,650";
    } else if (numberOfFamily === "9") {
      return "3,270";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2840000 && parseFloat(salary) < 2850000) {
    if (numberOfFamily === "1") {
      return "60,230";
    } else if (numberOfFamily === "2") {
      return "42,730";
    } else if (numberOfFamily === "3") {
      return "26,500";
    } else if (numberOfFamily === "4") {
      return "21,250";
    } else if (numberOfFamily === "5") {
      return "16,980";
    } else if (numberOfFamily === "6") {
      return "13,610";
    } else if (numberOfFamily === "7") {
      return "10,230";
    } else if (numberOfFamily === "8") {
      return "6,860";
    } else if (numberOfFamily === "9") {
      return "3,480";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2850000 && parseFloat(salary) < 2860000) {
    if (numberOfFamily === "1") {
      return "61,080";
    } else if (numberOfFamily === "2") {
      return "43,580";
    } else if (numberOfFamily === "3") {
      return "26,830";
    } else if (numberOfFamily === "4") {
      return "21,580";
    } else if (numberOfFamily === "5") {
      return "17,190";
    } else if (numberOfFamily === "6") {
      return "13,820";
    } else if (numberOfFamily === "7") {
      return "10,440";
    } else if (numberOfFamily === "8") {
      return "7,070";
    } else if (numberOfFamily === "9") {
      return "3,690";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2860000 && parseFloat(salary) < 2870000) {
    if (numberOfFamily === "1") {
      return "61,940";
    } else if (numberOfFamily === "2") {
      return "44,440";
    } else if (numberOfFamily === "3") {
      return "27,160";
    } else if (numberOfFamily === "4") {
      return "21,910";
    } else if (numberOfFamily === "5") {
      return "17,410";
    } else if (numberOfFamily === "6") {
      return "14,030";
    } else if (numberOfFamily === "7") {
      return "10,660";
    } else if (numberOfFamily === "8") {
      return "7,280";
    } else if (numberOfFamily === "9") {
      return "3,910";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2870000 && parseFloat(salary) < 2880000) {
    if (numberOfFamily === "1") {
      return "62,790";
    } else if (numberOfFamily === "2") {
      return "45,290";
    } else if (numberOfFamily === "3") {
      return "27,490";
    } else if (numberOfFamily === "4") {
      return "22,240";
    } else if (numberOfFamily === "5") {
      return "17,620";
    } else if (numberOfFamily === "6") {
      return "14,240";
    } else if (numberOfFamily === "7") {
      return "10,870";
    } else if (numberOfFamily === "8") {
      return "7,490";
    } else if (numberOfFamily === "9") {
      return "4,120";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2880000 && parseFloat(salary) < 2890000) {
    if (numberOfFamily === "1") {
      return "63,650";
    } else if (numberOfFamily === "2") {
      return "46,150";
    } else if (numberOfFamily === "3") {
      return "27,820";
    } else if (numberOfFamily === "4") {
      return "22,570";
    } else if (numberOfFamily === "5") {
      return "17,830";
    } else if (numberOfFamily === "6") {
      return "14,460";
    } else if (numberOfFamily === "7") {
      return "11,080";
    } else if (numberOfFamily === "8") {
      return "7,710";
    } else if (numberOfFamily === "9") {
      return "4,330";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2890000 && parseFloat(salary) < 2900000) {
    if (numberOfFamily === "1") {
      return "64,510";
    } else if (numberOfFamily === "2") {
      return "47,010";
    } else if (numberOfFamily === "3") {
      return "28,150";
    } else if (numberOfFamily === "4") {
      return "22,900";
    } else if (numberOfFamily === "5") {
      return "18,040";
    } else if (numberOfFamily === "6") {
      return "14,670";
    } else if (numberOfFamily === "7") {
      return "11,290";
    } else if (numberOfFamily === "8") {
      return "7,920";
    } else if (numberOfFamily === "9") {
      return "4,540";
    } else if (numberOfFamily === "10") {
      return "1,170";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2900000 && parseFloat(salary) < 2910000) {
    if (numberOfFamily === "1") {
      return "65,360";
    } else if (numberOfFamily === "2") {
      return "47,860";
    } else if (numberOfFamily === "3") {
      return "28,480";
    } else if (numberOfFamily === "4") {
      return "23,230";
    } else if (numberOfFamily === "5") {
      return "18,250";
    } else if (numberOfFamily === "6") {
      return "14,880";
    } else if (numberOfFamily === "7") {
      return "11,500";
    } else if (numberOfFamily === "8") {
      return "8,130";
    } else if (numberOfFamily === "9") {
      return "4,750";
    } else if (numberOfFamily === "10") {
      return "1,380";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2910000 && parseFloat(salary) < 2920000) {
    if (numberOfFamily === "1") {
      return "66,220";
    } else if (numberOfFamily === "2") {
      return "48,720";
    } else if (numberOfFamily === "3") {
      return "28,810";
    } else if (numberOfFamily === "4") {
      return "23,560";
    } else if (numberOfFamily === "5") {
      return "18,470";
    } else if (numberOfFamily === "6") {
      return "15,090";
    } else if (numberOfFamily === "7") {
      return "11,720";
    } else if (numberOfFamily === "8") {
      return "8,340";
    } else if (numberOfFamily === "9") {
      return "4,970";
    } else if (numberOfFamily === "10") {
      return "1,590";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2920000 && parseFloat(salary) < 2930000) {
    if (numberOfFamily === "1") {
      return "67,070";
    } else if (numberOfFamily === "2") {
      return "49,570";
    } else if (numberOfFamily === "3") {
      return "29,140";
    } else if (numberOfFamily === "4") {
      return "23,890";
    } else if (numberOfFamily === "5") {
      return "18,680";
    } else if (numberOfFamily === "6") {
      return "15,300";
    } else if (numberOfFamily === "7") {
      return "11,930";
    } else if (numberOfFamily === "8") {
      return "8,550";
    } else if (numberOfFamily === "9") {
      return "5,180";
    } else if (numberOfFamily === "10") {
      return "1,800";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2930000 && parseFloat(salary) < 2940000) {
    if (numberOfFamily === "1") {
      return "67,930";
    } else if (numberOfFamily === "2") {
      return "50,430";
    } else if (numberOfFamily === "3") {
      return "29,470";
    } else if (numberOfFamily === "4") {
      return "24,220";
    } else if (numberOfFamily === "5") {
      return "18,970";
    } else if (numberOfFamily === "6") {
      return "15,510";
    } else if (numberOfFamily === "7") {
      return "12,140";
    } else if (numberOfFamily === "8") {
      return "8,760";
    } else if (numberOfFamily === "9") {
      return "5,390";
    } else if (numberOfFamily === "10") {
      return "2,010";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2940000 && parseFloat(salary) < 2950000) {
    if (numberOfFamily === "1") {
      return "68,780";
    } else if (numberOfFamily === "2") {
      return "51,280";
    } else if (numberOfFamily === "3") {
      return "29,800";
    } else if (numberOfFamily === "4") {
      return "24,550";
    } else if (numberOfFamily === "5") {
      return "19,300";
    } else if (numberOfFamily === "6") {
      return "15,730";
    } else if (numberOfFamily === "7") {
      return "12,350";
    } else if (numberOfFamily === "8") {
      return "8,980";
    } else if (numberOfFamily === "9") {
      return "5,600";
    } else if (numberOfFamily === "10") {
      return "2,230";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2950000 && parseFloat(salary) < 2960000) {
    if (numberOfFamily === "1") {
      return "69,640";
    } else if (numberOfFamily === "2") {
      return "52,140";
    } else if (numberOfFamily === "3") {
      return "30,130";
    } else if (numberOfFamily === "4") {
      return "24,880";
    } else if (numberOfFamily === "5") {
      return "19,630";
    } else if (numberOfFamily === "6") {
      return "15,940";
    } else if (numberOfFamily === "7") {
      return "12,560";
    } else if (numberOfFamily === "8") {
      return "9,190";
    } else if (numberOfFamily === "9") {
      return "5,810";
    } else if (numberOfFamily === "10") {
      return "2,440";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2960000 && parseFloat(salary) < 2970000) {
    if (numberOfFamily === "1") {
      return "70,500";
    } else if (numberOfFamily === "2") {
      return "53,000";
    } else if (numberOfFamily === "3") {
      return "30,460";
    } else if (numberOfFamily === "4") {
      return "25,210";
    } else if (numberOfFamily === "5") {
      return "19,960";
    } else if (numberOfFamily === "6") {
      return "16,150";
    } else if (numberOfFamily === "7") {
      return "12,780";
    } else if (numberOfFamily === "8") {
      return "9,400";
    } else if (numberOfFamily === "9") {
      return "6,030";
    } else if (numberOfFamily === "10") {
      return "2,650";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2970000 && parseFloat(salary) < 2980000) {
    if (numberOfFamily === "1") {
      return "71,350";
    } else if (numberOfFamily === "2") {
      return "53,850";
    } else if (numberOfFamily === "3") {
      return "30,790";
    } else if (numberOfFamily === "4") {
      return "25,540";
    } else if (numberOfFamily === "5") {
      return "20,290";
    } else if (numberOfFamily === "6") {
      return "16,370";
    } else if (numberOfFamily === "7") {
      return "12,990";
    } else if (numberOfFamily === "8") {
      return "9,610";
    } else if (numberOfFamily === "9") {
      return "6,240";
    } else if (numberOfFamily === "10") {
      return "2,860";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2980000 && parseFloat(salary) < 2990000) {
    if (numberOfFamily === "1") {
      return "72,210";
    } else if (numberOfFamily === "2") {
      return "54,710";
    } else if (numberOfFamily === "3") {
      return "31,120";
    } else if (numberOfFamily === "4") {
      return "25,870";
    } else if (numberOfFamily === "5") {
      return "20,620";
    } else if (numberOfFamily === "6") {
      return "16,570";
    } else if (numberOfFamily === "7") {
      return "13,200";
    } else if (numberOfFamily === "8") {
      return "9,820";
    } else if (numberOfFamily === "9") {
      return "6,450";
    } else if (numberOfFamily === "10") {
      return "3,070";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 2990000 && parseFloat(salary) < 3000000) {
    if (numberOfFamily === "1") {
      return "73,060";
    } else if (numberOfFamily === "2") {
      return "55,560";
    } else if (numberOfFamily === "3") {
      return "31,450";
    } else if (numberOfFamily === "4") {
      return "26,200";
    } else if (numberOfFamily === "5") {
      return "20,950";
    } else if (numberOfFamily === "6") {
      return "16,790";
    } else if (numberOfFamily === "7") {
      return "13,410";
    } else if (numberOfFamily === "8") {
      return "10,040";
    } else if (numberOfFamily === "9") {
      return "6,660";
    } else if (numberOfFamily === "10") {
      return "3,290";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3000000 && parseFloat(salary) < 3020000) {
    if (numberOfFamily === "1") {
      return "74,350";
    } else if (numberOfFamily === "2") {
      return "56,850";
    } else if (numberOfFamily === "3") {
      return "31,940";
    } else if (numberOfFamily === "4") {
      return "26,690";
    } else if (numberOfFamily === "5") {
      return "21,440";
    } else if (numberOfFamily === "6") {
      return "17,100";
    } else if (numberOfFamily === "7") {
      return "13,730";
    } else if (numberOfFamily === "8") {
      return "10,350";
    } else if (numberOfFamily === "9") {
      return "6,980";
    } else if (numberOfFamily === "10") {
      return "3,600";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3020000 && parseFloat(salary) < 3040000) {
    if (numberOfFamily === "1") {
      return "76,060";
    } else if (numberOfFamily === "2") {
      return "58,560";
    } else if (numberOfFamily === "3") {
      return "32,600";
    } else if (numberOfFamily === "4") {
      return "27,350";
    } else if (numberOfFamily === "5") {
      return "22,100";
    } else if (numberOfFamily === "6") {
      return "17,530";
    } else if (numberOfFamily === "7") {
      return "14,150";
    } else if (numberOfFamily === "8") {
      return "10,780";
    } else if (numberOfFamily === "9") {
      return "7,400";
    } else if (numberOfFamily === "10") {
      return "4,030";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3040000 && parseFloat(salary) < 3060000) {
    if (numberOfFamily === "1") {
      return "77,770";
    } else if (numberOfFamily === "2") {
      return "60,270";
    } else if (numberOfFamily === "3") {
      return "33,260";
    } else if (numberOfFamily === "4") {
      return "28,010";
    } else if (numberOfFamily === "5") {
      return "22,760";
    } else if (numberOfFamily === "6") {
      return "17,950";
    } else if (numberOfFamily === "7") {
      return "14,580";
    } else if (numberOfFamily === "8") {
      return "11,200";
    } else if (numberOfFamily === "9") {
      return "7,830";
    } else if (numberOfFamily === "10") {
      return "4,450";
    } else if (numberOfFamily === "11") {
      return "1,080";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3060000 && parseFloat(salary) < 3080000) {
    if (numberOfFamily === "1") {
      return "79,480";
    } else if (numberOfFamily === "2") {
      return "61,980";
    } else if (numberOfFamily === "3") {
      return "33,920";
    } else if (numberOfFamily === "4") {
      return "28,670";
    } else if (numberOfFamily === "5") {
      return "23,420";
    } else if (numberOfFamily === "6") {
      return "18,380";
    } else if (numberOfFamily === "7") {
      return "15,000";
    } else if (numberOfFamily === "8") {
      return "11,630";
    } else if (numberOfFamily === "9") {
      return "8,250";
    } else if (numberOfFamily === "10") {
      return "4,880";
    } else if (numberOfFamily === "11") {
      return "1,500";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3080000 && parseFloat(salary) < 3100000) {
    if (numberOfFamily === "1") {
      return "81,190";
    } else if (numberOfFamily === "2") {
      return "63,690";
    } else if (numberOfFamily === "3") {
      return "34,580";
    } else if (numberOfFamily === "4") {
      return "29,330";
    } else if (numberOfFamily === "5") {
      return "24,080";
    } else if (numberOfFamily === "6") {
      return "18,830";
    } else if (numberOfFamily === "7") {
      return "15,430";
    } else if (numberOfFamily === "8") {
      return "12,050";
    } else if (numberOfFamily === "9") {
      return "8,680";
    } else if (numberOfFamily === "10") {
      return "5,300";
    } else if (numberOfFamily === "11") {
      return "1,930";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3100000 && parseFloat(salary) < 3120000) {
    if (numberOfFamily === "1") {
      return "82,900";
    } else if (numberOfFamily === "2") {
      return "65,400";
    } else if (numberOfFamily === "3") {
      return "35,240";
    } else if (numberOfFamily === "4") {
      return "29,990";
    } else if (numberOfFamily === "5") {
      return "24,740";
    } else if (numberOfFamily === "6") {
      return "19,490";
    } else if (numberOfFamily === "7") {
      return "15,850";
    } else if (numberOfFamily === "8") {
      return "12,470";
    } else if (numberOfFamily === "9") {
      return "9,100";
    } else if (numberOfFamily === "10") {
      return "5,720";
    } else if (numberOfFamily === "11") {
      return "2,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3120000 && parseFloat(salary) < 3140000) {
    if (numberOfFamily === "1") {
      return "84,620";
    } else if (numberOfFamily === "2") {
      return "67,120";
    } else if (numberOfFamily === "3") {
      return "35,900";
    } else if (numberOfFamily === "4") {
      return "30,650";
    } else if (numberOfFamily === "5") {
      return "25,400";
    } else if (numberOfFamily === "6") {
      return "20,150";
    } else if (numberOfFamily === "7") {
      return "16,270";
    } else if (numberOfFamily === "8") {
      return "12,900";
    } else if (numberOfFamily === "9") {
      return "9,520";
    } else if (numberOfFamily === "10") {
      return "6,150";
    } else if (numberOfFamily === "11") {
      return "2,770";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3140000 && parseFloat(salary) < 3160000) {
    if (numberOfFamily === "1") {
      return "86,330";
    } else if (numberOfFamily === "2") {
      return "68,830";
    } else if (numberOfFamily === "3") {
      return "36,560";
    } else if (numberOfFamily === "4") {
      return "31,310";
    } else if (numberOfFamily === "5") {
      return "26,060";
    } else if (numberOfFamily === "6") {
      return "20,810";
    } else if (numberOfFamily === "7") {
      return "16,700";
    } else if (numberOfFamily === "8") {
      return "13,320";
    } else if (numberOfFamily === "9") {
      return "9,950";
    } else if (numberOfFamily === "10") {
      return "6,570";
    } else if (numberOfFamily === "11") {
      return "3,200";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3160000 && parseFloat(salary) < 3180000) {
    if (numberOfFamily === "1") {
      return "88,040";
    } else if (numberOfFamily === "2") {
      return "70,540";
    } else if (numberOfFamily === "3") {
      return "37,220";
    } else if (numberOfFamily === "4") {
      return "31,970";
    } else if (numberOfFamily === "5") {
      return "26,720";
    } else if (numberOfFamily === "6") {
      return "21,470";
    } else if (numberOfFamily === "7") {
      return "17,120";
    } else if (numberOfFamily === "8") {
      return "13,750";
    } else if (numberOfFamily === "9") {
      return "10,370";
    } else if (numberOfFamily === "10") {
      return "7,000";
    } else if (numberOfFamily === "11") {
      return "3,620";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3180000 && parseFloat(salary) < 3200000) {
    if (numberOfFamily === "1") {
      return "89,750";
    } else if (numberOfFamily === "2") {
      return "72,250";
    } else if (numberOfFamily === "3") {
      return "37,880";
    } else if (numberOfFamily === "4") {
      return "32,630";
    } else if (numberOfFamily === "5") {
      return "27,380";
    } else if (numberOfFamily === "6") {
      return "22,130";
    } else if (numberOfFamily === "7") {
      return "17,540";
    } else if (numberOfFamily === "8") {
      return "14,170";
    } else if (numberOfFamily === "9") {
      return "10,790";
    } else if (numberOfFamily === "10") {
      return "7,420";
    } else if (numberOfFamily === "11") {
      return "4,040";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3200000 && parseFloat(salary) < 3220000) {
    if (numberOfFamily === "1") {
      return "91,460";
    } else if (numberOfFamily === "2") {
      return "73,960";
    } else if (numberOfFamily === "3") {
      return "38,540";
    } else if (numberOfFamily === "4") {
      return "33,290";
    } else if (numberOfFamily === "5") {
      return "28,040";
    } else if (numberOfFamily === "6") {
      return "22,790";
    } else if (numberOfFamily === "7") {
      return "17,970";
    } else if (numberOfFamily === "8") {
      return "14,590";
    } else if (numberOfFamily === "9") {
      return "11,220";
    } else if (numberOfFamily === "10") {
      return "7,840";
    } else if (numberOfFamily === "11") {
      return "4,470";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3220000 && parseFloat(salary) < 3240000) {
    if (numberOfFamily === "1") {
      return "93,170";
    } else if (numberOfFamily === "2") {
      return "75,670";
    } else if (numberOfFamily === "3") {
      return "40,120";
    } else if (numberOfFamily === "4") {
      return "33,950";
    } else if (numberOfFamily === "5") {
      return "28,700";
    } else if (numberOfFamily === "6") {
      return "23,450";
    } else if (numberOfFamily === "7") {
      return "18,390";
    } else if (numberOfFamily === "8") {
      return "15,020";
    } else if (numberOfFamily === "9") {
      return "11,640";
    } else if (numberOfFamily === "10") {
      return "8,270";
    } else if (numberOfFamily === "11") {
      return "4,890";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3240000 && parseFloat(salary) < 3260000) {
    if (numberOfFamily === "1") {
      return "95,430";
    } else if (numberOfFamily === "2") {
      return "77,380";
    } else if (numberOfFamily === "3") {
      return "41,770";
    } else if (numberOfFamily === "4") {
      return "34,610";
    } else if (numberOfFamily === "5") {
      return "29,360";
    } else if (numberOfFamily === "6") {
      return "24,110";
    } else if (numberOfFamily === "7") {
      return "18,860";
    } else if (numberOfFamily === "8") {
      return "15,440";
    } else if (numberOfFamily === "9") {
      return "12,070";
    } else if (numberOfFamily === "10") {
      return "8,690";
    } else if (numberOfFamily === "11") {
      return "5,320";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3260000 && parseFloat(salary) < 3280000) {
    if (numberOfFamily === "1") {
      return "97,880";
    } else if (numberOfFamily === "2") {
      return "79,100";
    } else if (numberOfFamily === "3") {
      return "43,420";
    } else if (numberOfFamily === "4") {
      return "35,270";
    } else if (numberOfFamily === "5") {
      return "30,020";
    } else if (numberOfFamily === "6") {
      return "24,770";
    } else if (numberOfFamily === "7") {
      return "19,520";
    } else if (numberOfFamily === "8") {
      return "15,870";
    } else if (numberOfFamily === "9") {
      return "12,490";
    } else if (numberOfFamily === "10") {
      return "9,120";
    } else if (numberOfFamily === "11") {
      return "5,740";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3280000 && parseFloat(salary) < 3300000) {
    if (numberOfFamily === "1") {
      return "100,320";
    } else if (numberOfFamily === "2") {
      return "80,810";
    } else if (numberOfFamily === "3") {
      return "45,070";
    } else if (numberOfFamily === "4") {
      return "35,920";
    } else if (numberOfFamily === "5") {
      return "30,670";
    } else if (numberOfFamily === "6") {
      return "25,420";
    } else if (numberOfFamily === "7") {
      return "20,170";
    } else if (numberOfFamily === "8") {
      return "16,290";
    } else if (numberOfFamily === "9") {
      return "12,910";
    } else if (numberOfFamily === "10") {
      return "9,540";
    } else if (numberOfFamily === "11") {
      return "6,160";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3300000 && parseFloat(salary) < 3320000) {
    if (numberOfFamily === "1") {
      return "102,770";
    } else if (numberOfFamily === "2") {
      return "82,520";
    } else if (numberOfFamily === "3") {
      return "46,720";
    } else if (numberOfFamily === "4") {
      return "36,580";
    } else if (numberOfFamily === "5") {
      return "31,330";
    } else if (numberOfFamily === "6") {
      return "26,080";
    } else if (numberOfFamily === "7") {
      return "20,830";
    } else if (numberOfFamily === "8") {
      return "16,710";
    } else if (numberOfFamily === "9") {
      return "13,340";
    } else if (numberOfFamily === "10") {
      return "9,960";
    } else if (numberOfFamily === "11") {
      return "6,590";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3320000 && parseFloat(salary) < 3340000) {
    if (numberOfFamily === "1") {
      return "105,210";
    } else if (numberOfFamily === "2") {
      return "84,230";
    } else if (numberOfFamily === "3") {
      return "48,370";
    } else if (numberOfFamily === "4") {
      return "37,240";
    } else if (numberOfFamily === "5") {
      return "31,990";
    } else if (numberOfFamily === "6") {
      return "26,740";
    } else if (numberOfFamily === "7") {
      return "21,490";
    } else if (numberOfFamily === "8") {
      return "17,140";
    } else if (numberOfFamily === "9") {
      return "13,760";
    } else if (numberOfFamily === "10") {
      return "10,390";
    } else if (numberOfFamily === "11") {
      return "7,010";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3340000 && parseFloat(salary) < 3360000) {
    if (numberOfFamily === "1") {
      return "107,660";
    } else if (numberOfFamily === "2") {
      return "85,940";
    } else if (numberOfFamily === "3") {
      return "49,940";
    } else if (numberOfFamily === "4") {
      return "37,870";
    } else if (numberOfFamily === "5") {
      return "32,620";
    } else if (numberOfFamily === "6") {
      return "27,370";
    } else if (numberOfFamily === "7") {
      return "22,120";
    } else if (numberOfFamily === "8") {
      return "17,540";
    } else if (numberOfFamily === "9") {
      return "14,170";
    } else if (numberOfFamily === "10") {
      return "10,790";
    } else if (numberOfFamily === "11") {
      return "7,420";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3360000 && parseFloat(salary) < 3380000) {
    if (numberOfFamily === "1") {
      return "110,100";
    } else if (numberOfFamily === "2") {
      return "87,650";
    } else if (numberOfFamily === "3") {
      return "51,510";
    } else if (numberOfFamily === "4") {
      return "38,500";
    } else if (numberOfFamily === "5") {
      return "33,250";
    } else if (numberOfFamily === "6") {
      return "28,000";
    } else if (numberOfFamily === "7") {
      return "22,750";
    } else if (numberOfFamily === "8") {
      return "17,950";
    } else if (numberOfFamily === "9") {
      return "14,570";
    } else if (numberOfFamily === "10") {
      return "11,200";
    } else if (numberOfFamily === "11") {
      return "7,820";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3380000 && parseFloat(salary) < 3400000) {
    if (numberOfFamily === "1") {
      return "112,550";
    } else if (numberOfFamily === "2") {
      return "89,370";
    } else if (numberOfFamily === "3") {
      return "53,070";
    } else if (numberOfFamily === "4") {
      return "39,950";
    } else if (numberOfFamily === "5") {
      return "33,880";
    } else if (numberOfFamily === "6") {
      return "28,630";
    } else if (numberOfFamily === "7") {
      return "23,380";
    } else if (numberOfFamily === "8") {
      return "18,350";
    } else if (numberOfFamily === "9") {
      return "14,970";
    } else if (numberOfFamily === "10") {
      return "11,600";
    } else if (numberOfFamily === "11") {
      return "8,220";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3400000 && parseFloat(salary) < 3420000) {
    if (numberOfFamily === "1") {
      return "114,990";
    } else if (numberOfFamily === "2") {
      return "91,080";
    } else if (numberOfFamily === "3") {
      return "54,640";
    } else if (numberOfFamily === "4") {
      return "41,510";
    } else if (numberOfFamily === "5") {
      return "34,500";
    } else if (numberOfFamily === "6") {
      return "29,250";
    } else if (numberOfFamily === "7") {
      return "24,000";
    } else if (numberOfFamily === "8") {
      return "18,750";
    } else if (numberOfFamily === "9") {
      return "15,370";
    } else if (numberOfFamily === "10") {
      return "12,000";
    } else if (numberOfFamily === "11") {
      return "8,620";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3420000 && parseFloat(salary) < 3440000) {
    if (numberOfFamily === "1") {
      return "117,440";
    } else if (numberOfFamily === "2") {
      return "92,790";
    } else if (numberOfFamily === "3") {
      return "56,200";
    } else if (numberOfFamily === "4") {
      return "43,080";
    } else if (numberOfFamily === "5") {
      return "35,130";
    } else if (numberOfFamily === "6") {
      return "29,880";
    } else if (numberOfFamily === "7") {
      return "24,630";
    } else if (numberOfFamily === "8") {
      return "19,380";
    } else if (numberOfFamily === "9") {
      return "15,780";
    } else if (numberOfFamily === "10") {
      return "12,400";
    } else if (numberOfFamily === "11") {
      return "9,030";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3440000 && parseFloat(salary) < 3460000) {
    if (numberOfFamily === "1") {
      return "119,880";
    } else if (numberOfFamily === "2") {
      return "94,880";
    } else if (numberOfFamily === "3") {
      return "57,770";
    } else if (numberOfFamily === "4") {
      return "44,640";
    } else if (numberOfFamily === "5") {
      return "35,750";
    } else if (numberOfFamily === "6") {
      return "30,500";
    } else if (numberOfFamily === "7") {
      return "25,250";
    } else if (numberOfFamily === "8") {
      return "20,000";
    } else if (numberOfFamily === "9") {
      return "16,180";
    } else if (numberOfFamily === "10") {
      return "12,800";
    } else if (numberOfFamily === "11") {
      return "9,430";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3460000 && parseFloat(salary) < 3480000) {
    if (numberOfFamily === "1") {
      return "122,330";
    } else if (numberOfFamily === "2") {
      return "97,330";
    } else if (numberOfFamily === "3") {
      return "59,330";
    } else if (numberOfFamily === "4") {
      return "46,210";
    } else if (numberOfFamily === "5") {
      return "36,380";
    } else if (numberOfFamily === "6") {
      return "31,130";
    } else if (numberOfFamily === "7") {
      return "25,880";
    } else if (numberOfFamily === "8") {
      return "20,630";
    } else if (numberOfFamily === "9") {
      return "16,580";
    } else if (numberOfFamily === "10") {
      return "13,210";
    } else if (numberOfFamily === "11") {
      return "9,830";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3480000 && parseFloat(salary) < 3500000) {
    if (numberOfFamily === "1") {
      return "124,770";
    } else if (numberOfFamily === "2") {
      return "99,770";
    } else if (numberOfFamily === "3") {
      return "60,900";
    } else if (numberOfFamily === "4") {
      return "47,770";
    } else if (numberOfFamily === "5") {
      return "37,010";
    } else if (numberOfFamily === "6") {
      return "31,760";
    } else if (numberOfFamily === "7") {
      return "26,510";
    } else if (numberOfFamily === "8") {
      return "21,260";
    } else if (numberOfFamily === "9") {
      return "16,980";
    } else if (numberOfFamily === "10") {
      return "13,610";
    } else if (numberOfFamily === "11") {
      return "10,230";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3500000 && parseFloat(salary) < 3520000) {
    if (numberOfFamily === "1") {
      return "127,220";
    } else if (numberOfFamily === "2") {
      return "102,220";
    } else if (numberOfFamily === "3") {
      return "62,460";
    } else if (numberOfFamily === "4") {
      return "49,340";
    } else if (numberOfFamily === "5") {
      return "37,630";
    } else if (numberOfFamily === "6") {
      return "32,380";
    } else if (numberOfFamily === "7") {
      return "27,130";
    } else if (numberOfFamily === "8") {
      return "21,880";
    } else if (numberOfFamily === "9") {
      return "17,390";
    } else if (numberOfFamily === "10") {
      return "14,010";
    } else if (numberOfFamily === "11") {
      return "10,640";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3520000 && parseFloat(salary) < 3540000) {
    if (numberOfFamily === "1") {
      return "129,660";
    } else if (numberOfFamily === "2") {
      return "104,660";
    } else if (numberOfFamily === "3") {
      return "64,030";
    } else if (numberOfFamily === "4") {
      return "50,900";
    } else if (numberOfFamily === "5") {
      return "38,260";
    } else if (numberOfFamily === "6") {
      return "33,010";
    } else if (numberOfFamily === "7") {
      return "27,760";
    } else if (numberOfFamily === "8") {
      return "22,510";
    } else if (numberOfFamily === "9") {
      return "17,790";
    } else if (numberOfFamily === "10") {
      return "14,410";
    } else if (numberOfFamily === "11") {
      return "11,040";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3540000 && parseFloat(salary) < 3560000) {
    if (numberOfFamily === "1") {
      return "132,110";
    } else if (numberOfFamily === "2") {
      return "107,110";
    } else if (numberOfFamily === "3") {
      return "65,590";
    } else if (numberOfFamily === "4") {
      return "52,460";
    } else if (numberOfFamily === "5") {
      return "39,340";
    } else if (numberOfFamily === "6") {
      return "33,630";
    } else if (numberOfFamily === "7") {
      return "28,380";
    } else if (numberOfFamily === "8") {
      return "23,130";
    } else if (numberOfFamily === "9") {
      return "18,190";
    } else if (numberOfFamily === "10") {
      return "14,820";
    } else if (numberOfFamily === "11") {
      return "11,440";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3560000 && parseFloat(salary) < 3580000) {
    if (numberOfFamily === "1") {
      return "134,550";
    } else if (numberOfFamily === "2") {
      return "109,550";
    } else if (numberOfFamily === "3") {
      return "67,150";
    } else if (numberOfFamily === "4") {
      return "54,030";
    } else if (numberOfFamily === "5") {
      return "40,900";
    } else if (numberOfFamily === "6") {
      return "34,260";
    } else if (numberOfFamily === "7") {
      return "29,010";
    } else if (numberOfFamily === "8") {
      return "23,760";
    } else if (numberOfFamily === "9") {
      return "18,590";
    } else if (numberOfFamily === "10") {
      return "15,220";
    } else if (numberOfFamily === "11") {
      return "11,840";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3580000 && parseFloat(salary) < 3600000) {
    if (numberOfFamily === "1") {
      return "137,000";
    } else if (numberOfFamily === "2") {
      return "112,000";
    } else if (numberOfFamily === "3") {
      return "68,720";
    } else if (numberOfFamily === "4") {
      return "55,590";
    } else if (numberOfFamily === "5") {
      return "42,470";
    } else if (numberOfFamily === "6") {
      return "34,880";
    } else if (numberOfFamily === "7") {
      return "29,630";
    } else if (numberOfFamily === "8") {
      return "24,380";
    } else if (numberOfFamily === "9") {
      return "19,130";
    } else if (numberOfFamily === "10") {
      return "15,620";
    } else if (numberOfFamily === "11") {
      return "12,250";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3600000 && parseFloat(salary) < 3620000) {
    if (numberOfFamily === "1") {
      return "139,440";
    } else if (numberOfFamily === "2") {
      return "114,440";
    } else if (numberOfFamily === "3") {
      return "70,280";
    } else if (numberOfFamily === "4") {
      return "57,160";
    } else if (numberOfFamily === "5") {
      return "44,030";
    } else if (numberOfFamily === "6") {
      return "35,510";
    } else if (numberOfFamily === "7") {
      return "30,260";
    } else if (numberOfFamily === "8") {
      return "25,010";
    } else if (numberOfFamily === "9") {
      return "19,760";
    } else if (numberOfFamily === "10") {
      return "16,020";
    } else if (numberOfFamily === "11") {
      return "12,650";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3620000 && parseFloat(salary) < 3640000) {
    if (numberOfFamily === "1") {
      return "141,890";
    } else if (numberOfFamily === "2") {
      return "116,890";
    } else if (numberOfFamily === "3") {
      return "71,850";
    } else if (numberOfFamily === "4") {
      return "58,720";
    } else if (numberOfFamily === "5") {
      return "45,600";
    } else if (numberOfFamily === "6") {
      return "36,140";
    } else if (numberOfFamily === "7") {
      return "30,890";
    } else if (numberOfFamily === "8") {
      return "25,640";
    } else if (numberOfFamily === "9") {
      return "20,390";
    } else if (numberOfFamily === "10") {
      return "16,420";
    } else if (numberOfFamily === "11") {
      return "13,050";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3640000 && parseFloat(salary) < 3660000) {
    if (numberOfFamily === "1") {
      return "144,330";
    } else if (numberOfFamily === "2") {
      return "119,330";
    } else if (numberOfFamily === "3") {
      return "73,410";
    } else if (numberOfFamily === "4") {
      return "60,290";
    } else if (numberOfFamily === "5") {
      return "47,160";
    } else if (numberOfFamily === "6") {
      return "36,760";
    } else if (numberOfFamily === "7") {
      return "31,510";
    } else if (numberOfFamily === "8") {
      return "26,260";
    } else if (numberOfFamily === "9") {
      return "21,010";
    } else if (numberOfFamily === "10") {
      return "16,830";
    } else if (numberOfFamily === "11") {
      return "13,450";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3660000 && parseFloat(salary) < 3680000) {
    if (numberOfFamily === "1") {
      return "146,780";
    } else if (numberOfFamily === "2") {
      return "121,780";
    } else if (numberOfFamily === "3") {
      return "74,980";
    } else if (numberOfFamily === "4") {
      return "61,850";
    } else if (numberOfFamily === "5") {
      return "48,730";
    } else if (numberOfFamily === "6") {
      return "37,390";
    } else if (numberOfFamily === "7") {
      return "32,140";
    } else if (numberOfFamily === "8") {
      return "26,890";
    } else if (numberOfFamily === "9") {
      return "21,640";
    } else if (numberOfFamily === "10") {
      return "17,230";
    } else if (numberOfFamily === "11") {
      return "13,850";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3680000 && parseFloat(salary) < 3700000) {
    if (numberOfFamily === "1") {
      return "149,220";
    } else if (numberOfFamily === "2") {
      return "124,220";
    } else if (numberOfFamily === "3") {
      return "76,540";
    } else if (numberOfFamily === "4") {
      return "63,420";
    } else if (numberOfFamily === "5") {
      return "50,290";
    } else if (numberOfFamily === "6") {
      return "38,010";
    } else if (numberOfFamily === "7") {
      return "32,760";
    } else if (numberOfFamily === "8") {
      return "27,510";
    } else if (numberOfFamily === "9") {
      return "22,260";
    } else if (numberOfFamily === "10") {
      return "17,630";
    } else if (numberOfFamily === "11") {
      return "14,260";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3700000 && parseFloat(salary) < 3720000) {
    if (numberOfFamily === "1") {
      return "151,670";
    } else if (numberOfFamily === "2") {
      return "126,670";
    } else if (numberOfFamily === "3") {
      return "78,110";
    } else if (numberOfFamily === "4") {
      return "64,980";
    } else if (numberOfFamily === "5") {
      return "51,860";
    } else if (numberOfFamily === "6") {
      return "38,730";
    } else if (numberOfFamily === "7") {
      return "33,390";
    } else if (numberOfFamily === "8") {
      return "28,140";
    } else if (numberOfFamily === "9") {
      return "22,890";
    } else if (numberOfFamily === "10") {
      return "18,030";
    } else if (numberOfFamily === "11") {
      return "14,660";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3720000 && parseFloat(salary) < 3740000) {
    if (numberOfFamily === "1") {
      return "154,110";
    } else if (numberOfFamily === "2") {
      return "129,110";
    } else if (numberOfFamily === "3") {
      return "79,670";
    } else if (numberOfFamily === "4") {
      return "66,550";
    } else if (numberOfFamily === "5") {
      return "53,420";
    } else if (numberOfFamily === "6") {
      return "40,300";
    } else if (numberOfFamily === "7") {
      return "34,020";
    } else if (numberOfFamily === "8") {
      return "28,770";
    } else if (numberOfFamily === "9") {
      return "23,520";
    } else if (numberOfFamily === "10") {
      return "18,440";
    } else if (numberOfFamily === "11") {
      return "15,060";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3740000 && parseFloat(salary) < 3760000) {
    if (numberOfFamily === "1") {
      return "156,560";
    } else if (numberOfFamily === "2") {
      return "131,560";
    } else if (numberOfFamily === "3") {
      return "81,230";
    } else if (numberOfFamily === "4") {
      return "68,110";
    } else if (numberOfFamily === "5") {
      return "54,980";
    } else if (numberOfFamily === "6") {
      return "41,860";
    } else if (numberOfFamily === "7") {
      return "34,640";
    } else if (numberOfFamily === "8") {
      return "29,390";
    } else if (numberOfFamily === "9") {
      return "24,140";
    } else if (numberOfFamily === "10") {
      return "18,890";
    } else if (numberOfFamily === "11") {
      return "15,460";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3760000 && parseFloat(salary) < 3780000) {
    if (numberOfFamily === "1") {
      return "163,920";
    } else if (numberOfFamily === "2") {
      return "136,090";
    } else if (numberOfFamily === "3") {
      return "84,260";
    } else if (numberOfFamily === "4") {
      return "71,130";
    } else if (numberOfFamily === "5") {
      return "58,010";
    } else if (numberOfFamily === "6") {
      return "44,880";
    } else if (numberOfFamily === "7") {
      return "35,850";
    } else if (numberOfFamily === "8") {
      return "30,600";
    } else if (numberOfFamily === "9") {
      return "25,350";
    } else if (numberOfFamily === "10") {
      return "20,100";
    } else if (numberOfFamily === "11") {
      return "16,240";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3780000 && parseFloat(salary) < 3800000) {
    if (numberOfFamily === "1") {
      return "166,590";
    } else if (numberOfFamily === "2") {
      return "138,740";
    } else if (numberOfFamily === "3") {
      return "85,970";
    } else if (numberOfFamily === "4") {
      return "72,850";
    } else if (numberOfFamily === "5") {
      return "59,720";
    } else if (numberOfFamily === "6") {
      return "46,600";
    } else if (numberOfFamily === "7") {
      return "36,540";
    } else if (numberOfFamily === "8") {
      return "31,290";
    } else if (numberOfFamily === "9") {
      return "26,040";
    } else if (numberOfFamily === "10") {
      return "20,790";
    } else if (numberOfFamily === "11") {
      return "16,680";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3800000 && parseFloat(salary) < 3820000) {
    if (numberOfFamily === "1") {
      return "169,260";
    } else if (numberOfFamily === "2") {
      return "141,400";
    } else if (numberOfFamily === "3") {
      return "87,680";
    } else if (numberOfFamily === "4") {
      return "74,560";
    } else if (numberOfFamily === "5") {
      return "61,430";
    } else if (numberOfFamily === "6") {
      return "48,310";
    } else if (numberOfFamily === "7") {
      return "37,220";
    } else if (numberOfFamily === "8") {
      return "31,970";
    } else if (numberOfFamily === "9") {
      return "26,720";
    } else if (numberOfFamily === "10") {
      return "21,470";
    } else if (numberOfFamily === "11") {
      return "17,120";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3820000 && parseFloat(salary) < 3840000) {
    if (numberOfFamily === "1") {
      return "171,930";
    } else if (numberOfFamily === "2") {
      return "144,050";
    } else if (numberOfFamily === "3") {
      return "89,390";
    } else if (numberOfFamily === "4") {
      return "76,270";
    } else if (numberOfFamily === "5") {
      return "63,140";
    } else if (numberOfFamily === "6") {
      return "50,020";
    } else if (numberOfFamily === "7") {
      return "37,900";
    } else if (numberOfFamily === "8") {
      return "32,650";
    } else if (numberOfFamily === "9") {
      return "27,400";
    } else if (numberOfFamily === "10") {
      return "22,150";
    } else if (numberOfFamily === "11") {
      return "17,560";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3840000 && parseFloat(salary) < 3860000) {
    if (numberOfFamily === "1") {
      return "174,600";
    } else if (numberOfFamily === "2") {
      return "146,710";
    } else if (numberOfFamily === "3") {
      return "91,100";
    } else if (numberOfFamily === "4") {
      return "77,980";
    } else if (numberOfFamily === "5") {
      return "64,850";
    } else if (numberOfFamily === "6") {
      return "51,730";
    } else if (numberOfFamily === "7") {
      return "38,600";
    } else if (numberOfFamily === "8") {
      return "33,340";
    } else if (numberOfFamily === "9") {
      return "28,090";
    } else if (numberOfFamily === "10") {
      return "22,840";
    } else if (numberOfFamily === "11") {
      return "18,000";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3860000 && parseFloat(salary) < 3880000) {
    if (numberOfFamily === "1") {
      return "177,270";
    } else if (numberOfFamily === "2") {
      return "149,360";
    } else if (numberOfFamily === "3") {
      return "92,820";
    } else if (numberOfFamily === "4") {
      return "79,690";
    } else if (numberOfFamily === "5") {
      return "66,570";
    } else if (numberOfFamily === "6") {
      return "53,440";
    } else if (numberOfFamily === "7") {
      return "40,320";
    } else if (numberOfFamily === "8") {
      return "34,020";
    } else if (numberOfFamily === "9") {
      return "28,770";
    } else if (numberOfFamily === "10") {
      return "23,520";
    } else if (numberOfFamily === "11") {
      return "18,440";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3880000 && parseFloat(salary) < 3900000) {
    if (numberOfFamily === "1") {
      return "179,940";
    } else if (numberOfFamily === "2") {
      return "152,020";
    } else if (numberOfFamily === "3") {
      return "94,920";
    } else if (numberOfFamily === "4") {
      return "81,400";
    } else if (numberOfFamily === "5") {
      return "68,280";
    } else if (numberOfFamily === "6") {
      return "55,150";
    } else if (numberOfFamily === "7") {
      return "42,030";
    } else if (numberOfFamily === "8") {
      return "34,710";
    } else if (numberOfFamily === "9") {
      return "29,460";
    } else if (numberOfFamily === "10") {
      return "24,210";
    } else if (numberOfFamily === "11") {
      return "18,960";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3900000 && parseFloat(salary) < 3920000) {
    if (numberOfFamily === "1") {
      return "182,610";
    } else if (numberOfFamily === "2") {
      return "154,670";
    } else if (numberOfFamily === "3") {
      return "97,370";
    } else if (numberOfFamily === "4") {
      return "83,110";
    } else if (numberOfFamily === "5") {
      return "69,990";
    } else if (numberOfFamily === "6") {
      return "56,860";
    } else if (numberOfFamily === "7") {
      return "43,740";
    } else if (numberOfFamily === "8") {
      return "35,390";
    } else if (numberOfFamily === "9") {
      return "30,140";
    } else if (numberOfFamily === "10") {
      return "24,890";
    } else if (numberOfFamily === "11") {
      return "19,640";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3920000 && parseFloat(salary) < 3940000) {
    if (numberOfFamily === "1") {
      return "185,280";
    } else if (numberOfFamily === "2") {
      return "157,330";
    } else if (numberOfFamily === "3") {
      return "99,810";
    } else if (numberOfFamily === "4") {
      return "84,830";
    } else if (numberOfFamily === "5") {
      return "71,700";
    } else if (numberOfFamily === "6") {
      return "58,580";
    } else if (numberOfFamily === "7") {
      return "45,450";
    } else if (numberOfFamily === "8") {
      return "36,080";
    } else if (numberOfFamily === "9") {
      return "30,830";
    } else if (numberOfFamily === "10") {
      return "25,580";
    } else if (numberOfFamily === "11") {
      return "20,330";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3940000 && parseFloat(salary) < 3960000) {
    if (numberOfFamily === "1") {
      return "187,950";
    } else if (numberOfFamily === "2") {
      return "159,980";
    } else if (numberOfFamily === "3") {
      return "102,260";
    } else if (numberOfFamily === "4") {
      return "86,540";
    } else if (numberOfFamily === "5") {
      return "73,410";
    } else if (numberOfFamily === "6") {
      return "60,290";
    } else if (numberOfFamily === "7") {
      return "47,160";
    } else if (numberOfFamily === "8") {
      return "36,760";
    } else if (numberOfFamily === "9") {
      return "31,510";
    } else if (numberOfFamily === "10") {
      return "26,260";
    } else if (numberOfFamily === "11") {
      return "21,010";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3960000 && parseFloat(salary) < 3980000) {
    if (numberOfFamily === "1") {
      return "190,620";
    } else if (numberOfFamily === "2") {
      return "162,640";
    } else if (numberOfFamily === "3") {
      return "104,700";
    } else if (numberOfFamily === "4") {
      return "88,250";
    } else if (numberOfFamily === "5") {
      return "75,120";
    } else if (numberOfFamily === "6") {
      return "62,000";
    } else if (numberOfFamily === "7") {
      return "48,870";
    } else if (numberOfFamily === "8") {
      return "37,450";
    } else if (numberOfFamily === "9") {
      return "32,200";
    } else if (numberOfFamily === "10") {
      return "26,950";
    } else if (numberOfFamily === "11") {
      return "21,700";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 3980000 && parseFloat(salary) < 4000000) {
    if (numberOfFamily === "1") {
      return "193,290";
    } else if (numberOfFamily === "2") {
      return "165,290";
    } else if (numberOfFamily === "3") {
      return "107,150";
    } else if (numberOfFamily === "4") {
      return "89,960";
    } else if (numberOfFamily === "5") {
      return "76,840";
    } else if (numberOfFamily === "6") {
      return "63,710";
    } else if (numberOfFamily === "7") {
      return "50,590";
    } else if (numberOfFamily === "8") {
      return "38,130";
    } else if (numberOfFamily === "9") {
      return "32,880";
    } else if (numberOfFamily === "10") {
      return "27,630";
    } else if (numberOfFamily === "11") {
      return "22,380";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4000000 && parseFloat(salary) < 4020000) {
    if (numberOfFamily === "1") {
      return "195,960";
    } else if (numberOfFamily === "2") {
      return "167,950";
    } else if (numberOfFamily === "3") {
      return "109,590";
    } else if (numberOfFamily === "4") {
      return "91,670";
    } else if (numberOfFamily === "5") {
      return "78,550";
    } else if (numberOfFamily === "6") {
      return "65,420";
    } else if (numberOfFamily === "7") {
      return "52,300";
    } else if (numberOfFamily === "8") {
      return "39,170";
    } else if (numberOfFamily === "9") {
      return "33,570";
    } else if (numberOfFamily === "10") {
      return "28,320";
    } else if (numberOfFamily === "11") {
      return "23,070";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4020000 && parseFloat(salary) < 4040000) {
    if (numberOfFamily === "1") {
      return "198,630";
    } else if (numberOfFamily === "2") {
      return "170,600";
    } else if (numberOfFamily === "3") {
      return "112,040";
    } else if (numberOfFamily === "4") {
      return "93,380";
    } else if (numberOfFamily === "5") {
      return "80,260";
    } else if (numberOfFamily === "6") {
      return "67,130";
    } else if (numberOfFamily === "7") {
      return "54,010";
    } else if (numberOfFamily === "8") {
      return "40,880";
    } else if (numberOfFamily === "9") {
      return "34,250";
    } else if (numberOfFamily === "10") {
      return "29,000";
    } else if (numberOfFamily === "11") {
      return "23,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4040000 && parseFloat(salary) < 4060000) {
    if (numberOfFamily === "1") {
      return "201,300";
    } else if (numberOfFamily === "2") {
      return "173,260";
    } else if (numberOfFamily === "3") {
      return "114,480";
    } else if (numberOfFamily === "4") {
      return "95,730";
    } else if (numberOfFamily === "5") {
      return "81,970";
    } else if (numberOfFamily === "6") {
      return "68,840";
    } else if (numberOfFamily === "7") {
      return "55,720";
    } else if (numberOfFamily === "8") {
      return "42,590";
    } else if (numberOfFamily === "9") {
      return "34,930";
    } else if (numberOfFamily === "10") {
      return "29,680";
    } else if (numberOfFamily === "11") {
      return "24,430";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4060000 && parseFloat(salary) < 4080000) {
    if (numberOfFamily === "1") {
      return "203,970";
    } else if (numberOfFamily === "2") {
      return "175,910";
    } else if (numberOfFamily === "3") {
      return "116,930";
    } else if (numberOfFamily === "4") {
      return "98,180";
    } else if (numberOfFamily === "5") {
      return "83,680";
    } else if (numberOfFamily === "6") {
      return "70,560";
    } else if (numberOfFamily === "7") {
      return "57,430";
    } else if (numberOfFamily === "8") {
      return "44,310";
    } else if (numberOfFamily === "9") {
      return "35,620";
    } else if (numberOfFamily === "10") {
      return "30,370";
    } else if (numberOfFamily === "11") {
      return "25,120";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4080000 && parseFloat(salary) < 4100000) {
    if (numberOfFamily === "1") {
      return "206,640";
    } else if (numberOfFamily === "2") {
      return "178,570";
    } else if (numberOfFamily === "3") {
      return "119,370";
    } else if (numberOfFamily === "4") {
      return "100,620";
    } else if (numberOfFamily === "5") {
      return "85,390";
    } else if (numberOfFamily === "6") {
      return "72,270";
    } else if (numberOfFamily === "7") {
      return "59,140";
    } else if (numberOfFamily === "8") {
      return "46,020";
    } else if (numberOfFamily === "9") {
      return "36,300";
    } else if (numberOfFamily === "10") {
      return "31,050";
    } else if (numberOfFamily === "11") {
      return "25,800";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4100000 && parseFloat(salary) < 4120000) {
    if (numberOfFamily === "1") {
      return "209,310";
    } else if (numberOfFamily === "2") {
      return "181,220";
    } else if (numberOfFamily === "3") {
      return "121,820";
    } else if (numberOfFamily === "4") {
      return "103,070";
    } else if (numberOfFamily === "5") {
      return "87,100";
    } else if (numberOfFamily === "6") {
      return "73,980";
    } else if (numberOfFamily === "7") {
      return "60,850";
    } else if (numberOfFamily === "8") {
      return "47,730";
    } else if (numberOfFamily === "9") {
      return "36,990";
    } else if (numberOfFamily === "10") {
      return "31,740";
    } else if (numberOfFamily === "11") {
      return "26,490";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4120000 && parseFloat(salary) < 4140000) {
    if (numberOfFamily === "1") {
      return "211,980";
    } else if (numberOfFamily === "2") {
      return "183,880";
    } else if (numberOfFamily === "3") {
      return "124,260";
    } else if (numberOfFamily === "4") {
      return "105,510";
    } else if (numberOfFamily === "5") {
      return "88,820";
    } else if (numberOfFamily === "6") {
      return "75,690";
    } else if (numberOfFamily === "7") {
      return "62,570";
    } else if (numberOfFamily === "8") {
      return "49,440";
    } else if (numberOfFamily === "9") {
      return "37,670";
    } else if (numberOfFamily === "10") {
      return "32,420";
    } else if (numberOfFamily === "11") {
      return "27,170";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4140000 && parseFloat(salary) < 4160000) {
    if (numberOfFamily === "1") {
      return "214,650";
    } else if (numberOfFamily === "2") {
      return "186,530";
    } else if (numberOfFamily === "3") {
      return "126,710";
    } else if (numberOfFamily === "4") {
      return "107,960";
    } else if (numberOfFamily === "5") {
      return "90,530";
    } else if (numberOfFamily === "6") {
      return "77,400";
    } else if (numberOfFamily === "7") {
      return "64,280";
    } else if (numberOfFamily === "8") {
      return "51,150";
    } else if (numberOfFamily === "9") {
      return "38,360";
    } else if (numberOfFamily === "10") {
      return "33,110";
    } else if (numberOfFamily === "11") {
      return "27,860";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4160000 && parseFloat(salary) < 4180000) {
    if (numberOfFamily === "1") {
      return "217,320";
    } else if (numberOfFamily === "2") {
      return "189,190";
    } else if (numberOfFamily === "3") {
      return "129,150";
    } else if (numberOfFamily === "4") {
      return "110,400";
    } else if (numberOfFamily === "5") {
      return "92,240";
    } else if (numberOfFamily === "6") {
      return "79,110";
    } else if (numberOfFamily === "7") {
      return "65,990";
    } else if (numberOfFamily === "8") {
      return "52,860";
    } else if (numberOfFamily === "9") {
      return "39,740";
    } else if (numberOfFamily === "10") {
      return "33,790";
    } else if (numberOfFamily === "11") {
      return "28,540";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4180000 && parseFloat(salary) < 4200000) {
    if (numberOfFamily === "1") {
      return "219,990";
    } else if (numberOfFamily === "2") {
      return "191,840";
    } else if (numberOfFamily === "3") {
      return "131,600";
    } else if (numberOfFamily === "4") {
      return "112,850";
    } else if (numberOfFamily === "5") {
      return "94,100";
    } else if (numberOfFamily === "6") {
      return "80,830";
    } else if (numberOfFamily === "7") {
      return "67,700";
    } else if (numberOfFamily === "8") {
      return "54,580";
    } else if (numberOfFamily === "9") {
      return "41,450";
    } else if (numberOfFamily === "10") {
      return "34,480";
    } else if (numberOfFamily === "11") {
      return "29,230";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4200000 && parseFloat(salary) < 4220000) {
    if (numberOfFamily === "1") {
      return "222,660";
    } else if (numberOfFamily === "2") {
      return "194,500";
    } else if (numberOfFamily === "3") {
      return "134,040";
    } else if (numberOfFamily === "4") {
      return "115,290";
    } else if (numberOfFamily === "5") {
      return "96,540";
    } else if (numberOfFamily === "6") {
      return "82,540";
    } else if (numberOfFamily === "7") {
      return "69,410";
    } else if (numberOfFamily === "8") {
      return "56,290";
    } else if (numberOfFamily === "9") {
      return "43,160";
    } else if (numberOfFamily === "10") {
      return "35,160";
    } else if (numberOfFamily === "11") {
      return "29,910";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4220000 && parseFloat(salary) < 4240000) {
    if (numberOfFamily === "1") {
      return "225,330";
    } else if (numberOfFamily === "2") {
      return "197,150";
    } else if (numberOfFamily === "3") {
      return "136,490";
    } else if (numberOfFamily === "4") {
      return "117,740";
    } else if (numberOfFamily === "5") {
      return "98,990";
    } else if (numberOfFamily === "6") {
      return "84,250";
    } else if (numberOfFamily === "7") {
      return "71,120";
    } else if (numberOfFamily === "8") {
      return "58,000";
    } else if (numberOfFamily === "9") {
      return "44,870";
    } else if (numberOfFamily === "10") {
      return "35,850";
    } else if (numberOfFamily === "11") {
      return "30,600";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4240000 && parseFloat(salary) < 4260000) {
    if (numberOfFamily === "1") {
      return "228,000";
    } else if (numberOfFamily === "2") {
      return "199,810";
    } else if (numberOfFamily === "3") {
      return "138,930";
    } else if (numberOfFamily === "4") {
      return "120,180";
    } else if (numberOfFamily === "5") {
      return "101,430";
    } else if (numberOfFamily === "6") {
      return "85,960";
    } else if (numberOfFamily === "7") {
      return "72,830";
    } else if (numberOfFamily === "8") {
      return "59,710";
    } else if (numberOfFamily === "9") {
      return "46,580";
    } else if (numberOfFamily === "10") {
      return "36,530";
    } else if (numberOfFamily === "11") {
      return "31,280";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4260000 && parseFloat(salary) < 4280000) {
    if (numberOfFamily === "1") {
      return "230,670";
    } else if (numberOfFamily === "2") {
      return "202,460";
    } else if (numberOfFamily === "3") {
      return "141,380";
    } else if (numberOfFamily === "4") {
      return "122,630";
    } else if (numberOfFamily === "5") {
      return "103,880";
    } else if (numberOfFamily === "6") {
      return "87,670";
    } else if (numberOfFamily === "7") {
      return "74,550";
    } else if (numberOfFamily === "8") {
      return "61,420";
    } else if (numberOfFamily === "9") {
      return "48,300";
    } else if (numberOfFamily === "10") {
      return "37,220";
    } else if (numberOfFamily === "11") {
      return "31,970";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4280000 && parseFloat(salary) < 4300000) {
    if (numberOfFamily === "1") {
      return "233,340";
    } else if (numberOfFamily === "2") {
      return "205,120";
    } else if (numberOfFamily === "3") {
      return "143,820";
    } else if (numberOfFamily === "4") {
      return "125,070";
    } else if (numberOfFamily === "5") {
      return "106,320";
    } else if (numberOfFamily === "6") {
      return "89,380";
    } else if (numberOfFamily === "7") {
      return "76,260";
    } else if (numberOfFamily === "8") {
      return "63,130";
    } else if (numberOfFamily === "9") {
      return "50,010";
    } else if (numberOfFamily === "10") {
      return "37,900";
    } else if (numberOfFamily === "11") {
      return "32,650";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4300000 && parseFloat(salary) < 4320000) {
    if (numberOfFamily === "1") {
      return "236,010";
    } else if (numberOfFamily === "2") {
      return "207,770";
    } else if (numberOfFamily === "3") {
      return "146,270";
    } else if (numberOfFamily === "4") {
      return "127,520";
    } else if (numberOfFamily === "5") {
      return "108,770";
    } else if (numberOfFamily === "6") {
      return "91,090";
    } else if (numberOfFamily === "7") {
      return "77,970";
    } else if (numberOfFamily === "8") {
      return "64,840";
    } else if (numberOfFamily === "9") {
      return "51,720";
    } else if (numberOfFamily === "10") {
      return "38,590";
    } else if (numberOfFamily === "11") {
      return "33,330";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4320000 && parseFloat(salary) < 4340000) {
    if (numberOfFamily === "1") {
      return "238,680";
    } else if (numberOfFamily === "2") {
      return "210,430";
    } else if (numberOfFamily === "3") {
      return "148,710";
    } else if (numberOfFamily === "4") {
      return "129,960";
    } else if (numberOfFamily === "5") {
      return "111,210";
    } else if (numberOfFamily === "6") {
      return "92,810";
    } else if (numberOfFamily === "7") {
      return "79,680";
    } else if (numberOfFamily === "8") {
      return "66,560";
    } else if (numberOfFamily === "9") {
      return "53,430";
    } else if (numberOfFamily === "10") {
      return "40,310";
    } else if (numberOfFamily === "11") {
      return "34,020";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4340000 && parseFloat(salary) < 4360000) {
    if (numberOfFamily === "1") {
      return "241,350";
    } else if (numberOfFamily === "2") {
      return "213,080";
    } else if (numberOfFamily === "3") {
      return "151,160";
    } else if (numberOfFamily === "4") {
      return "132,410";
    } else if (numberOfFamily === "5") {
      return "113,660";
    } else if (numberOfFamily === "6") {
      return "94,910";
    } else if (numberOfFamily === "7") {
      return "81,390";
    } else if (numberOfFamily === "8") {
      return "68,270";
    } else if (numberOfFamily === "9") {
      return "55,140";
    } else if (numberOfFamily === "10") {
      return "42,020";
    } else if (numberOfFamily === "11") {
      return "34,700";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4360000 && parseFloat(salary) < 4380000) {
    if (numberOfFamily === "1") {
      return "244,020";
    } else if (numberOfFamily === "2") {
      return "215,740";
    } else if (numberOfFamily === "3") {
      return "153,600";
    } else if (numberOfFamily === "4") {
      return "134,850";
    } else if (numberOfFamily === "5") {
      return "116,100";
    } else if (numberOfFamily === "6") {
      return "97,350";
    } else if (numberOfFamily === "7") {
      return "83,100";
    } else if (numberOfFamily === "8") {
      return "69,980";
    } else if (numberOfFamily === "9") {
      return "56,850";
    } else if (numberOfFamily === "10") {
      return "43,730";
    } else if (numberOfFamily === "11") {
      return "35,390";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4380000 && parseFloat(salary) < 4400000) {
    if (numberOfFamily === "1") {
      return "246,690";
    } else if (numberOfFamily === "2") {
      return "218,390";
    } else if (numberOfFamily === "3") {
      return "156,050";
    } else if (numberOfFamily === "4") {
      return "137,300";
    } else if (numberOfFamily === "5") {
      return "118,550";
    } else if (numberOfFamily === "6") {
      return "99,800";
    } else if (numberOfFamily === "7") {
      return "84,820";
    } else if (numberOfFamily === "8") {
      return "71,690";
    } else if (numberOfFamily === "9") {
      return "58,570";
    } else if (numberOfFamily === "10") {
      return "45,440";
    } else if (numberOfFamily === "11") {
      return "36,070";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4400000 && parseFloat(salary) < 4420000) {
    if (numberOfFamily === "1") {
      return "249,360";
    } else if (numberOfFamily === "2") {
      return "221,050";
    } else if (numberOfFamily === "3") {
      return "158,490";
    } else if (numberOfFamily === "4") {
      return "139,740";
    } else if (numberOfFamily === "5") {
      return "120,990";
    } else if (numberOfFamily === "6") {
      return "102,240";
    } else if (numberOfFamily === "7") {
      return "86,530";
    } else if (numberOfFamily === "8") {
      return "73,400";
    } else if (numberOfFamily === "9") {
      return "60,280";
    } else if (numberOfFamily === "10") {
      return "47,150";
    } else if (numberOfFamily === "11") {
      return "36,760";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4420000 && parseFloat(salary) < 4440000) {
    if (numberOfFamily === "1") {
      return "252,030";
    } else if (numberOfFamily === "2") {
      return "223,700";
    } else if (numberOfFamily === "3") {
      return "160,940";
    } else if (numberOfFamily === "4") {
      return "142,190";
    } else if (numberOfFamily === "5") {
      return "123,440";
    } else if (numberOfFamily === "6") {
      return "104,690";
    } else if (numberOfFamily === "7") {
      return "88,240";
    } else if (numberOfFamily === "8") {
      return "75,110";
    } else if (numberOfFamily === "9") {
      return "61,990";
    } else if (numberOfFamily === "10") {
      return "48,860";
    } else if (numberOfFamily === "11") {
      return "37,440";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4440000 && parseFloat(salary) < 4460000) {
    if (numberOfFamily === "1") {
      return "254,700";
    } else if (numberOfFamily === "2") {
      return "226,360";
    } else if (numberOfFamily === "3") {
      return "163,380";
    } else if (numberOfFamily === "4") {
      return "144,630";
    } else if (numberOfFamily === "5") {
      return "125,880";
    } else if (numberOfFamily === "6") {
      return "107,130";
    } else if (numberOfFamily === "7") {
      return "89,950";
    } else if (numberOfFamily === "8") {
      return "76,820";
    } else if (numberOfFamily === "9") {
      return "63,700";
    } else if (numberOfFamily === "10") {
      return "50,570";
    } else if (numberOfFamily === "11") {
      return "38,130";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4460000 && parseFloat(salary) < 4480000) {
    if (numberOfFamily === "1") {
      return "257,370";
    } else if (numberOfFamily === "2") {
      return "229,010";
    } else if (numberOfFamily === "3") {
      return "165,830";
    } else if (numberOfFamily === "4") {
      return "147,080";
    } else if (numberOfFamily === "5") {
      return "128,330";
    } else if (numberOfFamily === "6") {
      return "109,580";
    } else if (numberOfFamily === "7") {
      return "91,660";
    } else if (numberOfFamily === "8") {
      return "78,540";
    } else if (numberOfFamily === "9") {
      return "65,410";
    } else if (numberOfFamily === "10") {
      return "52,290";
    } else if (numberOfFamily === "11") {
      return "39,160";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4480000 && parseFloat(salary) < 4500000) {
    if (numberOfFamily === "1") {
      return "260,040";
    } else if (numberOfFamily === "2") {
      return "231,670";
    } else if (numberOfFamily === "3") {
      return "168,270";
    } else if (numberOfFamily === "4") {
      return "149,520";
    } else if (numberOfFamily === "5") {
      return "130,770";
    } else if (numberOfFamily === "6") {
      return "112,020";
    } else if (numberOfFamily === "7") {
      return "93,370";
    } else if (numberOfFamily === "8") {
      return "80,250";
    } else if (numberOfFamily === "9") {
      return "67,120";
    } else if (numberOfFamily === "10") {
      return "54,000";
    } else if (numberOfFamily === "11") {
      return "40,870";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4500000 && parseFloat(salary) < 4520000) {
    if (numberOfFamily === "1") {
      return "262,840";
    } else if (numberOfFamily === "2") {
      return "234,460";
    } else if (numberOfFamily === "3") {
      return "170,850";
    } else if (numberOfFamily === "4") {
      return "152,100";
    } else if (numberOfFamily === "5") {
      return "133,350";
    } else if (numberOfFamily === "6") {
      return "114,600";
    } else if (numberOfFamily === "7") {
      return "95,850";
    } else if (numberOfFamily === "8") {
      return "82,050";
    } else if (numberOfFamily === "9") {
      return "68,930";
    } else if (numberOfFamily === "10") {
      return "55,800";
    } else if (numberOfFamily === "11") {
      return "42,680";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4520000 && parseFloat(salary) < 4540000) {
    if (numberOfFamily === "1") {
      return "265,650";
    } else if (numberOfFamily === "2") {
      return "237,250";
    } else if (numberOfFamily === "3") {
      return "173,430";
    } else if (numberOfFamily === "4") {
      return "154,680";
    } else if (numberOfFamily === "5") {
      return "135,930";
    } else if (numberOfFamily === "6") {
      return "117,180";
    } else if (numberOfFamily === "7") {
      return "98,430";
    } else if (numberOfFamily === "8") {
      return "83,860";
    } else if (numberOfFamily === "9") {
      return "70,730";
    } else if (numberOfFamily === "10") {
      return "57,610";
    } else if (numberOfFamily === "11") {
      return "44,480";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4540000 && parseFloat(salary) < 4560000) {
    if (numberOfFamily === "1") {
      return "268,450";
    } else if (numberOfFamily === "2") {
      return "240,040";
    } else if (numberOfFamily === "3") {
      return "176,010";
    } else if (numberOfFamily === "4") {
      return "157,260";
    } else if (numberOfFamily === "5") {
      return "138,510";
    } else if (numberOfFamily === "6") {
      return "119,760";
    } else if (numberOfFamily === "7") {
      return "101,010";
    } else if (numberOfFamily === "8") {
      return "85,670";
    } else if (numberOfFamily === "9") {
      return "72,540";
    } else if (numberOfFamily === "10") {
      return "59,420";
    } else if (numberOfFamily === "11") {
      return "46,290";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4560000 && parseFloat(salary) < 4580000) {
    if (numberOfFamily === "1") {
      return "271,260";
    } else if (numberOfFamily === "2") {
      return "242,830";
    } else if (numberOfFamily === "3") {
      return "178,590";
    } else if (numberOfFamily === "4") {
      return "159,840";
    } else if (numberOfFamily === "5") {
      return "141,090";
    } else if (numberOfFamily === "6") {
      return "122,340";
    } else if (numberOfFamily === "7") {
      return "103,590";
    } else if (numberOfFamily === "8") {
      return "87,470";
    } else if (numberOfFamily === "9") {
      return "74,350";
    } else if (numberOfFamily === "10") {
      return "61,220";
    } else if (numberOfFamily === "11") {
      return "48,100";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4580000 && parseFloat(salary) < 4600000) {
    if (numberOfFamily === "1") {
      return "276,560";
    } else if (numberOfFamily === "2") {
      return "248,120";
    } else if (numberOfFamily === "3") {
      return "183,670";
    } else if (numberOfFamily === "4") {
      return "164,920";
    } else if (numberOfFamily === "5") {
      return "146,170";
    } else if (numberOfFamily === "6") {
      return "127,420";
    } else if (numberOfFamily === "7") {
      return "108,670";
    } else if (numberOfFamily === "8") {
      return "89,920";
    } else if (numberOfFamily === "9") {
      return "76,150";
    } else if (numberOfFamily === "10") {
      return "63,030";
    } else if (numberOfFamily === "11") {
      return "49,900";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4600000 && parseFloat(salary) < 4620000) {
    if (numberOfFamily === "1") {
      return "279,370";
    } else if (numberOfFamily === "2") {
      return "250,910";
    } else if (numberOfFamily === "3") {
      return "186,250";
    } else if (numberOfFamily === "4") {
      return "167,500";
    } else if (numberOfFamily === "5") {
      return "148,750";
    } else if (numberOfFamily === "6") {
      return "130,000";
    } else if (numberOfFamily === "7") {
      return "111,250";
    } else if (numberOfFamily === "8") {
      return "92,500";
    } else if (numberOfFamily === "9") {
      return "77,960";
    } else if (numberOfFamily === "10") {
      return "64,830";
    } else if (numberOfFamily === "11") {
      return "51,710";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4620000 && parseFloat(salary) < 4640000) {
    if (numberOfFamily === "1") {
      return "282,170";
    } else if (numberOfFamily === "2") {
      return "253,700";
    } else if (numberOfFamily === "3") {
      return "188,830";
    } else if (numberOfFamily === "4") {
      return "170,080";
    } else if (numberOfFamily === "5") {
      return "151,330";
    } else if (numberOfFamily === "6") {
      return "132,580";
    } else if (numberOfFamily === "7") {
      return "113,830";
    } else if (numberOfFamily === "8") {
      return "95,080";
    } else if (numberOfFamily === "9") {
      return "79,760";
    } else if (numberOfFamily === "10") {
      return "66,640";
    } else if (numberOfFamily === "11") {
      return "53,510";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4640000 && parseFloat(salary) < 4660000) {
    if (numberOfFamily === "1") {
      return "284,980";
    } else if (numberOfFamily === "2") {
      return "256,490";
    } else if (numberOfFamily === "3") {
      return "191,410";
    } else if (numberOfFamily === "4") {
      return "172,660";
    } else if (numberOfFamily === "5") {
      return "153,910";
    } else if (numberOfFamily === "6") {
      return "135,160";
    } else if (numberOfFamily === "7") {
      return "116,410";
    } else if (numberOfFamily === "8") {
      return "97,660";
    } else if (numberOfFamily === "9") {
      return "81,570";
    } else if (numberOfFamily === "10") {
      return "68,450";
    } else if (numberOfFamily === "11") {
      return "55,320";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4660000 && parseFloat(salary) < 4680000) {
    if (numberOfFamily === "1") {
      return "287,780";
    } else if (numberOfFamily === "2") {
      return "259,280";
    } else if (numberOfFamily === "3") {
      return "193,990";
    } else if (numberOfFamily === "4") {
      return "175,240";
    } else if (numberOfFamily === "5") {
      return "156,490";
    } else if (numberOfFamily === "6") {
      return "137,740";
    } else if (numberOfFamily === "7") {
      return "118,990";
    } else if (numberOfFamily === "8") {
      return "100,240";
    } else if (numberOfFamily === "9") {
      return "83,380";
    } else if (numberOfFamily === "10") {
      return "70,250";
    } else if (numberOfFamily === "11") {
      return "57,130";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4680000 && parseFloat(salary) < 4700000) {
    if (numberOfFamily === "1") {
      return "290,590";
    } else if (numberOfFamily === "2") {
      return "262,070";
    } else if (numberOfFamily === "3") {
      return "196,570";
    } else if (numberOfFamily === "4") {
      return "177,820";
    } else if (numberOfFamily === "5") {
      return "159,070";
    } else if (numberOfFamily === "6") {
      return "140,320";
    } else if (numberOfFamily === "7") {
      return "121,570";
    } else if (numberOfFamily === "8") {
      return "102,820";
    } else if (numberOfFamily === "9") {
      return "85,180";
    } else if (numberOfFamily === "10") {
      return "72,060";
    } else if (numberOfFamily === "11") {
      return "58,930";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4700000 && parseFloat(salary) < 4720000) {
    if (numberOfFamily === "1") {
      return "293,390";
    } else if (numberOfFamily === "2") {
      return "264,860";
    } else if (numberOfFamily === "3") {
      return "199,150";
    } else if (numberOfFamily === "4") {
      return "180,400";
    } else if (numberOfFamily === "5") {
      return "161,650";
    } else if (numberOfFamily === "6") {
      return "142,900";
    } else if (numberOfFamily === "7") {
      return "124,150";
    } else if (numberOfFamily === "8") {
      return "105,400";
    } else if (numberOfFamily === "9") {
      return "86,990";
    } else if (numberOfFamily === "10") {
      return "73,860";
    } else if (numberOfFamily === "11") {
      return "60,740";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4720000 && parseFloat(salary) < 4740000) {
    if (numberOfFamily === "1") {
      return "296,200";
    } else if (numberOfFamily === "2") {
      return "267,650";
    } else if (numberOfFamily === "3") {
      return "201,730";
    } else if (numberOfFamily === "4") {
      return "182,980";
    } else if (numberOfFamily === "5") {
      return "164,230";
    } else if (numberOfFamily === "6") {
      return "145,480";
    } else if (numberOfFamily === "7") {
      return "126,730";
    } else if (numberOfFamily === "8") {
      return "107,980";
    } else if (numberOfFamily === "9") {
      return "89,230";
    } else if (numberOfFamily === "10") {
      return "75,670";
    } else if (numberOfFamily === "11") {
      return "62,540";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4740000 && parseFloat(salary) < 4760000) {
    if (numberOfFamily === "1") {
      return "299,000";
    } else if (numberOfFamily === "2") {
      return "270,440";
    } else if (numberOfFamily === "3") {
      return "204,310";
    } else if (numberOfFamily === "4") {
      return "185,560";
    } else if (numberOfFamily === "5") {
      return "166,810";
    } else if (numberOfFamily === "6") {
      return "148,060";
    } else if (numberOfFamily === "7") {
      return "129,310";
    } else if (numberOfFamily === "8") {
      return "110,560";
    } else if (numberOfFamily === "9") {
      return "91,810";
    } else if (numberOfFamily === "10") {
      return "77,480";
    } else if (numberOfFamily === "11") {
      return "64,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4760000 && parseFloat(salary) < 4780000) {
    if (numberOfFamily === "1") {
      return "301,810";
    } else if (numberOfFamily === "2") {
      return "273,230";
    } else if (numberOfFamily === "3") {
      return "206,890";
    } else if (numberOfFamily === "4") {
      return "188,140";
    } else if (numberOfFamily === "5") {
      return "169,390";
    } else if (numberOfFamily === "6") {
      return "150,640";
    } else if (numberOfFamily === "7") {
      return "131,890";
    } else if (numberOfFamily === "8") {
      return "113,140";
    } else if (numberOfFamily === "9") {
      return "94,390";
    } else if (numberOfFamily === "10") {
      return "79,280";
    } else if (numberOfFamily === "11") {
      return "66,160";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4780000 && parseFloat(salary) < 4800000) {
    if (numberOfFamily === "1") {
      return "303,110";
    } else if (numberOfFamily === "2") {
      return "274,520";
    } else if (numberOfFamily === "3") {
      return "208,870";
    } else if (numberOfFamily === "4") {
      return "190,050";
    } else if (numberOfFamily === "5") {
      return "171,230";
    } else if (numberOfFamily === "6") {
      return "152,410";
    } else if (numberOfFamily === "7") {
      return "133,590";
    } else if (numberOfFamily === "8") {
      return "114,780";
    } else if (numberOfFamily === "9") {
      return "95,960";
    } else if (numberOfFamily === "10") {
      return "80,750";
    } else if (numberOfFamily === "11") {
      return "67,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4800000 && parseFloat(salary) < 4820000) {
    if (numberOfFamily === "1") {
      return "304,400";
    } else if (numberOfFamily === "2") {
      return "275,810";
    } else if (numberOfFamily === "3") {
      return "210,850";
    } else if (numberOfFamily === "4") {
      return "191,960";
    } else if (numberOfFamily === "5") {
      return "173,090";
    } else if (numberOfFamily === "6") {
      return "154,260";
    } else if (numberOfFamily === "7") {
      return "135,440";
    } else if (numberOfFamily === "8") {
      return "116,600";
    } else if (numberOfFamily === "9") {
      return "97,780";
    } else if (numberOfFamily === "10") {
      return "82,220";
    } else if (numberOfFamily === "11") {
      return "68,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4820000 && parseFloat(salary) < 4840000) {
    if (numberOfFamily === "1") {
      return "305,690";
    } else if (numberOfFamily === "2") {
      return "277,100";
    } else if (numberOfFamily === "3") {
      return "212,830";
    } else if (numberOfFamily === "4") {
      return "193,870";
    } else if (numberOfFamily === "5") {
      return "174,950";
    } else if (numberOfFamily === "6") {
      return "156,110";
    } else if (numberOfFamily === "7") {
      return "137,290";
    } else if (numberOfFamily === "8") {
      return "118,420";
    } else if (numberOfFamily === "9") {
      return "99,600";
    } else if (numberOfFamily === "10") {
      return "83,690";
    } else if (numberOfFamily === "11") {
      return "70,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4840000 && parseFloat(salary) < 4860000) {
    if (numberOfFamily === "1") {
      return "306,980";
    } else if (numberOfFamily === "2") {
      return "278,390";
    } else if (numberOfFamily === "3") {
      return "214,810";
    } else if (numberOfFamily === "4") {
      return "195,780";
    } else if (numberOfFamily === "5") {
      return "176,810";
    } else if (numberOfFamily === "6") {
      return "157,960";
    } else if (numberOfFamily === "7") {
      return "139,140";
    } else if (numberOfFamily === "8") {
      return "120,240";
    } else if (numberOfFamily === "9") {
      return "101,420";
    } else if (numberOfFamily === "10") {
      return "85,160";
    } else if (numberOfFamily === "11") {
      return "71,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4860000 && parseFloat(salary) < 4880000) {
    if (numberOfFamily === "1") {
      return "308,270";
    } else if (numberOfFamily === "2") {
      return "279,680";
    } else if (numberOfFamily === "3") {
      return "216,790";
    } else if (numberOfFamily === "4") {
      return "197,690";
    } else if (numberOfFamily === "5") {
      return "178,670";
    } else if (numberOfFamily === "6") {
      return "159,810";
    } else if (numberOfFamily === "7") {
      return "141,000";
    } else if (numberOfFamily === "8") {
      return "122,060";
    } else if (numberOfFamily === "9") {
      return "103,240";
    } else if (numberOfFamily === "10") {
      return "86,620";
    } else if (numberOfFamily === "11") {
      return "73,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4880000 && parseFloat(salary) < 4900000) {
    if (numberOfFamily === "1") {
      return "309,560";
    } else if (numberOfFamily === "2") {
      return "280,970";
    } else if (numberOfFamily === "3") {
      return "218,770";
    } else if (numberOfFamily === "4") {
      return "199,600";
    } else if (numberOfFamily === "5") {
      return "180,530";
    } else if (numberOfFamily === "6") {
      return "161,660";
    } else if (numberOfFamily === "7") {
      return "142,860";
    } else if (numberOfFamily === "8") {
      return "123,880";
    } else if (numberOfFamily === "9") {
      return "105,060";
    } else if (numberOfFamily === "10") {
      return "88,090";
    } else if (numberOfFamily === "11") {
      return "74,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4900000 && parseFloat(salary) < 4920000) {
    if (numberOfFamily === "1") {
      return "310,850";
    } else if (numberOfFamily === "2") {
      return "282,260";
    } else if (numberOfFamily === "3") {
      return "220,750";
    } else if (numberOfFamily === "4") {
      return "201,510";
    } else if (numberOfFamily === "5") {
      return "182,390";
    } else if (numberOfFamily === "6") {
      return "163,510";
    } else if (numberOfFamily === "7") {
      return "144,710";
    } else if (numberOfFamily === "8") {
      return "125,700";
    } else if (numberOfFamily === "9") {
      return "106,880";
    } else if (numberOfFamily === "10") {
      return "89,550";
    } else if (numberOfFamily === "11") {
      return "75,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4920000 && parseFloat(salary) < 4940000) {
    if (numberOfFamily === "1") {
      return "312,140";
    } else if (numberOfFamily === "2") {
      return "283,550";
    } else if (numberOfFamily === "3") {
      return "222,730";
    } else if (numberOfFamily === "4") {
      return "203,420";
    } else if (numberOfFamily === "5") {
      return "184,250";
    } else if (numberOfFamily === "6") {
      return "165,360";
    } else if (numberOfFamily === "7") {
      return "146,560";
    } else if (numberOfFamily === "8") {
      return "127,520";
    } else if (numberOfFamily === "9") {
      return "108,700";
    } else if (numberOfFamily === "10") {
      return "91,010";
    } else if (numberOfFamily === "11") {
      return "77,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4940000 && parseFloat(salary) < 4960000) {
    if (numberOfFamily === "1") {
      return "313,430";
    } else if (numberOfFamily === "2") {
      return "284,840";
    } else if (numberOfFamily === "3") {
      return "224,710";
    } else if (numberOfFamily === "4") {
      return "205,330";
    } else if (numberOfFamily === "5") {
      return "186,110";
    } else if (numberOfFamily === "6") {
      return "167,210";
    } else if (numberOfFamily === "7") {
      return "148,410";
    } else if (numberOfFamily === "8") {
      return "129,340";
    } else if (numberOfFamily === "9") {
      return "110,520";
    } else if (numberOfFamily === "10") {
      return "92,470";
    } else if (numberOfFamily === "11") {
      return "78,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4960000 && parseFloat(salary) < 4980000) {
    if (numberOfFamily === "1") {
      return "314,720";
    } else if (numberOfFamily === "2") {
      return "286,130";
    } else if (numberOfFamily === "3") {
      return "226,690";
    } else if (numberOfFamily === "4") {
      return "207,240";
    } else if (numberOfFamily === "5") {
      return "187,970";
    } else if (numberOfFamily === "6") {
      return "169,060";
    } else if (numberOfFamily === "7") {
      return "150,260";
    } else if (numberOfFamily === "8") {
      return "131,160";
    } else if (numberOfFamily === "9") {
      return "112,340";
    } else if (numberOfFamily === "10") {
      return "93,930";
    } else if (numberOfFamily === "11") {
      return "80,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 4980000 && parseFloat(salary) < 5000000) {
    if (numberOfFamily === "1") {
      return "316,010";
    } else if (numberOfFamily === "2") {
      return "287,420";
    } else if (numberOfFamily === "3") {
      return "228,670";
    } else if (numberOfFamily === "4") {
      return "209,150";
    } else if (numberOfFamily === "5") {
      return "189,830";
    } else if (numberOfFamily === "6") {
      return "170,910";
    } else if (numberOfFamily === "7") {
      return "152,110";
    } else if (numberOfFamily === "8") {
      return "132,980";
    } else if (numberOfFamily === "9") {
      return "114,160";
    } else if (numberOfFamily === "10") {
      return "95,390";
    } else if (numberOfFamily === "11") {
      return "81,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5000000 && parseFloat(salary) < 5020000) {
    if (numberOfFamily === "1") {
      return "317,300";
    } else if (numberOfFamily === "2") {
      return "288,710";
    } else if (numberOfFamily === "3") {
      return "230,650";
    } else if (numberOfFamily === "4") {
      return "211,060";
    } else if (numberOfFamily === "5") {
      return "191,690";
    } else if (numberOfFamily === "6") {
      return "172,760";
    } else if (numberOfFamily === "7") {
      return "153,960";
    } else if (numberOfFamily === "8") {
      return "134,800";
    } else if (numberOfFamily === "9") {
      return "115,990";
    } else if (numberOfFamily === "10") {
      return "96,850";
    } else if (numberOfFamily === "11") {
      return "82,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5020000 && parseFloat(salary) < 5040000) {
    if (numberOfFamily === "1") {
      return "318,590";
    } else if (numberOfFamily === "2") {
      return "290,000";
    } else if (numberOfFamily === "3") {
      return "232,630";
    } else if (numberOfFamily === "4") {
      return "212,970";
    } else if (numberOfFamily === "5") {
      return "193,550";
    } else if (numberOfFamily === "6") {
      return "173,610";
    } else if (numberOfFamily === "7") {
      return "155,810";
    } else if (numberOfFamily === "8") {
      return "136,620";
    } else if (numberOfFamily === "9") {
      return "117,810";
    } else if (numberOfFamily === "10") {
      return "98,310";
    } else if (numberOfFamily === "11") {
      return "84,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5040000 && parseFloat(salary) < 5060000) {
    if (numberOfFamily === "1") {
      return "319,880";
    } else if (numberOfFamily === "2") {
      return "291,290";
    } else if (numberOfFamily === "3") {
      return "234,610";
    } else if (numberOfFamily === "4") {
      return "214,880";
    } else if (numberOfFamily === "5") {
      return "195,410";
    } else if (numberOfFamily === "6") {
      return "174,460";
    } else if (numberOfFamily === "7") {
      return "157,660";
    } else if (numberOfFamily === "8") {
      return "138,440";
    } else if (numberOfFamily === "9") {
      return "119,630";
    } else if (numberOfFamily === "10") {
      return "99,770";
    } else if (numberOfFamily === "11") {
      return "85,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5060000 && parseFloat(salary) < 5080000) {
    if (numberOfFamily === "1") {
      return "321,170";
    } else if (numberOfFamily === "2") {
      return "292,580";
    } else if (numberOfFamily === "3") {
      return "236,590";
    } else if (numberOfFamily === "4") {
      return "216,790";
    } else if (numberOfFamily === "5") {
      return "197,270";
    } else if (numberOfFamily === "6") {
      return "175,310";
    } else if (numberOfFamily === "7") {
      return "159,510";
    } else if (numberOfFamily === "8") {
      return "140,260";
    } else if (numberOfFamily === "9") {
      return "121,450";
    } else if (numberOfFamily === "10") {
      return "101,230";
    } else if (numberOfFamily === "11") {
      return "87,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5080000 && parseFloat(salary) < 5100000) {
    if (numberOfFamily === "1") {
      return "322,460";
    } else if (numberOfFamily === "2") {
      return "293,870";
    } else if (numberOfFamily === "3") {
      return "238,570";
    } else if (numberOfFamily === "4") {
      return "218,700";
    } else if (numberOfFamily === "5") {
      return "199,130";
    } else if (numberOfFamily === "6") {
      return "176,160";
    } else if (numberOfFamily === "7") {
      return "161,360";
    } else if (numberOfFamily === "8") {
      return "142,080";
    } else if (numberOfFamily === "9") {
      return "123,270";
    } else if (numberOfFamily === "10") {
      return "102,690";
    } else if (numberOfFamily === "11") {
      return "88,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5100000 && parseFloat(salary) < 5120000) {
    if (numberOfFamily === "1") {
      return "323,750";
    } else if (numberOfFamily === "2") {
      return "295,160";
    } else if (numberOfFamily === "3") {
      return "240,550";
    } else if (numberOfFamily === "4") {
      return "220,610";
    } else if (numberOfFamily === "5") {
      return "200,990";
    } else if (numberOfFamily === "6") {
      return "177,010";
    } else if (numberOfFamily === "7") {
      return "163,210";
    } else if (numberOfFamily === "8") {
      return "143,900";
    } else if (numberOfFamily === "9") {
      return "125,090";
    } else if (numberOfFamily === "10") {
      return "104,150";
    } else if (numberOfFamily === "11") {
      return "89,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5120000 && parseFloat(salary) < 5140000) {
    if (numberOfFamily === "1") {
      return "325,040";
    } else if (numberOfFamily === "2") {
      return "296,450";
    } else if (numberOfFamily === "3") {
      return "242,530";
    } else if (numberOfFamily === "4") {
      return "222,520";
    } else if (numberOfFamily === "5") {
      return "202,850";
    } else if (numberOfFamily === "6") {
      return "177,860";
    } else if (numberOfFamily === "7") {
      return "165,060";
    } else if (numberOfFamily === "8") {
      return "145,720";
    } else if (numberOfFamily === "9") {
      return "126,910";
    } else if (numberOfFamily === "10") {
      return "105,610";
    } else if (numberOfFamily === "11") {
      return "91,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5140000 && parseFloat(salary) < 5160000) {
    if (numberOfFamily === "1") {
      return "326,330";
    } else if (numberOfFamily === "2") {
      return "297,740";
    } else if (numberOfFamily === "3") {
      return "244,510";
    } else if (numberOfFamily === "4") {
      return "224,430";
    } else if (numberOfFamily === "5") {
      return "204,710";
    } else if (numberOfFamily === "6") {
      return "178,710";
    } else if (numberOfFamily === "7") {
      return "166,910";
    } else if (numberOfFamily === "8") {
      return "147,540";
    } else if (numberOfFamily === "9") {
      return "128,730";
    } else if (numberOfFamily === "10") {
      return "107,070";
    } else if (numberOfFamily === "11") {
      return "92,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5160000 && parseFloat(salary) < 5180000) {
    if (numberOfFamily === "1") {
      return "327,620";
    } else if (numberOfFamily === "2") {
      return "299,030";
    } else if (numberOfFamily === "3") {
      return "246,490";
    } else if (numberOfFamily === "4") {
      return "226,340";
    } else if (numberOfFamily === "5") {
      return "206,570";
    } else if (numberOfFamily === "6") {
      return "179,560";
    } else if (numberOfFamily === "7") {
      return "168,760";
    } else if (numberOfFamily === "8") {
      return "149,360";
    } else if (numberOfFamily === "9") {
      return "130,550";
    } else if (numberOfFamily === "10") {
      return "109,510";
    } else if (numberOfFamily === "11") {
      return "94,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5180000 && parseFloat(salary) < 5200000) {
    if (numberOfFamily === "1") {
      return "328,910";
    } else if (numberOfFamily === "2") {
      return "300,320";
    } else if (numberOfFamily === "3") {
      return "248,470";
    } else if (numberOfFamily === "4") {
      return "228,250";
    } else if (numberOfFamily === "5") {
      return "208,430";
    } else if (numberOfFamily === "6") {
      return "180,410";
    } else if (numberOfFamily === "7") {
      return "169,610";
    } else if (numberOfFamily === "8") {
      return "151,180";
    } else if (numberOfFamily === "9") {
      return "132,370";
    } else if (numberOfFamily === "10") {
      return "110,950";
    } else if (numberOfFamily === "11") {
      return "95,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5200000 && parseFloat(salary) < 5220000) {
    if (numberOfFamily === "1") {
      return "330,200";
    } else if (numberOfFamily === "2") {
      return "301,610";
    } else if (numberOfFamily === "3") {
      return "250,450";
    } else if (numberOfFamily === "4") {
      return "230,160";
    } else if (numberOfFamily === "5") {
      return "210,290";
    } else if (numberOfFamily === "6") {
      return "181,260";
    } else if (numberOfFamily === "7") {
      return "170,460";
    } else if (numberOfFamily === "8") {
      return "153,000";
    } else if (numberOfFamily === "9") {
      return "134,190";
    } else if (numberOfFamily === "10") {
      return "112,390";
    } else if (numberOfFamily === "11") {
      return "96,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5220000 && parseFloat(salary) < 5240000) {
    if (numberOfFamily === "1") {
      return "331,490";
    } else if (numberOfFamily === "2") {
      return "302,900";
    } else if (numberOfFamily === "3") {
      return "252,430";
    } else if (numberOfFamily === "4") {
      return "232,070";
    } else if (numberOfFamily === "5") {
      return "212,150";
    } else if (numberOfFamily === "6") {
      return "182,110";
    } else if (numberOfFamily === "7") {
      return "171,310";
    } else if (numberOfFamily === "8") {
      return "154,820";
    } else if (numberOfFamily === "9") {
      return "136,010";
    } else if (numberOfFamily === "10") {
      return "113,830";
    } else if (numberOfFamily === "11") {
      return "98,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5240000 && parseFloat(salary) < 5260000) {
    if (numberOfFamily === "1") {
      return "332,780";
    } else if (numberOfFamily === "2") {
      return "304,190";
    } else if (numberOfFamily === "3") {
      return "254,410";
    } else if (numberOfFamily === "4") {
      return "233,880";
    } else if (numberOfFamily === "5") {
      return "213,990";
    } else if (numberOfFamily === "6") {
      return "182,960";
    } else if (numberOfFamily === "7") {
      return "172,160";
    } else if (numberOfFamily === "8") {
      return "156,640";
    } else if (numberOfFamily === "9") {
      return "137,830";
    } else if (numberOfFamily === "10") {
      return "115,270";
    } else if (numberOfFamily === "11") {
      return "99,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5260000 && parseFloat(salary) < 5280000) {
    if (numberOfFamily === "1") {
      return "334,070";
    } else if (numberOfFamily === "2") {
      return "305,480";
    } else if (numberOfFamily === "3") {
      return "256,390";
    } else if (numberOfFamily === "4") {
      return "235,690";
    } else if (numberOfFamily === "5") {
      return "215,850";
    } else if (numberOfFamily === "6") {
      return "183,810";
    } else if (numberOfFamily === "7") {
      return "173,010";
    } else if (numberOfFamily === "8") {
      return "158,460";
    } else if (numberOfFamily === "9") {
      return "139,650";
    } else if (numberOfFamily === "10") {
      return "116,710";
    } else if (numberOfFamily === "11") {
      return "101,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5280000 && parseFloat(salary) < 5300000) {
    if (numberOfFamily === "1") {
      return "335,360";
    } else if (numberOfFamily === "2") {
      return "306,770";
    } else if (numberOfFamily === "3") {
      return "258,370";
    } else if (numberOfFamily === "4") {
      return "237,500";
    } else if (numberOfFamily === "5") {
      return "217,710";
    } else if (numberOfFamily === "6") {
      return "184,660";
    } else if (numberOfFamily === "7") {
      return "173,860";
    } else if (numberOfFamily === "8") {
      return "160,280";
    } else if (numberOfFamily === "9") {
      return "141,470";
    } else if (numberOfFamily === "10") {
      return "118,150";
    } else if (numberOfFamily === "11") {
      return "102,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5300000 && parseFloat(salary) < 5320000) {
    if (numberOfFamily === "1") {
      return "336,650";
    } else if (numberOfFamily === "2") {
      return "308,060";
    } else if (numberOfFamily === "3") {
      return "260,350";
    } else if (numberOfFamily === "4") {
      return "239,310";
    } else if (numberOfFamily === "5") {
      return "219,570";
    } else if (numberOfFamily === "6") {
      return "185,510";
    } else if (numberOfFamily === "7") {
      return "174,710";
    } else if (numberOfFamily === "8") {
      return "162,100";
    } else if (numberOfFamily === "9") {
      return "143,290";
    } else if (numberOfFamily === "10") {
      return "119,590";
    } else if (numberOfFamily === "11") {
      return "103,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5320000 && parseFloat(salary) < 5340000) {
    if (numberOfFamily === "1") {
      return "337,940";
    } else if (numberOfFamily === "2") {
      return "309,350";
    } else if (numberOfFamily === "3") {
      return "262,330";
    } else if (numberOfFamily === "4") {
      return "241,120";
    } else if (numberOfFamily === "5") {
      return "221,430";
    } else if (numberOfFamily === "6") {
      return "186,360";
    } else if (numberOfFamily === "7") {
      return "175,560";
    } else if (numberOfFamily === "8") {
      return "163,920";
    } else if (numberOfFamily === "9") {
      return "145,110";
    } else if (numberOfFamily === "10") {
      return "121,030";
    } else if (numberOfFamily === "11") {
      return "105,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5340000 && parseFloat(salary) < 5360000) {
    if (numberOfFamily === "1") {
      return "339,230";
    } else if (numberOfFamily === "2") {
      return "310,640";
    } else if (numberOfFamily === "3") {
      return "264,310";
    } else if (numberOfFamily === "4") {
      return "242,930";
    } else if (numberOfFamily === "5") {
      return "223,290";
    } else if (numberOfFamily === "6") {
      return "187,210";
    } else if (numberOfFamily === "7") {
      return "176,410";
    } else if (numberOfFamily === "8") {
      return "165,740";
    } else if (numberOfFamily === "9") {
      return "146,930";
    } else if (numberOfFamily === "10") {
      return "122,470";
    } else if (numberOfFamily === "11") {
      return "106,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5360000 && parseFloat(salary) < 5380000) {
    if (numberOfFamily === "1") {
      return "340,520";
    } else if (numberOfFamily === "2") {
      return "311,930";
    } else if (numberOfFamily === "3") {
      return "266,290";
    } else if (numberOfFamily === "4") {
      return "244,740";
    } else if (numberOfFamily === "5") {
      return "225,150";
    } else if (numberOfFamily === "6") {
      return "188,060";
    } else if (numberOfFamily === "7") {
      return "177,260";
    } else if (numberOfFamily === "8") {
      return "167,560";
    } else if (numberOfFamily === "9") {
      return "148,750";
    } else if (numberOfFamily === "10") {
      return "123,910";
    } else if (numberOfFamily === "11") {
      return "108,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5380000 && parseFloat(salary) < 5400000) {
    if (numberOfFamily === "1") {
      return "341,810";
    } else if (numberOfFamily === "2") {
      return "313,220";
    } else if (numberOfFamily === "3") {
      return "268,270";
    } else if (numberOfFamily === "4") {
      return "246,550";
    } else if (numberOfFamily === "5") {
      return "227,010";
    } else if (numberOfFamily === "6") {
      return "188,910";
    } else if (numberOfFamily === "7") {
      return "178,110";
    } else if (numberOfFamily === "8") {
      return "169,380";
    } else if (numberOfFamily === "9") {
      return "150,570";
    } else if (numberOfFamily === "10") {
      return "125,350";
    } else if (numberOfFamily === "11") {
      return "109,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5400000 && parseFloat(salary) < 5420000) {
    if (numberOfFamily === "1") {
      return "343,100";
    } else if (numberOfFamily === "2") {
      return "314,510";
    } else if (numberOfFamily === "3") {
      return "270,250";
    } else if (numberOfFamily === "4") {
      return "248,360";
    } else if (numberOfFamily === "5") {
      return "228,870";
    } else if (numberOfFamily === "6") {
      return "189,760";
    } else if (numberOfFamily === "7") {
      return "178,960";
    } else if (numberOfFamily === "8") {
      return "171,200";
    } else if (numberOfFamily === "9") {
      return "152,390";
    } else if (numberOfFamily === "10") {
      return "126,790";
    } else if (numberOfFamily === "11") {
      return "110,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5420000 && parseFloat(salary) < 5440000) {
    if (numberOfFamily === "1") {
      return "344,390";
    } else if (numberOfFamily === "2") {
      return "315,800";
    } else if (numberOfFamily === "3") {
      return "272,230";
    } else if (numberOfFamily === "4") {
      return "250,170";
    } else if (numberOfFamily === "5") {
      return "230,730";
    } else if (numberOfFamily === "6") {
      return "190,610";
    } else if (numberOfFamily === "7") {
      return "179,810";
    } else if (numberOfFamily === "8") {
      return "173,020";
    } else if (numberOfFamily === "9") {
      return "154,210";
    } else if (numberOfFamily === "10") {
      return "128,230";
    } else if (numberOfFamily === "11") {
      return "112,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5440000 && parseFloat(salary) < 5460000) {
    if (numberOfFamily === "1") {
      return "345,680";
    } else if (numberOfFamily === "2") {
      return "317,090";
    } else if (numberOfFamily === "3") {
      return "274,210";
    } else if (numberOfFamily === "4") {
      return "251,980";
    } else if (numberOfFamily === "5") {
      return "231,590";
    } else if (numberOfFamily === "6") {
      return "191,460";
    } else if (numberOfFamily === "7") {
      return "180,660";
    } else if (numberOfFamily === "8") {
      return "174,830";
    } else if (numberOfFamily === "9") {
      return "156,030";
    } else if (numberOfFamily === "10") {
      return "129,670";
    } else if (numberOfFamily === "11") {
      return "113,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5460000 && parseFloat(salary) < 5480000) {
    if (numberOfFamily === "1") {
      return "346,970";
    } else if (numberOfFamily === "2") {
      return "318,380";
    } else if (numberOfFamily === "3") {
      return "276,190";
    } else if (numberOfFamily === "4") {
      return "253,790";
    } else if (numberOfFamily === "5") {
      return "232,450";
    } else if (numberOfFamily === "6") {
      return "192,310";
    } else if (numberOfFamily === "7") {
      return "181,510";
    } else if (numberOfFamily === "8") {
      return "175,640";
    } else if (numberOfFamily === "9") {
      return "157,850";
    } else if (numberOfFamily === "10") {
      return "131,110";
    } else if (numberOfFamily === "11") {
      return "115,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5480000 && parseFloat(salary) < 5500000) {
    if (numberOfFamily === "1") {
      return "348,260";
    } else if (numberOfFamily === "2") {
      return "319,670";
    } else if (numberOfFamily === "3") {
      return "278,170";
    } else if (numberOfFamily === "4") {
      return "255,600";
    } else if (numberOfFamily === "5") {
      return "233,310";
    } else if (numberOfFamily === "6") {
      return "193,160";
    } else if (numberOfFamily === "7") {
      return "182,360";
    } else if (numberOfFamily === "8") {
      return "176,450";
    } else if (numberOfFamily === "9") {
      return "159,670";
    } else if (numberOfFamily === "10") {
      return "132,550";
    } else if (numberOfFamily === "11") {
      return "116,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5500000 && parseFloat(salary) < 5520000) {
    if (numberOfFamily === "1") {
      return "349,550";
    } else if (numberOfFamily === "2") {
      return "320,960";
    } else if (numberOfFamily === "3") {
      return "280,150";
    } else if (numberOfFamily === "4") {
      return "257,410";
    } else if (numberOfFamily === "5") {
      return "234,170";
    } else if (numberOfFamily === "6") {
      return "194,010";
    } else if (numberOfFamily === "7") {
      return "183,210";
    } else if (numberOfFamily === "8") {
      return "177,260";
    } else if (numberOfFamily === "9") {
      return "161,490";
    } else if (numberOfFamily === "10") {
      return "133,990";
    } else if (numberOfFamily === "11") {
      return "117,950";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5520000 && parseFloat(salary) < 5540000) {
    if (numberOfFamily === "1") {
      return "350,840";
    } else if (numberOfFamily === "2") {
      return "322,250";
    } else if (numberOfFamily === "3") {
      return "282,130";
    } else if (numberOfFamily === "4") {
      return "259,220";
    } else if (numberOfFamily === "5") {
      return "235,030";
    } else if (numberOfFamily === "6") {
      return "194,860";
    } else if (numberOfFamily === "7") {
      return "184,060";
    } else if (numberOfFamily === "8") {
      return "178,070";
    } else if (numberOfFamily === "9") {
      return "163,310";
    } else if (numberOfFamily === "10") {
      return "135,430";
    } else if (numberOfFamily === "11") {
      return "119,350";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5540000 && parseFloat(salary) < 5560000) {
    if (numberOfFamily === "1") {
      return "352,130";
    } else if (numberOfFamily === "2") {
      return "323,540";
    } else if (numberOfFamily === "3") {
      return "284,110";
    } else if (numberOfFamily === "4") {
      return "261,030";
    } else if (numberOfFamily === "5") {
      return "235,890";
    } else if (numberOfFamily === "6") {
      return "195,710";
    } else if (numberOfFamily === "7") {
      return "184,910";
    } else if (numberOfFamily === "8") {
      return "178,880";
    } else if (numberOfFamily === "9") {
      return "165,130";
    } else if (numberOfFamily === "10") {
      return "136,870";
    } else if (numberOfFamily === "11") {
      return "120,750";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5560000 && parseFloat(salary) < 5580000) {
    if (numberOfFamily === "1") {
      return "353,420";
    } else if (numberOfFamily === "2") {
      return "324,830";
    } else if (numberOfFamily === "3") {
      return "286,090";
    } else if (numberOfFamily === "4") {
      return "262,840";
    } else if (numberOfFamily === "5") {
      return "236,750";
    } else if (numberOfFamily === "6") {
      return "196,560";
    } else if (numberOfFamily === "7") {
      return "185,760";
    } else if (numberOfFamily === "8") {
      return "179,690";
    } else if (numberOfFamily === "9") {
      return "166,950";
    } else if (numberOfFamily === "10") {
      return "138,310";
    } else if (numberOfFamily === "11") {
      return "122,150";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5580000 && parseFloat(salary) < 5600000) {
    if (numberOfFamily === "1") {
      return "354,710";
    } else if (numberOfFamily === "2") {
      return "326,120";
    } else if (numberOfFamily === "3") {
      return "288,070";
    } else if (numberOfFamily === "4") {
      return "264,650";
    } else if (numberOfFamily === "5") {
      return "237,610";
    } else if (numberOfFamily === "6") {
      return "197,410";
    } else if (numberOfFamily === "7") {
      return "186,610";
    } else if (numberOfFamily === "8") {
      return "180,500";
    } else if (numberOfFamily === "9") {
      return "168,770";
    } else if (numberOfFamily === "10") {
      return "139,750";
    } else if (numberOfFamily === "11") {
      return "123,550";
    } else {
      return "0";
    }
  } else if (parseFloat(salary) >= 5600000 && parseFloat(salary) < 5620000) {
    if (numberOfFamily === "1") {
      return "356,000";
    } else if (numberOfFamily === "2") {
      return "327,410";
    } else if (numberOfFamily === "3") {
      return "290,050";
    } else if (numberOfFamily === "4") {
      return "266,460";
    } else if (numberOfFamily === "5") {
      return "238,470";
    } else if (numberOfFamily === "6") {
      return "198,260";
    } else if (numberOfFamily === "7") {
      return "187,460";
    } else if (numberOfFamily === "8") {
      return "181,310";
    } else if (numberOfFamily === "9") {
      return "170,590";
    } else if (numberOfFamily === "10") {
      return "141,190";
    } else if (numberOfFamily === "11") {
      return "124,950";
    } else {
      return "0";
    }
  }
  else {
    return "0";
  }
};

const Wage = (): JSX.Element => {
  return <></>;
};

export default Wage;
