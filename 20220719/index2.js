// ==================================================
// npm install --save-dev prettier
// ==================================================
// --save-dev -> 개발환경

// package.json에 밑에줄 추가됨
// "devDependencies": {
//     "prettier": "^2.7.1"
//   }

// 노드 모듈 폴더는 git에 따로 올리지 않고
// package.json만 올리고
// npm i나 npm install로 설치후 작업한다.

// package-lock.json에 기록되어 잇는 내용은 실제로 설치된 패키지들이 어떤것인지 알려준다.
// 팀에서 이 프로젝트를 같이 작업을 한다 하면 lock.json도 같이 업로드 해주는 것이 좋다.
// package.json에는 패키지의 버전 앞에 prittier: "^2.7.1" // ^웃음 표시가 있는데
// 이 기호는 버전이 정확하지 않아도 설치되게 만들어 준다.

// 서로 팀원끼리 차이가 날 수 있다.
// 그래서 여려명과 같이 작업할때 lock.json파이릉ㄹ 서로 굥유해야하는 이유
// 버전이 맞지않는 문제를 해결할 수 있다.

// node_modules파일도 생겼는데 npm 설치를 하니까 이 폴더안에 설치되어 있는
// .bin폴더를 제외하고 다른 폴더들은 현재 프로젝트가 의존하고 있는 패키지들
// .bin폴더는 컴퓨터가 이해할 수 있는 텍스트 파일(바이너리 파일)들이다.
// 컴퓨터의 언어가 담긴 파일

// formatting을 해보자
// 설치한 prettier를 사용해서
// 프로젝트 단위로 설정을 해줄거다.
// 만들 파일 하나 .prettierrc

// .vscode폴더를 만들고 안엔 settings.json을 만들어 주자
// 이곳에 설정한 이유는 개인이 사용하는 vscode 설정 말고 프로젝트 단위로
// 설정을 적용 시킬 수 있다.
// 팀이나 회사에서 작업을 하면서 여려명이 작업할때 설정값을 미리 정하놓고
// 작업을 시작하면 충돌을 덜어준다. 사수한테 이쁨받음

// Linting을 해보자
// Linting에서 좋은거 EsLint 패키지이자 플러그인
// ESLint 설치 명령어
// --save-dev 개발환경이니까
// ==========================================================
// npm install --save-dev eslint
// ==========================================================

// package-lock.json에 무척 많이 생기는데 의존성들(서브 디펜던시)
// 의존성의 뜻은 코드에서 두모듈간의 연결이라고 보면 된다.
// 클래스가 두개 있다 치면 두 클래스의 관계성
// 그냥 쓸려고 패키지 다운받는다고 보면 된다.

// eslint도 설정파일이 필요한데
// 이 설정파일은 확장자가 필요하다. js
// 설정파일 이름은 .eslintrc.js 이렇게 작성
// rc뜻은 runtime configuration, run control, run commands, runcom, resource control

// mySQL 설치 https://velog.io/@kms9887/mysql-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-workbench