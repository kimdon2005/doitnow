import React, { useCallback, useState } from "react";
import classNames from "classnames/bind";
import style from "./Calendar.css";

const cx = classNames.bind(style);

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay() //오늘 요일
  };

  const ddtoday = today.month + "/" + today.date;

  const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜

  const prevMonth = useCallback(() => {
    //이전 달 보기 보튼
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]);

  const nextMonth = useCallback(() => {
    //다음 달 보기 버튼
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const monthControl = useCallback(() => {
    //달 선택박스에서 고르기
    let monthArr = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(
        <option key={i + 1} value={i + 1}>
          {i + 1}월
        </option>
      );
    }
    return (
      <select onChange={changeSelectMonth} value={selectedMonth}>
        {monthArr}
      </select>
    );
  }, [selectedMonth]);

  const yearControl = useCallback(() => {
    //연도 선택박스에서 고르기
    let yearArr = [];
    const startYear = today.year - 10; //현재 년도부터 10년전 까지만
    const endYear = today.year + 10; //현재 년도부터 10년후 까지만
    for (let i = startYear; i < endYear + 1; i++) {
      yearArr.push(
        <option key={i} value={i}>
          {i}년
        </option>
      );
    }
    return (
      <select
        // className="yearSelect"
        onChange={changeSelectYear}
        value={selectedYear}
      >
        {yearArr}
      </select>
    );
  }, [selectedYear]);

  const changeSelectMonth = (e) => {
    setSelectedMonth(Number(e.target.value));
  };
  const changeSelectYear = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const returnWeek = useCallback(() => {
    //요일 반환 함수
    let weekArr = [];
    week.forEach((v) => {
      weekArr.push(
        <div
          key={v}
          className={cx(
            { weekday: true },
            { sunday: v === "일" },
            { saturday: v === "토" }
          )}
        >
          {v}
        </div>
      );
    });
    return weekArr;
  }, []);

  const returnDay = useCallback(() => {
    console.log(ddtoday);
    //선택된 달의 날짜들 반환 함수
    let dayArr = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(
            <div
              key={i + 1}
              className={cx(
                {
                  //오늘 날짜일 때 표시할 스타일 클라스네임
                  today:
                    today.year === selectedYear &&
                    today.month === selectedMonth &&
                    today.date === i + 1
                },
                { weekday: true }, //전체 날짜 스타일
                {
                  //전체 일요일 스타일
                  sunday:
                    new Date(
                      selectedYear,
                      selectedMonth - 1,
                      i + 1
                    ).getDay() === 0
                },
                {
                  //전체 토요일 스타일
                  saturday:
                    new Date(
                      selectedYear,
                      selectedMonth - 1,
                      i + 1
                    ).getDay() === 6
                }
              )}
            >
              {i + 1}
              {1 === 1 ? <span className="date-bottom-dot"></span> : null}
            </div>
          );
        }
      } else {
        dayArr.push(<div className="weekday"></div>);
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <div>
      <div className="calendar-header">
        <div className="left">
          <button className="arrow-button" onClick={prevMonth}>
            ◀︎
          </button>
        </div>
        <div className="center">
          <p>
            {selectedYear}년 {selectedMonth}월
          </p>
        </div>
        <div className="right">
          <button className="arrow-button" onClick={nextMonth}>
            ▶︎
          </button>
        </div>
      </div>
      <div className="container">
        <div className="week">{returnWeek()}</div>
        <div className="date">{returnDay()}</div>
      </div>
    </div>
  );
};

export default Calendar;