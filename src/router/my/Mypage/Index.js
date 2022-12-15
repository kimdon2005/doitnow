import "./Index.css";
import Navigation from "../../../components/Navigation/Index";
import { useNavigate} from "react-router";
import { getAuth, signOut} from "firebase/auth";

const Mypage = () => {
  const navigate = useNavigate();

  const logout=()=>{
    const auth = getAuth();
    
    signOut(auth).then(() => {
      navigate('/')
      }).catch((error) => {
    });

}
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
              src="https://cdn.discordapp.com/attachments/1000698294709792838/1028684804796973186/dog-g076e8c51c_640.jpg"
            />
          </div>
          <div className="profile-user">
            <div>
              <p className="Name">장현빈</p>
              <p className="class">마산용마고등학교 2학년 6반</p>
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
