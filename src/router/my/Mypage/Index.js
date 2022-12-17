import "./Index.css";
import Navigation from "../../../components/Navigation/Index";
import { useNavigate} from "react-router";
import { getAuth, signOut} from "firebase/auth";
import { useState , useEffect} from "react";
import axios from "axios";



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

  // const getinfo=() =>{
  //   return new Promise(
  //     (resolve)=>{
  //       axios.get('/api/user').then((result)=>{
  //         resolve();
  //         return result.json;
  //       })
  //     }    
  //   )
  // }
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
              <p className="class">{info.nameSchool}</p>
            </div>
          </div>
          <div className="tool">
            <div>
              <span className="material-symbols-outlined">settings</span>
            </div>
          </div>
        </div>
      </div>
      <div className="gray-box"></div>
      <div className="parent">
        <div className="a">
          <p>나의 활동 내역</p>
          <span class="material-symbols-outlined">navigate_next</span>
        </div>
        <div className="a">
          <p>나의 클래스 관리하기</p>
          <span class="material-symbols-outlined">navigate_next</span>
        </div>
        <div className="a">
          <p>나의 과제 관리하기</p>
          <span class="material-symbols-outlined">navigate_next</span>
        </div>
        <div className="a">
          <p>자주 묻는 질문</p>
          <span class="material-symbols-outlined">navigate_next</span>
        </div>
        <div className="a">
          <p>1:1 문의</p>
          <span class="material-symbols-outlined">navigate_next</span>
        </div>
        <div className="a">
          <p>공지사항</p>
          <span class="material-symbols-outlined">navigate_next</span>
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
