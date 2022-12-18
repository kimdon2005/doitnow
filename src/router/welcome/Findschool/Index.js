import "./Index.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Navigation from "../../components/Navigation/Index";

const Schoolsearching = () => {
  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <div className="schoolsearching">
      <div className="canwestudy">
        <div>
          <p className="title">
            저희 함께
            <br />
            <span>공부</span>를<br />
            시작해봐요.
          </p>
          <p className="subtitle">
            여러분이 재학중이신 <br />
            학교를 선택해주세요
          </p>
        </div>
        <div className="img">
          <div className="purple-circle"></div>
          <img
            className="book-img"
            src="https://cdn.discordapp.com/attachments/1000698294709792838/1028574121061261433/9f2dcd3b632fd12f.png"
          />
        </div>
      </div>

      <StyledLink to="/schoolchoosing">
        <div className="shadow-box">
          <div className="school-info">
            <p>학교 찾기</p>
            <div className="go-icon">
              <Link to='/schoolchoosing'>
              <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/chevron_right/default/48px.svg" />

              </Link>
            </div>
          </div>
          <div className="school-list">
            <div className="info">
              <p className="subtitle">
                재학 중이신 학교를
                <br /> 선택해 클래스를 시작해보세요!
              </p>
            </div>
          </div>
        </div>
      </StyledLink>
      <StyledLink to="/schoolchoosing">
        <div className="shadow-box">
          <div className="school-info">
            <p>학교 변경하기</p>
            <div className="go-icon">
              <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/chevron_right/default/48px.svg" />
            </div>
          </div>
          <div className="school-list">
            <div className="info">
              <p className="subtitle">전학 시 학교를 변경해주세요</p>
            </div>
          </div>
        </div>
      </StyledLink>
    </div>
  );
};

export default Schoolsearching;
