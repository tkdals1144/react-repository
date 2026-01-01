## 2025-12-26
- react 프로젝트 구조 설계 및 초기 세팅
- features 기반 컴포넌트 아키텍처 세팅
- React Router를 이용한 URL 라우팅 구조 세팅
- Redux 사용을 위한 전역 상태관리 기반 세팅

-------------------------------------
## 2025-12-27
- Redux 공부를 위해 직접 구조 작성
- store.ts에 상태 저장소 하나 등록
- bannerSlice.ts에 scoreState를 inteface로 작성하고 그것을 다시 initialState로 저장
- createSlice를 사용하여 slice를 작성하고 로직을 작성
- 작성된 로직을 export하여 store.ts가 사용
- tsx 컴포넌트 조각에서는 useDispatch()를 이용해 features 내부의 slice에 접근하여 store.ts로 경유
- 실제 값은 useSelector를 이용하여 state : RootState로 타입을 정하고 실제 값인 state.score.score로 접근

-------------------------------------
## 2025-12-29
- useDispatch와 useAppDispatch의 차이 공부 (useDispatch -> 원본 Hook (타입 정보 없음 / 약함), useAppDispatch -> 우리가 만든 타입이 박힌 Hook)
- 단위 컴포넌트 내에서 라우터 없는 내부 뷰 전환 공부
- 내부 뷰 전환을 위한 state를 지역적으로 선언하고 union type으로 관리
- 내부 뷰 전환을 switch 방식으로 개선하여 가독성과 확장성 향상

-------------------------------------
## 2025-12-30
- table에 값을 추가하는 삭제하는 코드를 hook, utils 로 나누어 작성
- 컴포넌트에서 onChange를 통해 지역 state를 활성화
- 훅으로부터 받아온 생성함수를 button onClick 메소드로 지정
- 커스텀 훅은 설정만을 넘겨받고 인자는 받지 않음 (내부 로직에 인자를 설정)
- 로직은 hook 내의 setState 함수를 활용하여 연산을 진행
- JWT + Authorization Header 보안 관련 공부

-------------------------------------
## 2026-1-1
- redux에 더 익숙해지기 위해 header 컴포넌트에 slice를 추가하여 login, signup 모달창 구현 연습
- type.ts에 상태 구조를 정의하는 interface를 가장 먼저 설계
- headerSlice에서 const initialState를 type.ts의 interface 토대로 구현
- headerSlice를 store.ts에 등록하여 Header 컴포넌트에서 상태를 구독 가능하도록 설정
