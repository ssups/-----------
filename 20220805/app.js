// 오늘 수업 만들거
// 경매소 만들기 이거 응용해서
// 이후에 로그인 회원가입 붙여서 구현해볼것.
// 월요일에 쿠키 세션 JWT

// 사용할 모듈
// express, ejs, socketio, fs, nodemon

// 1. packjson 설치하고
// 2. express 서버 세팅
// 3. 페이지 라우터 분리해서 보여주기
// 4. nodemon 개발 버전으로 설치

// /루트경로 페이지 하나
// /shop 페이지 하나

const express = require("express");
const ejs = require("ejs");
const socketio = require("socket.io");
const fs = require("fs");

const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(PORT, " 번 포트 실행");
});
const io = socketio(server);

app.get("/", (req, res) => {
    fs.readFile("page.html", "utf-8", (err, data) => {
        res.send(data.toString());
    });
    // res.end("hi");
});

app.get("/shop", (req, res) => {
    // fs.readFile("shop.html", "utf-8") 이렇게 쓰고 반환값을 받으면
    // html 파일을 읽어서 utf-8 인코딩하고 반환해준다.
    const page = fs.readFileSync("shop.html", "utf-8");
    res.send(
        ejs.render(page, {
            products: products,
        })
    );
});

// use 함수 사용해서 설정 추가
// 이름도 사용하겠다는 뜻
// express static 함수 사용
// __dirname는 현재 app.js 파일이 속해있는 폴더의 경로를 가져옴
// express.static()함수를 통해서 server의 설정에 사용할 폴더의 경로를 설정해줌
app.use(express.static(__dirname + "/images"));

// "/src" 이부분은 자신이 설정한 경로의 이름을 정의해줄수 있다.
// __dirname + "/images2"까지의 경로가 "/src2"이 이름으로 설정된 것
app.use("/src", express.static(__dirname + "/images"));
app.use("/src2", express.static(__dirname + "/images2"));

// 상품의 번호를 정해줄 변수
let counter = 0;

// 생성자 함수 (객체를 만들기 위한 함수)
function Product(name, image, price, count) {
    // 번호가 증가할 수 있도록 증감 연사자 사용
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

// 상품을 가지고 있을 박스
// 상품을 전부 가지고 있다.
const products = [
    // 동적 할당으로 new를 붙여서 생성자 함수 사용
    new Product("사과", "/", 2000, 20),
    new Product("수박", "/", 2000, 20),
    new Product("초코바", "/", 2000, 20),
    new Product("비타민", "/", 2000, 20),
    new Product("커피", "/", 2000, 20),
];

let cart = [];
// 소켓 이벤트 연결
// connection 클라이언트가 접속했을때
io.on("connection", socket => {
    // 상품 구매 취소했을때 돌리는 함수
    function onReturn(index) {
        // 물건의 갯수를 다시 돌린다. 더해준다.
        products[index].count++;
        // 물건을 제거
        // 배열 안의 값 제거 delete 배열[인덱스]
        delete cart[index];
        let count = products[index].count;
        io.emit("count", {
            index,
            count,
        });
    }

    // 이벤트 연결 웹소켓이 가지고 있는 이벤트
    socket.on("cart", index => {
        // 물건의 갯수를 감소
        products[index].count--;
        // 빈 객체를 하나 만들어서 해당 배열의 인덱스 자리에 넣고
        cart[index] = {};
        // 해당 배열의 인덱스 자리에 있는 객체에 index 키를 추가하고 벨류를 넣어준다.
        cart[index].index = index;
        let count = products[index].count;
        io.emit("count", {
            index,
            count,
        });
    });

    // 구매 했을때 이벤트 연결
    socket.on("buy", index => {
        // 카트의 해당 상품 인덱스 제거
        delete cart[index];

        let count = products[index].count;
        io.emit("count", {
            index,
            count,
        });
    });

    // 상품 구매를 취소했을때
    socket.on("return", index => {
        onReturn(index);
    });
});
