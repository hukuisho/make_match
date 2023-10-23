import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import UserIndex from "./components/user/Index";
import CalendarIndex from "./components/calendar/Index";

const App = () => {
    const links = [
        { to: "/user", text: "User" },
        { to: "/calendar", text: "Calendar" },
        // 追加のリンク情報をここに追加する
    ];

    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <nav>
                    <ul>
                        {links.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/user" element={<UserIndex />} />
                    <Route path="/calendar" element={<CalendarIndex />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
