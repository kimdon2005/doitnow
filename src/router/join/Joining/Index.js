import "./Index.css";
import Navigation from "../../../components/Navigation/Index";

const Schoolsearching = () => {
  return (
    <div className="joining">
      <div className="firstsentence">Do It now 합류하기</div>

      <div className="firstbox">QR 코드로 합류하기</div>
      <div className="secondbox">링크로 합류하기</div>
      <Navigation join ='selected' />
    </div>
  );
};

export default Schoolsearching;
