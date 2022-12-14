import { useParams, Link , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
// import styled from "styled-components";
import "./Signup.css";
import "./Checkbox.css";
import   Backbutton from "../../../components/backbutton/backbutton"


const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    repassword:'',
    check: 'false'
  });
  const navigate = useNavigate();

  const {email, password, repassword, check} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    const nextInputs = {
        ...inputs,
        [name]: value, //e.target의 name과 value이다.
    };
    console.log(nextInputs)

   setInputs(nextInputs)
}
  const gotoNext = () =>{
    console.log(typeof inputs)
    navigate('/schoolsearching' , { state: inputs})
  }
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };

  const checkPassword = (e) => {
    try {
      //  8 ~ 10자 영문, 숫자 조합
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
      // 형식에 맞는 경우 true 리턴
      console.log('비밀번호 유효성 검사 :: ', regExp.test(e))
      return regExp.test(e)
    } catch (error) {
      return false
    }

}
  

  // const StyledLink = styled(Link)`
  //   color: #2c7ee8;
  //   text-decoration: none;
  // `;

  return (
    <div>
      <div className="header-ahffk">
        <div className="back-icon">
          <Backbutton navigate = {navigate}></Backbutton>

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
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일을 입력해라요"
          />
          <div className="noti">{isEmail(email) ? '유효한 이메일이에요!' : '이메일을 확인해주세요!'}</div>

          <p className="pw_p">비밀번호</p>
          <input
            type="password"
            id="loginpw"
            className="login_input"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호를 입력하세요"
          />
          <input
            type="password"
            id="loginpw"
            className="login_input"
            name="repassword"
            value={repassword}
            onChange={onChange}
            placeholder="비밀번호를 다시입력하세요"
          />
          <div className="noti">{checkPassword(password) ? '유효한 비밀번호에요!' : '영문과 숫자를 포함해 8~10자리로 해주세요!'}</div>
          <div className="noti">{(password === repassword) ? '비밀번호가 일치해요!' : '비밀번호가 일치한지 확인해 주세요!'}</div>

          <div style={{ marginTop: "40px" }}></div>

          <div className="checkbox_area">
            <label class="checkbox_container"  >
              [필수] 두잇나우 이용약관 및 개인정보수집 및 이용에 동의합니다
              <input type="checkbox" value={(check==='false') ? 'true': 'false'} onChange={onChange}  name="check"/>
              <span class="checkbox_mark checkbox_border_gray"></span>
            </label>
            <label class="checkbox_container">
              [선택] 광고성 정보 수신(SMS/이메일)에 동의합니다.
              <input type="checkbox" />
              <span class="checkbox_mark  checkbox_border_gray"></span>
            </label>
          </div>

          <button className="submit_button" disabled ={
            ((isEmail(email)== true) && (password === repassword) && (check === 'true') )? false: true
          } onClick = {gotoNext}
            >
            동의하고 가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
