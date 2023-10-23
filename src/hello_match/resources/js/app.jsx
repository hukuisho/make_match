import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import UserIndex from "./components/user/Index";
import CalendarIndex from "./components/calendar/Index";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                        <li>
                            <Link to="/calendar">Calendar</Link>
                        </li>
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
