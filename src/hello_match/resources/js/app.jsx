import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navigation from "./components/IndexNavigation";
import UserIndex from "./components/user/Index";
import CalendarIndex from "./components/calendar/index";
import ChatIndex from "./components/chat/Index";
import PostIndex from "./components/post/Index";
import Login from "./components/certification/login";
import SignUp from "./components/certification/sign_up";

const App = () => {
    const [isLoggedFlag, setIsLoggedFlag] = useState(false);
    const [isNavigationDisplayFlag, setNavigationDisplayFlag] = useState(false);
    const [userCarendarData, setuserCarendarData] = useState([]);

    useEffect(() => {
        const checkLoginStatus = () => {
            const cookies = document.cookie.split(";");
            const isLoggedFlagCookie = cookies.find((cookie) =>
                cookie.trim().startsWith("isLoggedFlag=")
            );

            if (isLoggedFlagCookie) {
                setIsLoggedFlag(true);
            } else {
                setIsLoggedFlag(false);
            }
        };
        checkLoginStatus();
        if (isLoggedFlag === true) {
            axios
                .get("/user")
                .then((response) => console.log(response.data))
                .catch((error) => {
                    console.error("データを取得できませんでした:", error);
                    // setTimeout(() => (location.href = "/"), 1000);
                });
        } else {
            // setTimeout(() => (location.href = "/"), 1000);
            console.log("ログインしていません");
        }
        axios
            .get("/calendar")
            .then((response) => setuserCarendarData(response.data))
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
    if (isLoggedFlag) {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header handleNavigationClick={handleNavigationClick} />
                    <Routes>
                        <Route path="/" />
                        <Route path="/user" element={<UserIndex />} />
                        <Route
                            path="/calendar"
                            element={
                                <CalendarIndex userCarendarData={userCarendarData} />
                            }
                        />
                        <Route path="/chat" element={<ChatIndex />} />
                        <Route path="/post" element={<PostIndex />} />
                    </Routes>
                    {isNavigationDisplayFlag && <Navigation />}
                </BrowserRouter>
            </div>
        );
    } else {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header handleNavigationClick={handleNavigationClick} />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/sign_up" element={<SignUp />} />
                        {/* ↓ログイン機能ができたら削除　*/}
                        <Route
                            path="/calendar"
                            element={
                                <CalendarIndex userCarendarData={userCarendarData} />
                            }
                        />
                    </Routes>

                    {isNavigationDisplayFlag && (
                        <Navigation isLoggedFlag={isLoggedFlag} />
                    )}
                </BrowserRouter>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("app"));
