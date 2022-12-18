import "./Index.css";
import Navigation from "../../../components/Navigation/Index";
import { Link } from "react-router-dom";

const Createclass = () => {
  return (
    <div>
      <div className="createclass">
        <div className="class_contents">
          <p className="title">만들기</p>
          <div className="menu">
            <p className="black">
              클래스 만들기<span id="explore"></span>
            </p>
            <Link to='/creatework' style={{ textDecoration: 'none' }} >
            <p className="makeWorkPage">과제 만들기</p>
            </Link>
          </div>
          <div className="class_type_area">
            <Link to='/preparing' style={{ textDecoration: 'none' }}>
              
            <div className="class_type">
              <div className="figure">
                <div className="left">
                  <div className="whitebox1"></div>
                  <div className="whitebox2"></div>
                </div>
                <div className="right">
                  <div className="whitebox3"></div>
                  <div className="whitebox4"></div>
                </div>
              </div>
              <p className="title">STACK</p>
              <p className="subtitle">카드를 쌓아 콘텐츠 만듭니다.</p>
            </div>
            </Link>

          </div>
        </div>
      </div>
      <Navigation make ='selected' />
    </div>
  );
};

export default Createclass;
