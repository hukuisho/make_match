const Header = ({ handleNavigationClick }) => {
    return (
        <div className="header">
            <a href="/" className="header__title">
                <b className="header__title__text">HelloMatch</b>
            </a>
            <div className="header__navi" onClick={handleNavigationClick}>
                <b>Navi</b>
            </div>
        </div>
    );
};

export default Header;
