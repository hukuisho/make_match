const Header = ({ onClick }) => {
    return (
        <div className="header" onClick={onClick}>
            <p className="header__title__text">HelloMatch</p>
        </div>
    );
};

export default Header;
