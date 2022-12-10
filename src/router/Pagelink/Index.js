import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagelink = () => {
  return (
    <div>
      <Link to="/">
        <p>첫화면</p>
      </Link>
      <Link to="/signup">
        <p>회원가입</p>
      </Link>
      <Link to="/classpage">
        <p>첫화면</p>
      </Link>
      <Link to="/schoolsearching">
        <p>저희 함께 공부를 시작해볼까요 페이지</p>
      </Link>
      <Link to="/schoolchoosing">
        <p>재학중이신 학교 선택해달라 페이지</p>
        <Link to="/schoolchoosingseoul">
          <p>재학중인 학교선택 학교 미리보기</p>
        </Link>
      </Link>
      <Link to="/joining">
        <p>두잇나우 합류하기</p>
      </Link>
      <Link to="/findschool">
        <p>저희 함께 공부해봐요 페이지 </p>
      </Link>
      <Link to="/detailchoosing">
        <p>재학 중이신 학교의 학년 반 번호를 선택해주세요</p>
      </Link>
      <Link to="/my">
        <p>마이페이지</p>
      </Link>
      <Link to="/createclass">
        <p>클래스 만들기(createclass) 페이지</p>
      </Link>
      <Link to="/workmaking">
        <p>과제 만들기 페이지</p>
      </Link>
      <Link to="/viewclass">
        <p>클래스 호스트 화면 페이지</p>
      </Link>
      <Link to="/detailclass">
        <p>디테일클래스 페이지</p>
      </Link>
      <Link to="/notiyesoryes">
        <p>알림 받을거냐 말거냐 선택 페이지</p>
      </Link>
      <Link to="/creatework">
        <p>과제 만들기(creatework) 페이지</p>
      </Link>
      <Link to="/Uploadassignment">
        <p>과제 있고 내용 있고 박스 있는 페이지</p>
      </Link>
      <Link to="/createclassinfo">
        <p>클래스생성 페이지</p>
      </Link>
      <Link to="/comment">
        <p>댓글 페이지</p>
      </Link>
    </div>
  );
};

export default Pagelink;
