import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "./Signup.css";
import "./Checkbox.css";

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
        <div className="title">회원가입</div>
        <div></div>
      </div>

      <div className="login">
        <form>
          <p className="email_p">이메일</p>
          <input
            type="text"
            id="loginid"
            className="login_input"
            value={email}
            onChange={onChange}
            placeholder="이메일을 입력해라요"
          />

          <p className="pw_p">비밀번호</p>
          <input
            type="password"
            id="loginpw"
            className="login_input"
            value={password}
            onChange={onChange}
            placeholder="비밀번호를 입력하세요"
          />
          <input
            type="password"
            id="loginpw"
            className="login_input"
            value={password}
            onChange={onChange}
            placeholder="비밀번호를 다시입력하세요"
          />

          <div style={{ marginTop: "40px" }}></div>

          <div className="checkbox_area">
            <label class="checkbox_container">
              전체 동의
              <input type="checkbox" />
              <span class="checkbox_mark checkbox_border_black"></span>
            </label>
            <label class="checkbox_container">
              [필수] 두잇나우 이용약관 및 개인정보수집 및 이용에 동의합니다
              <input type="checkbox" />
              <span class="checkbox_mark checkbox_border_gray"></span>
            </label>
            <label class="checkbox_container">
              [선택] 광고성 정보 수신(SMS/이메일)에 동의합니다.
              <input type="checkbox" />
              <span class="checkbox_mark  checkbox_border_gray"></span>
            </label>
          </div>

          <button type="submit" className="submit_button">
            동의하고 가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
