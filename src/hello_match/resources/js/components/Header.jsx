import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__title">
                <p className="header__title__text">HelloMatch</p>
            </Link>
        </div>
    );
};

export default Header;
