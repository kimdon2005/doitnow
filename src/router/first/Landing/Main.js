import React from "react";
import "./Main.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <img
        className="bg-img"
        src="https://cdn.discordapp.com/attachments/1000698294709792838/1028672622680084581/pexels-ivan-samkov-4240584.jpg"
      ></img>
      <div className="bg-shadow"></div>
      <div className="contents">
        <div className="top">
          <p>
            나를 가꾸는
            <br />
            <span>행복의 순간</span>
          </p>
        </div>
        <div className="bottom">
          <button className="button-kakao">
            <img src="https://t1.daumcdn.net/cfile/tistory/2315BC3453D9F98F03" />
            카카오로 시작하기
          </button>
          <button className="button-apple">
            <img src="https://pnggrid.com/wp-content/uploads/2021/04/white-apple-1670x2048.png" />
            Apple로 시작하기
          </button>
          <Link to="/signup">
            <p className="another-way">다른 방법으로 시작하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
