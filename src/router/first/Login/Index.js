import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "./Index.css";
import Logo from "./unnamed.png";
import Backbutton from "../../../components/backbutton/backbutton";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
      });
  const navigate = useNavigate();

  const {email, password} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    const nextInputs = {
        ...inputs,
        [name]: value, //e.target의 name과 value이다.
    };
    console.log(nextInputs)

   setInputs(nextInputs)
}

  const StyledLink = styled(Link)`
    color: #2c7ee8;
    text-decoration: none;
  `;

  const login = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        axios.post('/api/auth/signin?uid='+user.uid).then(
            ()=>{
                console.log('로그인 성공');
                navigate('/calendar')
            }
        )
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });    

  }

  return (
    <div>
      {/* <div className="header-ahffk">
        <div className="back-icon">
          <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/arrow_back_ios_new/default/48px.svg" />
        </div>
      </div> */}

      <div className="login">
      <Backbutton></Backbutton>

        <div className="empty"></div>
        <img src={Logo} className="doitnow" />
          <p className="email_p">이메일</p>
          <input
            type="text"
            id="loginid"
            className="login_input"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일"
          />

          <p className="pw_p">비밀번호</p>
          <input
            type="password"
            id="loginpw"
            className="login_input"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="숫자, 영문, 특수문자 조합 최소 8자~20자"
          />

          <button className="Login_button" onClick={()=>{login()}}>로그인</button>
          <Link to="/signup">
            <div className="signin">회원가입</div>
          </Link>
      </div>
    </div>
  );
};

export default Login;
