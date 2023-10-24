import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/navigation";
import UserIndex from "./components/user/Index";
import CalendarIndex from "./components/calendar/Index";

const App = () => {
    const [isNavigationDisplayFlag, setNavigationDisplayFlag] = useState(false);

    const handleHeaderClick = () => {
        setNavigationDisplayFlag(!isNavigationDisplayFlag);
    };

    return (
        <div className="container">
            <BrowserRouter>
                <Header handleHeaderClick={handleHeaderClick} />
                <Routes>
                    <Route path="/" />
                    <Route path="/user" element={<UserIndex />} />
                    <Route path="/calendar" element={<CalendarIndex />} />
                    {/* 追加のルート情報をここに追加する */}
                </Routes>
                {isNavigationDisplayFlag && <Navigation />}
            </BrowserRouter>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
