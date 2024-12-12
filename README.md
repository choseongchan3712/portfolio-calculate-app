# 설치항목
- [x] npm i react-router-dom
- [] npm install node-fetch@2
- [x] npm i styled-components
- [x] npm i styled-reset
- [] font-awesome
- [] npm i react-hook-form
- [] helmet-async
- [x] npm install mathjs
- [x] npm install react-bootstrap bootstrap
- [x] npm i axios
- [x] npm install moment --save

# 학습내용
1. useContext 사용법:
- 개요: useContext는 useState와 유사하나, useState처럼 만들어진 값이 만들어지 코포넌츠 파일 밖으로 나갈려면 프롭스를 만들어야 한다는 제한이 없다는 장점이 있다. 만약 여러 계층을 이동해야 한다면 useState는 여러번의 프롭스로 그 값을 이동시켜야 하지만, useContext를 사용하면 전역으로 값을 공유 할 수 있다.<br />
- 작성파일: 본 포트폴리오의 한 예시를 들면, 시간의 값 date를 여러 콤포넌츠 파일에 공유를 하고 싶다면, 먼저 두가지 파일을 만들어야 한다. 하나는 (1)DateContext파일과, (2)DateProvider파일을 만들어야 한다.<br />
- 사용방법: 우선 DateContext파일은 개인적으로 느꼈을때는 "나 useContext쓴다" 라고 선언적 느낌(?) 인거 같다. 안에 내용은:<br />
 "export const DateContext = createContext<DateContextType | null> (null);" <br />
 이런 식으로 DateContext에 createContext(context를 만들어서)넣어주고 export만 하는듯 하다. 그래도 타입스크립트 버전에서는 context의 타입까지 지정해 줄 수 있다. 여기서 export를 한 이유는 DateProvider파일에서 사용해야하기 때문이다. DateProvider파일은:<br />
"const DateProvider = ({ children }: ChildrenType) => {
  const [date, setDate] = useState<string>(`${nowDate}`);
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};
export default DateProvider;"<br />
이런식으로 내가 공유를 원하는 date값과 상태를 관리하는 setDate값을 useState로 정의하고, 이것을 export해두었던 DateContext에 Provider형식으로 콤포넌츠로 만든다(DateContext.Provider 이런식으로). 콤포넌츠에는 value 값으로 설정해 두었던 date와 setDate를 넣어 줘야한다. 이렇게 하고 마지막으로 export를 해주고 Provider콤포넌츠를 제일 상위 부모 밖으로 감싸주면 안에 포함 되어있는 모든 코포넌츠에서 설정한 date와 setDate의 값이 전역으로 공유된다.<br />
2. 프롭스 children의 타입:
- "<Components>{children}</Components>"<br />
이런 상황일때 children 의 타입은 React.ReactNode으로 설정해야 한다.
3. createContext 의 타입:
- 위의 date값을 예시로 들면 createContext안에는 date값과 setDate 두 값이 포함되어있다. 그래서 interface로 파입을 정의 할때 두 값의 타입을 정해 줘야 하는데, date의 값은 어렵지 않게 "string"이나 "number"이런식의 타입이나, setDate의 타입은:<br / >
" setDate: (value: string) => void;"<br />
이런식으로 정의를 해줘야 한다.