import { useState } from "react";
import Backbutton from "../../../components/backbutton/backbutton";
import "./Index.css";
import { useLocation,useNavigate } from "react-router-dom"; // 추가된 부분
import axios from "axios";

const Uploadassignment = () => {
  const location = useLocation(); // 추가된 부분
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title:'',
    content: '',
    idStudent:''
  });

  const {title,content, idStudent} = inputs;

  
  const onChange = (e) => {
    const {name, value} = e.target;
    const nextInputs = {
        ...inputs,
        [name]: value, //e.target의 name과 value이다.
    };
    console.log(nextInputs)

   setInputs(nextInputs)
}

  const makePost = () =>{


    const data = {
      "title": inputs.title,
      "content": inputs.content,
      "idWork_page" : location.state.idWorkPage,
      "idStudent": inputs.idStudent,
      "idFile": []

  };

    const config = {"Content-Type": 'application/json'};

    axios.post('/api/page/posting', data, config).then((result)=>{
      navigate(-1)
      console.log(result)
      
    })
  }
  return (
    <div className="uploaadassignment">
      <Backbutton></Backbutton>
      <div className="empty"></div>

      <div className="gangbang">제목</div>
      <input
            id="loginpw"
            className="titlebox"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 입력하세요"
          />

      <div className="gangbang">내용</div>
      <input
            id="loginpw"
            className="box"
            name="content"
            value={content}
            onChange={onChange}
            placeholder="내용을 입력하세요"
          />
      <div className="gangbang">학번</div>
      <input
            id="loginpw"
            className="titlebox"
            name="idStudent"
            value={idStudent}
            onChange={onChange}
            placeholder="학번을 입력하세요"
          />
      <div className="button-area">
        <div className="img-input">
          <span class="material-symbols-outlined">photo</span>
        </div>
        <div className="folder">
          <span class="material-symbols-outlined">folder</span>
        </div>
      </div>
      <button className="submit" onClick={()=>{makePost()}}>게시</button>

    </div>
  );
};

export default Uploadassignment;
