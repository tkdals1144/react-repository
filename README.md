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
