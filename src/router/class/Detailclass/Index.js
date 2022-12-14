import "./Index.css";
import axios from "axios";
import   Backbutton from "../../../components/backbutton/backbutton"
import { useNavigate} from "react-router";

const Detailclass = () => {
  axios.get('/api/page/class?school_id=2075&grade=1&class=5').then(response => console.log(response))
  const navigate = useNavigate();
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
      <Backbutton navigate = {navigate}></Backbutton>

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
