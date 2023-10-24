import { Link } from "react-router-dom";
const navigation = () => {
    const links = [
        { to: "/user", text: "User" },
        { to: "/calendar", text: "Calendar" },
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

export default navigation;
