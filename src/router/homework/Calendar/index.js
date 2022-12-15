import "./Index.css";
import Calendar from "./Calendar.js";
import { useState } from "react";
import Navigation from "components/Navigation/Index";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar />
      <div className="rectangle-9">
        <div className="info">
          <p className="title">오늘의 할일</p>
          <p className="today-date">27일 수요일</p>
        </div>
        <div className="list">
          <div className="rectangle-11">
            <div className="left">
              <div></div>
            </div>
            <div className="center">
              <div>
                <p className="title">영어 프린트 수행평가</p>
                <p className="date">2022년 6월 24일 ~ 27일</p>
              </div>
            </div>
            <div className="right">
              <p>></p>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Calender;
