import "./Index.css";

const Setting = () => {
  return (
    <div>
      <div className="Setting">
        <div className="header-ahffk">
          <div className="back-icon">
            <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/arrow_back_ios_new/default/48px.svg" />
          </div>
        </div>
        <div className="Settingtitle">설정</div>
        <div className="parent">
          <div className="a">
            <p>나의 활동 내역</p>
            <span class="material-symbols-outlined">navigate_next</span>
          </div>
        </div>
        <div className="gray-box"></div>
        <div className="parent">
          <div className="a">
            <p>비밀번호 변경</p>
            <span class="material-symbols-outlined">navigate_next</span>
          </div>
          <div className="a">
            <p>알림 설정</p>
            <span class="material-symbols-outlined">navigate_next</span>
          </div>
        </div>
        <div className="gray-box1"></div>
        <div className="parent">
          <div className="a">
            <p>약관 및 개인정보 처리 방침</p>
            <span class="material-symbols-outlined">navigate_next</span>
          </div>
        </div>
        <div className="gray-box"></div>
        <div className="parent">
          <div className="a">
            <p>앱 버전</p>
            <p>최신 버전</p>
          </div>
        </div>
        <div className="gray-box"></div>
        <div className="parent">
          <div className="a">
            <p>
              <span className="color-red">탈퇴하기</span>
            </p>
            <span class="material-symbols-outlined">navigate_next</span>
          </div>
        </div>
        <div className="Big-gray-bottom"></div>
      </div>
    </div>
  );
};

export default Setting;
