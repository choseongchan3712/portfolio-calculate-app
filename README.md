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

<h2>1. useContext 사용법:</h2>

- 개요: useContext는 useState와 유사하나, useState처럼 만들어진 값이 만들어지 코포넌츠 파일 밖으로 나갈려면 프롭스를 만들어야 한다는 제한이 없다는 장점이 있다. 만약 여러 계층을 이동해야 한다면 useState는 여러번의 프롭스로 그 값을 이동시켜야 하지만, useContext를 사용하면 전역으로 값을 공유 할 수 있다.<br /><br />
- 작성파일: 본 포트폴리오의 한 예시를 들면, 시간의 값 date를 여러 콤포넌츠 파일에 공유를 하고 싶다면, 먼저 두가지 파일을 만들어야 한다. 하나는 (1)DateContext파일과, (2)DateProvider파일을 만들어야 한다.<br /><br />
- 사용방법: 우선 DateContext파일은 개인적으로 느꼈을때는 "나 useContext쓴다" 라고 선언적 느낌(?) 인거 같다. 안에 내용은:<br /><br />
  "export const DateContext = createContext<DateContextType | null> (null);" <br /><br />
  이런 식으로 DateContext에 createContext(context를 만들어서)넣어주고 export만 하는듯 하다. 그래도 타입스크립트 버전에서는 context의 타입까지 지정해 줄 수 있다. 여기서 export를 한 이유는 DateProvider파일에서 사용해야하기 때문이다. DateProvider파일은:<br /><br />
  "const DateProvider = ({ children }: ChildrenType) => {
  const [date, setDate] = useState<string>(`${nowDate}`);
  return (
  <DateContext.Provider value={{ date, setDate }}>
  {children}
  </DateContext.Provider>
  );
  };
  export default DateProvider;"<br /><br />
  이런식으로 내가 공유를 원하는 date값과 상태를 관리하는 setDate값을 useState로 정의하고, 이것을 export해두었던 DateContext에 Provider형식으로 콤포넌츠로 만든다(DateContext.Provider 이런식으로). 콤포넌츠에는 value 값으로 설정해 두었던 date와 setDate를 넣어 줘야한다. 이렇게 하고 마지막으로 export를 해주고 Provider콤포넌츠를 제일 상위 부모 밖으로 감싸주면 안에 포함 되어있는 모든 코포넌츠에서 설정한 date와 setDate의 값이 전역으로 공유된다.<br />

<h2>2. 프롭스 children의 타입:</h2>

- "<Components>{children}</Components>"<br />
  이런 상황일때 children 의 타입은 React.ReactNode으로 설정해야 한다.

<h2>3. createContext 의 타입:</h2>

- 위의 date값을 예시로 들면 createContext안에는 date값과 setDate 두 값이 포함되어있다. 그래서 interface로 파입을 정의 할때 두 값의 타입을 정해 줘야 하는데, date의 값은 어렵지 않게 "string"이나 "number"이런식의 타입이나, setDate의 타입은:<br />
  " setDate: (value: string) => void;"<br />
  이런식으로 정의를 해줘야 한다.

<h2>4. eventHandler 매개변수의 타입:</h2>

- 예를 들어:<br />
  "const countHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCount(e.target.value);
  };"
  <br />
  이런 상환에서 e(event: 매개변수)의 타입은 "React.이벤트종류<element종류>"이렇게 정의 하면 된다. 아래에 이벤트의 모든 종류를 정리해 본다:<br /><br />
  (1) 폼 이벤트:<br />
  (ㄱ) onSubmit, onReset => FormEvent <br />
  (ㄴ) onChange => ChangeEvent <br />
  (ㄷ) onFocus, onBlur => FocusEvent <br />
  (2) 마우스 이벤트 <br />
  onClick, onDoubleClick, onMouseMove, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp => MouseEvent <br />
  (2) 키보드 이벤트 <br />
  onKeyDown, onKeyPress, onKeyUp => KeyboardEvent <br />
  (3) UI 이벤트 <br />
  onScroll => UIEvent <br />
  (4) Wheel 이벤트 <br />
  onWheel => WheelEvent <br />
  (5) 컴포지션 이벤트 <br />
  onCompositionStart, onCompositionUpdate, onCompositionEnd(입력기를 통해 스트가 조합될 때 발생하는 이벤트) => CompositionEvent <br />
  (6) 드래그 이벤트 <br />
  onDrag, onDragStart, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDrop => DragEvent <br />
  (7) 폼 관련 추가 이벤트 <br />
  onInvalid(폼이 유효하지 않을 때 발생하는 이벤트) => InvalidEvent <br />
  (8) 미디어 이벤트 <br />
  onPlay, onPause, onVolumeChange, onTimeUpdate, onEnded, onLoadedData, onLoadedMetadata, onLoadStart, onSeeking, onSeeked, onWaiting, onStalled, onSuspend => MediaEvent <br />
  (9) 이미지 이벤트 <br />
  onLoad, onError => SyntheticEvent <br />
  (10) 터치 이벤트 <br />
  onTouchStart, onTouchMove, onTouchEnd, onTouchCancel => TouchEvent <br />
  (11) 애니메이션 이벤트 <br />
  onAnimationStart, onAnimationEnd, onAnimationIteration => AnimationEvent<br />
  (12) 트랜지션 이벤트 <br />
  onTransitionEnd => TransitionEvent <br />
  (13) 포인터 이벤트 <br />
  onPointerDown, onPointerUp, onPointerMove, onPointerEnter, onPointerLeave, onPointerOver, onPointerOut, onPointerCancel => PointerEvent <br />
