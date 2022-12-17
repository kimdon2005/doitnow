import "./Index.css";
import Navigation from "../../../components/Navigation/Index";
import { Link } from 'react-router-dom';

const Schoolsearching = () => {
  return (
    <div className="joining">
      <div className="firstsentence">Do It now 합류하기</div>
      <Link to="/preparing" style={{ textDecoration: 'none' }}>
        <div className="firstbox">QR 코드로 합류하기</div>
      </Link>
      <Link to="/preparing" style={{ textDecoration: 'none' }}>
        <div className="secondbox">링크로 합류하기</div>
      </Link>
      <Navigation join ='selected' />
    </div>
  );
};

export default Schoolsearching;
