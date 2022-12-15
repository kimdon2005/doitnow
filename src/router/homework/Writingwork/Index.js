import "./Index.css";

const Writingwork = () => {
  const cardList = [
    {
      profileName: "장현빈",
      schoolInfo: "마산용마고등학교 2학년 6반",
      profileImgUrl:
        "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg?fit=696,464",
      mainImgUrl:
        "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1Sma/image/4hprmQFiXDrg561-apxcxryjdtg.JPG",
      title: "나는 누구인가",
      mainText:
        "나는 누구일까? 나 자신을 아는 것이란 무엇인 것인가 나는 공산주의를 지지한다 무엇을 간다는 것인지 모르겠다 어떻게 이렇게 나를 구원하시고 너와 나의 삶을 사는 것이란 무엇일까 독립변인 종속변인 통제변인이다 종속변인 장현빈 0.5",
      date: "6일전"
    },
    {
      profileName: "박상현",
      schoolInfo: "마산용마고등학교 2학년 4반",
      profileImgUrl:
        "https://pbs.twimg.com/media/FZ4Ad-FakAAnwqa?format=jpg&name=360x360",
      mainImgUrl:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/GUi7Tl3TQkKZmkR3sRj4si5fMeI.jpg",
      title: "수달은 귀엽다",
      mainText: "수달은 귀엽다 반박시 니말 다틀림",
      date: "100일전"
    }
  ];

  const Viewcard = ({ info }) => {
    return (
      <div className="card">
        <div className="profile-info-class">
          <div>
            <img className="profile" src={info.profileImgUrl} />
          </div>
          <div className="profile-user">
            <div>
              <p className="Name">{info.profileName}</p>
              <p className="class">{info.schoolInfo}</p>
            </div>
          </div>
        </div>
        <div className="img-area">
          <img src={info.mainImgUrl} />
        </div>
        <div className="text-area">
          <p className="title">{info.title}</p>
          <p className="main-text">{info.mainText}</p>
          <p className="date">{info.date}</p>
        </div>
      </div>
    );
  };

  const Printcard = () => {
    return (
      <div>
        {cardList.map((info) => (
          <Viewcard info={info} />
        ))}
      </div>
    );
  };

  return (
    <div className="writingwork">
      <div className="classpage-header">
        <div className="left">
          <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
        <div className="right">
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">settings</span>
        </div>
      </div>
      <div className="workinfo">
        <div className="worktitle">영어 프린트 수행평가</div>
        <div className="workexplanation">
          2-1학습지
          <br />
          2-2학습지
          <br />
          2-2러닝로그
          <br />
          2-3학습지
          <br />
          2-3러닝로그
          <br />
          2-4학습지
        </div>
        <p className="date">기한 :2022-07-08 ~ 2022-07-28</p>
      </div>
      <Printcard />
      <div className="bottombar">hghnghj</div>
    </div>
  );
};

export default Writingwork;
