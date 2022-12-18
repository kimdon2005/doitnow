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
      from: "2022-12-10",
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
          <p>></p>
        </div>
      </div>
    );
  };

  const PrintList = ({ date }) => {
    const listInfo = toDoList.find((e) => e.date === date);
    console.log(listInfo);

    return (
      <div>
        {listInfo.map((info) => (
          <ViewList info={info} />
        ))}
      </div>
    );
  };

  const [todayDate, setTodayDate] = useState("2022-12-19");

  return (
    <div>
      <Calendar setTodayDate={setTodayDate} />
      <div className="rectangle-9">
        <div className="info">
          <p className="title">오늘의 할일</p>
          <p className="today-date">{todayDate}</p>
        </div>
        <div className="list">
          <PrintList date={todayDate} />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Calender;
