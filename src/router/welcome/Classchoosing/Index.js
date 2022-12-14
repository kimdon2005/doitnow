import "./Index.css";

const Classchoosing = () => {
  return (
    <div className="schoolsearching">
      <div className="canwestudy">
        <div>
          <p className="title">
            저희 함께
            <br />
            <span>공부</span>를<br />
            시작해볼까요?
          </p>
          <p className="subtitle">
            여러분이 재학중이신 <br />
            학교를 선택해주세요
          </p>
        </div>
        <div className="img">
          <div className="purple-circle"></div>
          <img
            className="book-img"
            src="img/book.png"
          />
        </div>
      </div>

      <div className="shadow-box">
        <div className="school-info">
          <p>학교</p>
          <div className="go-icon">
            <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/chevron_right/default/48px.svg" />
          </div>
        </div>
        <div className="school-list">
          <div className="circle"></div>
          <div className="info">
            <p className="title">마산용마고등학교</p>
            <p className="subtitle">
              클래스에 참여해 멋지게 공부를 시작해보세요
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-box">
        <div className="school-info">
          <p>학교 변경하기</p>
          <div className="go-icon">
            <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/chevron_right/default/48px.svg" />
          </div>
        </div>
        <div className="school-list">
          <div className="info">
            <p className="subtitle">전학 시 학교를 변경해주세요</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classchoosing;
