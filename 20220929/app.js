// 오늘은 리덕스란?

// 리액트에서 사용할수 있는 하나의 라이브러리
// 라이브러리라는건 없어도 리액트로 작업물을 만들수는 있지만 편하게 작업하려고 쓰는것

// 실무에서 리덕스를 안쓰면 매우 불편하기 때문에 필수로 사용한다.

// 리액트는 자식 컴포넌트에 props로 전달은 가능한데
// 다른 컴포넌트에서 직접 데이터 공유가 불가능한다.
// 그래서 공유해야할 데이터를 공유받는 자식 컴포넌트들의 공통부모에서 State를 만들어서
// 자식 컴포넌트에게 전달해주는데 리액트는 데이터의 흐름이 단방향이기 때문에
// 작업을 하다보면 부모컴포넌트에서 너무 많은 props와 state 값이 생긴다.
// 이런한 단점을 보완하기 위해서 리덕스를 사용한다.
// 리덕스는 state들을 저장해주는 store(저장소) 이다.
// 이 저장소의 값들은 각각의 컴포넌트가 어느 컴포넌트던(자식이던 부모던) 공통적으로 모두 사용할 수 있다.

// 근데 초반에 리덕스를 처음보는 사람들이 많이 개념을 어려워한다.
// 쉽게 생각해서 컴포넌트에서 값을 요청하고 전달받는걸 직접 할수있다.
// 근데 컴포넌트에서 저장소의 값을 직접적으로 바로 수정하는 것은 불가능하다.
// 함수를 통해서 동작하는 방식으로 수정과 요청 가능

// 값을 저장하는 구조는
// useDispatch(hook)
// 컴포넌트 -> dispatch -> Action -> Reducer -> store
// 컴포넌트가 Action을 보내고 Reducer로 전달받은 다음에 store의 값을 최신화 해준다.
// Action은 동작할 기능의 이름
// Reducer는 함수인데 내가 사용할 동작들을 조건문으로 모아둔곳
// 컴포넌트가 무엇을 동작할지 Action 을 Reducer로 보내고 store의 값을 바꿔준다.
// store(저장소)객체라고 생각하면 된다.(state 값을 저장해둘 객체)
// state의 값이 바뀌면 컴포넌트가 리렌더링 된다.

// 값을 가져오는 구조는
// useSelector 리액트 훅 함수
// store --> useSelector -> 컴포넌트
// useSelector는 store에 있는 값을 가져올때 사용하는 함수

// 리덕스를 사용해 보자
// ============리덕스 코어 설치 명령어============
// npm i redux
// ==========================================

// redux는 꼭 리액트에서만 쓸수있는게 아니다.

// 리액트에서 react-redux 라이브러리로 편하게 사용할수있다.
// ============설치 명령어============
// npm i react-redux
// ==========================================

// Provider
// Provider는 컴포넌트이고
// 이 Provider 컴포넌트로 감싸준 컴포넌트를 Redux 저장소 사용이 가능하게 해준다.
// 이 컴포넌트는 props로 store 값을 받는다.