import "./Index.css";

const Workmaking = () => {
  return (
    <div>
      <div className="backArRow">백</div>
      <div className="Workmaking">
        <div className="TItLE">과제 만들기</div>
        <div className="BbOX">
          <p className="sTy1">학년</p>
          <div className="bBox1"></div>
        </div>
        <div className="BbOX">
          <p className="sTy1">반(중복선택 가능)</p>
          <div className="bBox2"></div>
        </div>
        <div className="BbOX">
          <p className="sTy1">제목</p>
          <div className="bBox3"></div>
        </div>
        <div className="BbOX">
          <p className="sTy1">설명</p>
          <div className="bBox4"></div>
        </div>
        <p className="sTy2">기한</p>
      </div>
    </div>
  );
};

export default Workmaking;
