import "./Index.css";

const Sharedclass = () => {
  return (
    <div>
      <div>
        <div className="classbell-background"></div>
        <div className="classbell">
          <div className="line"></div>
          <p className="question">
            내 클래스를 <br />
            공유하시겠어요?
          </p>
          <p className="qrpossible">QR코드 또는 링크로 공유할 수 있어요</p>
          <div className="share-button" style={{ marginBottom: "10px" }}>
            <span class="material-symbols-outlined">attachment</span>
            <p>클립보드로 링크 복사</p>
          </div>
          <div className="share-button">
            <span class="material-symbols-outlined">qr_code</span>
            <p>QR코드로 공유하기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharedclass;
