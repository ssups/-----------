// 비트코인 백서

// 비트코인은 p2p 전자화폐 시스템
// p2p는 개인과 개인이 직접 연결되어 파일을 공유하는것(중개자 x)

// 비트코인은 어떠한 중앙화된 기관을 거치지 않고 내가 가진 자산을 다른사람에게 전달할 수 있는 시스템을 구현한다.

// 거래내역을 해싱하고 타임 스템프를 찍은 해시기반 작업 증명들을 사슬형태(블록체인)로 연결하여,
// 해당 작업을 재 수행치 않으면 변경불가한 기록을 만들었다.
// 즉 탈중앙화된 알고리즘에 기반한 안전한 중개자를 만들어 내었다.

// 메인체인(최장체인, 가장 긴 사슬, 가장 긴 체인): 가장 긴 체인이 누적 난이도가 기장 높은(안전한) 체인으로 인식.
// 비트코인 네트워크는 가장 긴 체인을 참(true)로 인식한다.

// 사토시는 2008 금융위기를 보며 현재 우리가 신뢰하는 중앙기관에 대한 회의로 비트코인을 제안하게 되었다.

// 왜 비트코인을 처음 알아야 할까
// 비트코인이 블록체인에서 가지고 있어야할 철학적 경제적 기술적 특성을 모두 잘 포함하고 있기 때문이다.
// 블록체인에서 가장 중요한 철학은 탈중앙화 Decentralize
// 블록체인의 모든 기술 개발은 항상 중앙화된 기관을 탈중앙화 형태로 바꾸기위한 노력의 일환이다.
// 실제로 코어를 개발하고 운용하는 사람들은 중앙화된 거래소나 중앙화된 서비스들을
// 어떻게 하면 탈중앙화 할까 노력하고 기관들 없이 거래할 수 있는 방안들에 대한 개발을 진행하고 있다.

// 블록체인의 4대 기술 요소
// 1. 블록과 트랜잭션: 트랜잭션은 사용자의 거래내역이고 거래내역들을 하나의 블록에 포함시켜야만 안정성을 확보할 수 있다.
//                 해당 블록들이 해시 알고리즘과 POW를 통해서 연결되는 형태가 블록체인
// 2. 분산 네트워크: 사용자들이 언제든지 네트워크에 참여할수있고 나갈수도 있음.
// 3. 암호화: 본인 증명뿐 아니라 거래가 위변조 되지 않았다고 증명할수 있다.
// 4. 합의 알고리즘: 분산 네트워크에서 중앙화된 기관을 대신할 하나의 체인을 구성하는 것이 매우 중요하고
//               모든 사용자들이 납득할수 있는 하나의 거래내역이 필요한데,
//               이 역할을 하는 것이 합의 알고리즘이다.
//               합의 알고리즘은 일반적으로 POW만을 일컷는 경우가 많은데
//               POW와 롱기스트 체인 룰을 포함해야 실제로 네트워크 기준으로 하나의 체인을 유지할 수 있다.

// POW (Proof Of Work): 작업증명 알고리즘.

// 블록의 구성
// 블록은 특정 정보들을 담아놓은 객체이다.
// 블록은 Header, Body 영역으로 나눠져 있음.

// Header
// 1. 버전 정보
// 2. 이전 블록의 해시
// 3. 몇번째 블록인지의 정보(블록의 높이)
// 4. 블록의 생성시간(타임 스탬프)
// 5. 블록의 해시
// 6. Body의 내용을 해싱한 값(머클 루트)
// 7. 채굴의 난이도
// 8. 논스

// Body
// 1. 블록에 저장할 데이터

// 블록에 대한 이해를 좀 쉽게하기 위해서 Header, Body라고 구분했을뿐이다.
// 실제로 헤더영역과 바디영역을 구분지어 블록생성을 하진 않는다.

// 자바 스크립트로 블록 객체를 만들어 보자
const Block = {
  version: "1.0.0", // 블록의 버전, 소프트웨어/프로토 버전

  previousHash: "", // 이전 블록의 해시

  height: 0, // 체인에 연결된 블록의 수(블록이 생성된 순서는 높이로 표현)

  timestamp: 12343245, // 블록 생성 시간

  hash: "", // 특정 블록을 식별할때 고유 식별자로 해시값을 사용한다.
  // 해시값은 블록의 생성일, 버전, 비츠, 머클루트, 이전 블록의 해시, 논스라 불리는
  // 임시값 등등을 조합해서 해시로 변환, 생성한다.

  merkleRoot: "", // 블록 body의 내용을 해싱한 값, 2진 트리 형태
  // 머클루트에는 블록의 트랜젝션에 대한 내용이 저장되어있고,
  // 트렌잭션의 내용들을 해싱한 해시값의 트리구조를 머클트리라고 한다.
  // 이 머클트리의 루트에 대한 해시값이 머클루트이다.

  bit: "", // 난이도 조절용 수치

  difficulty: "", // 채굴의 난이도

  nonce: "", // 논스는 최초에 0에서부터 시작해서 조건이 만족하는 해시값을 찾을때까지 1씩 증가하는 계산횟수

  data: ["fafsdfe"], // 블록 body 내용이다. 트랜젝션 내용이 블록안에 데이터로 저장된다.
};

// 블록체인의 거래정보 변경이 불가능한 이유
// 거래 정보의 해시값은 거래가 포함된 블록의 머클루트 계산에만 입력값으로 사용되고
// 머클루트는 블록 해시의 계산 입력값으로 사용된다.
// A블록이랑 B블록이 있다하고,
// A블록의 해시는 다음 B블록의 이전해시(previousHash) 값에 저장되고
// B블록의 이전해시에는 A블록의 헤더정보가 담겨져 있으며 블록해시를 계산하기위한 값으로 사용된다.
// 그렇기 때문에 거래정보가 변경되면 머클루트가 변경되고 머클루트가 변경되면
// 블록해시가 변경되어 블록 해시의 변경은 다음 블록 해시 변경으로 연쇄적으로 이어지게 된다.

// 거래 정보 변경 -> 머클루트 변경 -> 머클루트 변경으로 블록해시 변경 -> 블록해시는 논스값을 찾아
// 작업증명이 되야 구할수 있기 때문에 거래정보를 변경한 블록부터 그 이후의 모든 블록을 순서대로 다시 채굴해야한다.

// 완료된 거래정보를 변경하려면
// 해당 블록부터 그 이후의 모든 블록을 순서대로 다시 채굴해야 하기 때문에 시간이 무척 많이 걸리고
// 그동안 다른 노드들에 의해서 블록이 계속 추가되어 완료된 거래 정보의 변경은 현실적으로 불가능 하다.

// 작업 증명 POW(proof of work)
// 새로운 블록을 블록체인에 추가하는 작업이 완료된 것을 증명하는것
// 새 블록을 블록체인에 추가하려면 블록의 블록 해시를 계산해야 하고
// 블록 해시의 계산은 블록 해더 정보의 논스값을 계산해서 구한다.
// 이때 논스값을 구하는게 작업증명이다.

// 자바스크립트로 만들자
// 블록의 해시값과 머클루트값을 Crypto-js 와 merkle 라이브러리를 사용해서 만들거임
// 블록의 해시값과 머클루트 값이 어떻게 생성되는지 한번 구조를 보자.
// ====================================================
// npm i crypto-js merkle
// ====================================================
