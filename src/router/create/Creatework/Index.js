import "./Index.css";
import Navigation from "../../../components/Navigation/Index";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Creatework = () => {
  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <div>
      <div className="Creatework">
        <p className="title">만들기</p>
        <div className="menu">
        <Link to='/createclass' style={{ textDecoration: 'none' }}>
        <p className="black">클래스 만들기</p>
        </Link>

          <p>
            과제 만들기<span id="explore"></span>
          </p>
        </div>
        <div className="BlueBoX">
          <div>
            <p className="SubTiTLE0">
              과제만들기 <br /> 간단하게 시작해보아요
            </p>
            <StyledLink to="/workmaking">
              <button className="STartbutton">시작하기</button>
            </StyledLink>
          </div>
          <img
            className="caLendar"
            src="https://cdn.discordapp.com/attachments/1000698294709792838/1030475979111534652/PNG_.PNG"
          />
        </div>
      </div>
      <Navigation make = 'selected'/>
    </div>
  );
};

export default Creatework;
