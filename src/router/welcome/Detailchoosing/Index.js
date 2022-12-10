import "./Index.css";

const Detailchoosing = () => {
  return (
    <div>
      <div className="BBackArRow">백</div>
      <div className="Detailchoosing">
        <div className="FiRsT">
          재학 중이신 <br />
          학교의 <span>학년 반 번호</span>를
          <br />
          선택해주세요
        </div>
        <div className="BOx1">
          <p className="FonT1">학년 입력</p>
          <input className="SeARcHingBAR" placeholder="예)2"></input>
        </div>
        <div className="BOx2">
          <p className="FonT1">반 입력</p>
          <input className="SeARcHingBAR" placeholder="예)6"></input>
        </div>
        <div className="BOx3">
          <p className="FonT1">번호 입력</p>
          <input className="SeARcHingBAR" placeholder="예)18"></input>
        </div>
      </div>
    </div>
  );
};

export default Detailchoosing;
