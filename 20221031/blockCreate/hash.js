const SHA256 = require("crypto-js/sha256");
// SHA256은 현재 블록체인에서 가장 많이 채택해서 사용하고 있는 암호 방식
// 출력속도가 빠르다는 장접을 가지고 있고 단방향성 암호화 방법을 사용한다. 따라서 복호화가 불가능
// 아직까지는 안정성에 있어서도 큰 문제점이 발견되지 않았고, 속도가 빨라서 인증서나 블록체인등에 많이 사용중이다.
// SHA256 알고리즘을 통해 256비트로 구성된 64자리 문자열로 암호화 해준다.
const str = "안녕하세요";
console.log("해시결과 : ", SHA256(str).toString());
console.log("결과의 길이는 : ", SHA256(str).toString().length);
