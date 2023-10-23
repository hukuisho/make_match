import "./bootstrap";
// import "./components/Route.jsx";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import User from "./components/User/index";
import CalendarIndex from "./components/calendar/index";

// import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <div className="container">
                <Header />
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
