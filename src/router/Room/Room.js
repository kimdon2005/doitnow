import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.css";
import React, { useState } from "react";
import "./Room.css";

const Room = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  const [roomInfo, setRoomInfo] = useState({
    title:
      "숙제 페이지 제목이 이렇게 길면 ...으로 생략이 되는데 이것을 지금 테스트해보고 있는 중입니다",
    roomJuinId: "nickname",
    roomJuinNickname: "주인님"
  });

  const [homeworkInfo, setHomeWorkInfo] = useState([
    {
      title: "제목",
      contents: "내용니ㅗ리ㅏㄴ오라ㅣㄴ",
      writerId: "id",
      writerNickname: "상현",
      writerImgUrl: "",
      UploadFile: "ㅇㅇ",
      date: "2020-01-01",
      postId: 392874972389,
      bgColor: "#DAB4D2"
    }
  ]);

  const HomeworkList = ({ homework }) => {
    return (
      <div
        className="homework-card"
        style={{ backgroundColor: homework.bgColor }}
      >
        <div className="profile-info">
          <div className="img"></div>
          <div className="nickname">
            {homework.writerNickname} - {homework.date}
          </div>
        </div>
        <p className="title">{homework.title}</p>
        <p className="contents">{homework.contents}</p>
      </div>
    );
  };

  const Homework = () => {
    return (
      <div>
        {homeworkInfo.map((homework) => (
          <HomeworkList key={homework.postId} homework={homework} />
        ))}
      </div>
    );
  };

  const { roomId } = useParams();

  const bgColorSet = [
    "#B7A8CD",
    "#BEB7D4",
    "#AFB8E5",
    "#D8ABC3",
    "#DBB5D1",
    "#B5B1D7",
    "#D7A6BF",
    "#DAB4D2",
    "#BFB9E2",
    "#CDB7D9",
    "#BEBFE7",
    "#D4D5EC",
    "#D7D8F0",
    "#E1D1E2",
    "#E5C7DB",
    "#D7D8F0",
    "#DCDCF2"
  ];

  const randomContents = [
    "아에이오우lksdajflksdaf",
    "카케키코쿠ㅇㄴ머란ㅁㅇㅇㄴㄹㅇㄴㅁㄹㄴㅇㄹㄴㅇ",
    "사시스세소",
    "가나다라마바사",
    "tlqkf",
    "배고프다",
    "Ekljdsflajl",
    "타치츠테토",
    "야유요",
    "아야어여오요우유"
  ];

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  function addHomework() {
    let bg = randomValueFromArray(bgColorSet);
    let contents = randomValueFromArray(randomContents);
    let title = randomValueFromArray(randomContents);
    let key = Math.floor(Math.random() * 1000000000);
    const newHomework = {
      title: title,
      contents: contents,
      writerId: "id",
      writerNickname: "상현",
      writerImgUrl: "",
      UploadFile: "ㅇㅇ",
      date: "2020-01-01",
      postId: key,
      bgColor: bg
    };

    setHomeWorkInfo(homeworkInfo.concat(newHomework));
  }

  return (
    <div>
      <Header title={roomInfo.title} isLoggedIn={isLoggedIn} />
      <article className="homework-feed">
        <Homework />
      </article>
      <div className="fixed-button">
        <button onClick={addHomework}>+</button>
      </div>
    </div>
  );
};

export default Room;
