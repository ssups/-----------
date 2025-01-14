import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Join, Login, Board, Posting, PostModify, MyPage } from "./pages";
import { Header, Footer } from "./components";
import { useState } from "react";

function App() {
    const defaultPostData = [
        {
            post_id: 1,
            nick_name: "어드민",
            title: "게시판에 오신걸 환영~",
            img: "https://w.namu.la/s/6f490388edd0eb0595b633808b7f9d4a4251ef5f33052b34a8f104a7b872676191869533df4148d6b540c5191c3651c6e492c4cb1502b8f1a62ba16a194f75b830f2e42d3496fe77d8c553746be4b71e71e75fef709cd4e150d92d22dd1083620ad619bfea1bf4cc287c80edac3d66ef",
            text: "게시판 첫글~",
        },
    ];
    const [postData, setPostData] = useState(defaultPostData);
    return (
        <div className="App">
            <Header />
            <div className="Body">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/mypage"
                        element={<MyPage setPostData={setPostData} />}
                    />
                    <Route
                        path="/board"
                        element={
                            <Board
                                postData={postData}
                                setPostData={setPostData}
                            />
                        }
                    />
                    <Route
                        path="/posting"
                        element={
                            <Posting
                                postData={postData}
                                setPostData={setPostData}
                            />
                        }
                    />
                    <Route
                        path="/posting/modify/:post_id"
                        element={
                            <PostModify
                                postData={postData}
                                setPostData={setPostData}
                            />
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
