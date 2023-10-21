import "./bootstrap";
// import "./components/Route.jsx";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <div className="container">
                <Header />
                <p>aa</p>
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
