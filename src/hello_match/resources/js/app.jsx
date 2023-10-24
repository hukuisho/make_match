import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Navigation from "./components/navigation";
import UserIndex from "./components/user/Index";
import CalendarIndex from "./components/calendar/Index";

const App = () => {
    const links = [
        { to: "/user", text: "User" },
        { to: "/calendar", text: "Calendar" },
        // 追加のリンク情報をここに追加する
    ];

    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/user" element={<UserIndex />} />
                    <Route path="/calendar" element={<CalendarIndex />} />
                    {/* 追加のルート情報をここに追加する */}
                </Routes>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <Navigation />
            </BrowserRouter>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
