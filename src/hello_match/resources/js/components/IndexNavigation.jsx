import { Link } from "react-router-dom";
import { Routes } from "../Routes";
const Navigation = () => {
    const links = [
        { to: "/", text: "App" },
        { to: "/user", text: "User" },
        { to: "/calendar", text: "Calendar" },
        { to: "/chat", text: "Chat" },
        { to: "/post", text: "Post" },
        // 追加のリンク情報をここに追加する
    ];
    return (
        <nav className="navigation">
            <ul className="navigation__links">
                {links.map((link) => (
                    <li key={link.to}>
                        <Link to={link.to}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
