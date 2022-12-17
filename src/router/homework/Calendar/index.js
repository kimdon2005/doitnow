import "./Index.css";
import Calendar from "./Calendar.js";
import { useState } from "react";
import Navigation from "components/Navigation/Index";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  const toDoList = [
    {
      id: "283o4234823798",
      title: "영어 프린트 수행평가1",
      from: "2022년 9월 10일",
      to: "27일"
    },
    {
      id: "283o423432423423423823798",
      title: "영어 프린트 수행평가2",
      from: "2022년 9월 29일",
      to: "30일"
    }
  ];

  const ViewList = ({ info }) => {
    return (
      <div className="rectangle-11">
        <div className="left">
          <div></div>
        </div>
        <div className="center">
          <div>
            <p className="title">{info.title}</p>
            <p className="date">
              {info.from} ~ {info.to}
            </p>
          </div>
        </div>
        
        <div className="right">
        <p></p>
      </div>
        

      </div>
    );
  };

  const PrintList = () => {
    return (
      <div>
        {toDoList.map((info) => (
          <ViewList info={info} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Calendar />
      <div className="rectangle-9">
        <div className="info">
          <p className="title">오늘의 할일</p>
          <p className="today-date">27일 수요일</p>
        </div>
        <div className="list">
          <PrintList />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Calender;
