const Header = ({ onClickHeader }) => {
    return (
        <div className="header" onClick={onClickHeader}>
            <p className="header__title__text">HelloMatch</p>
        </div>
    );
};

export default Header;
