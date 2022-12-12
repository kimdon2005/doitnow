import "./Index.css";
import Navigation from "../../../components/Navigation/Index";

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
            <p>과제 만들기</p>
          </div>
          <div className="class_type_area">
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
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Createclass;
