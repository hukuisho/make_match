import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navigation from "./components/IndexNavigation";
import UserIndex from "./components/user/Index";
import CalendarIndex from "./components/calendar/Index";
import ChatIndex from "./components/chat/Index";
import PostIndex from "./components/post/Index";

const App = () => {
    const [isNavigationDisplayFlag, setNavigationDisplayFlag] = useState(false);
    const [calendarData, setCalendarData] = useState([]);

    useEffect(() => {
        axios
            .get("/calendar")
            .then((response) => setCalendarData(response.data))
            .catch((error) => {
                console.error("データを取得できませんでした:", error);
                setTimeout(() => (location.href = "/"), 1000);
            });
    }, []);

    const handleNavigationClick = () => {
        setTimeout(() => {
            setNavigationDisplayFlag(!isNavigationDisplayFlag);
        }, 150);
    };

    return (
        <div className="container">
            <BrowserRouter>
                <Header handleNavigationClick={handleNavigationClick} />
                <Routes>
                    <Route path="/" />
                    <Route path="/user" element={<UserIndex />} />
                    <Route
                        path="/calendar"
                        element={<CalendarIndex calendarData={calendarData} />}
                    />
                    <Route path="/chat" element={<ChatIndex />} />
                    <Route path="/post" element={<PostIndex />} />
                </Routes>
                {isNavigationDisplayFlag && <Navigation />}
            </BrowserRouter>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
