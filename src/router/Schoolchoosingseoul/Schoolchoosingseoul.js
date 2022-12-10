import React from "react";
import "./Schoolchoosingseoul.css";

const Schoolchoosingseoul = () => {
  return (
    <div>
      <div className="backArRow">백</div>
      <div className="schoolchoosingseoul">
        <div className="one">
          재학 중이신 <br />
          <span>학교</span>를 선택해주세요
        </div>
        <div className="two">학교 입력</div>
        <input
          className="schoolsearchinG"
          placeholder="예)마산용마고등학교"
        ></input>
        <div className="schoolarray">
          <div className="One">서울과학고등학교</div>
          <div className="Two">서울과학고등학교</div>
          <div className="Three">서울과학고등학교</div>
          <div className="Four">서울과학고등학교</div>
        </div>
      </div>
    </div>
  );
};

export default Schoolchoosingseoul;
