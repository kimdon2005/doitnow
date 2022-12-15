import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "./Index.css";
import Logo from "./unnamed.png";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChange = (e) => {
    const {
      target: { name, value }
    } = e;

    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const StyledLink = styled(Link)`
    color: #2c7ee8;
    text-decoration: none;
  `;

  return (
    <div>
      <div className="header-ahffk">
        <div className="back-icon">
          <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/arrow_back_ios_new/default/48px.svg" />
        </div>
      </div>

      <div className="login">
        <img src={Logo} className="doitnow" />
        <form>
          <p className="email_p">이메일</p>
          <input
            type="text"
            id="loginid"
            className="login_input"
            value={email}
            onChange={onChange}
            placeholder="이메일"
          />

          <p className="pw_p">비밀번호</p>
          <input
            type="password"
            id="loginpw"
            className="login_input"
            value={password}
            onChange={onChange}
            placeholder="숫자, 영문, 특수문자 조합 최소 8자~20자"
          />

          <button className="Login_button">로그인</button>
          <Link to="/signup">
            <div className="signin">회원가입</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
