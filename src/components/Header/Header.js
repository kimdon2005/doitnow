import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ title, isLoggedIn }) => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" className="logo"></Link>
        <div className="title">{title}</div>
      </div>

      <div className="header-right">
        {isLoggedIn ? (
          <button className="login-btn">프로필</button>
        ) : (
          <>
            <button className="login-btn">시작하기</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
