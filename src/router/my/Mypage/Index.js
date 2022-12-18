import "./Index.css";
import Navigation from "../../../components/Navigation/Index";
import { useNavigate} from "react-router";
import { getAuth, signOut} from "firebase/auth";
import { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Mypage = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const logout=()=>{
    const auth = getAuth();
    
    signOut(auth).then(() => {
      navigate('/')
      }).catch((error) => {
    });
  }
  useEffect(() => {
    axios.get('/api/user').then((result)=>{
      console.log(result.data)
      return result.data;
    }).then(
      (data)=>{
        setInfo(data);
      }
    )
  },[]);

  return (
    <div>
      <div className="header-ahffk">
        <div className="back-icon"></div>
        <div className="title">MY</div>
        <div></div>
      </div>
      <div className="mypage">
        <div className="profile-info">
          <div>
            <img
              className="profile"
              src= {info.filepath ? info.filepath : 'img/basic.jpg'}
            />
          </div>
          <div className="profile-user">
            <div>
              <p className="Name">{info.nickname}</p>
              <p className="class">{info.nameSchool+' ' + info.grade + '학년 ' + info.class+'반'}</p>
            </div>
          </div>
          <div className="tool">
            <Link to='/setting' style={{ textDecoration: 'none' }}>
            <div>
              <span className="material-symbols-outlined">settings</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="gray-box"></div>
      <div className="parent">
        <div className="a">
          <p>나의 활동 내역</p>
          <Link to="/preparing" style={{ textDecoration: 'none' }} className='icon'>
          <span class="material-symbols-outlined">navigate_next</span>
          </Link>
        </div>
        <div className="a">
          <p>나의 클래스 관리하기</p>
          <Link to="/preparing" style={{ textDecoration: 'none' }}>
          <span class="material-symbols-outlined">navigate_next</span>
          </Link>
        </div>
        <div className="a">
          <p>나의 과제 관리하기</p>
          <Link to="/preparing" style={{ textDecoration: 'none' }}>
          <span class="material-symbols-outlined">navigate_next</span>
          </Link>
        </div>
        <div className="a">
          <p>자주 묻는 질문</p>
          <Link to="/preparing" style={{ textDecoration: 'none' }}>          
          <span class="material-symbols-outlined">navigate_next</span>
          </Link>
        </div>
        <div className="a">
          <p>1:1 문의</p>
          <Link to="/preparing" style={{ textDecoration: 'none' }}>
          <span class="material-symbols-outlined">navigate_next</span>
          </Link>
        </div>
        <div className="a">
          <p>공지사항</p>
          <Link to="/preparing" style={{ textDecoration: 'none' }}>
          <span class="material-symbols-outlined">navigate_next</span>
          </Link>
        </div>
        <div className="a" onClick={logout}>
          <p>로그아웃</p>
        </div>
      </div>
      <Navigation my ='color_selected' />
    </div>
  );
};



export default Mypage;
