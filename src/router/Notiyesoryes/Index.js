import "./Index.css";

const Notiyesoryes = () => {
  return (
    <div className="Notipage">
      <div className="header-ahffk">
        <div className="back-icon">
          <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/arrow_back_ios_new/default/48px.svg" />
        </div>
      </div>
      <div className="innernoti">
        <p className="tittle">
          남은 과제 기간을
          <br />
          알려드려요
        </p>
        <p className="subtittle">과제 남은 기간 알림을 받아보세요</p>
        <div className="ring">
          <img src="https://media.discordapp.net/attachments/1000698294709792838/1030475894470475806/PNG_.PNG" />
        </div>
        <p className="sex">
          기한이 다 되어 갈 때
          <br />
          알림의 보내 알려드려요
        </p>
        <p className="fuck">
          이제 잊지 않고 과제를
          <br /> 수행 할 수 있어요
        </p>
      </div>
      <div className="fixednotice">
          <button className="notice">알림 받기</button>
        </div>
    </div>
  );
};

export default Notiyesoryes;
