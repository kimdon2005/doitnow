import React from "react";
import "./Main.css";
import Header from "../../../components/Header/Header";
import { Link , useNavigate} from "react-router-dom";
import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle, auth } from '../../config/firebase_config';

function GoogleSignin(props){

  auth.onAuthStateChanged(user => {
  // user.currentUser 를 통해 현재 로그인 중인 사용자에 대한 정보를 이용할 수 있습니다.
  // ex) user.currentUser.email , user.currentUser.displayName .. etc
  
    if(user !== null){
      console.log('로그인되었습니다.');
      props("/calendar");
    }
    else{
      signInWithGoogle().then(props("/findschool"))
    }
  })
}

const Main = (props) => {
  const navigate = useNavigate();
  if (props.islogin == true){
    navigate("/my")
  }
  return (
    <div>
      <img
        className="bg-img"
        src="img/pexels-ivan-samkov-4240584.jpg"
      ></img>
      <div className="bg-shadow"></div>
      <div className="contents">
        <div className="top">
          <p>
            나를 가꾸는
            <br />
            <span>행복의 순간</span>
          </p>
        </div>
        <div className="bottom">
          <button className="button-kakao" onClick={()=>GoogleSignin(navigate)}>
            <img src="img/pngwing.com.png" />
            구글로 시작하기
          </button>
          <Link to="/signup">
            <p className="another-way">다른 방법으로 시작하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
