const Header = ({ handleHeaderClick }) => {
    return (
        <div className="header" onClick={handleHeaderClick}>
            <p className="header__title__text">HelloMatch</p>
        </div>
    );
};

export default Header;
