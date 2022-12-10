import "./Index.css";
import axios from "axios";
const Detailclass = () => {
  const info = {
    school_id: "2075",
    grade: "1",
    class: "5"
  };
  axios.get('/api/page/class?school_id=2075&grade=1&class=5').then(response => console.log(response))
  /*
  axios
    .put("/api/page/posting", info, { withCredentials: true })
    .then((response) => {
      console.log(response.data);
    });
    */
  /*
  fetch("https://www.doitnow.kr/api/page/class", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      idPosting: 14,
      idStudent: 1202,
      title: "test33",
      content: "fuck"
    })
  })
    // .then(response => console.log("response"))
    .then((res) => {
      if (res.success) {
        // console.log(`${res.user.name}` 님 환영합니다);
        console.log(res);
      }
    });
    */

  function LoginUser() {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        school_id: "2075",
        grade: "1",
        class: "5"
      })
    };
    fetch("https://www.doitnow.kr/api/class/page", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          console.log("succesfull");
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="detailclass">
      <div className="header-ahffk">
        <div className="back-icon">
          <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/arrow_back_ios_new/default/48px.svg" />
        </div>
        <div className="title"></div>
        <div></div>
      </div>
      <div>국어</div>
      {Pagebox("boxing", "나는 왜 나 일까 토론 결과", "하유정", "7/26")}
      {Pagebox("vovo", "도시 되살리기 그 후", "하유정", "8/2")}
      {Pagebox("boxing", "비판적 읽기 토의 결과", "하유정", "8/13")}
    </div>
  );
};

function Pagebox(classname, title, content, date) {
  return (
    <div className={classname}>
      <p className="aboxing">{title}</p>
      <span>
        {content} {date}
      </span>
      <button className="enterbutton">입장하기</button>
    </div>
  );
}

export default Detailclass;
