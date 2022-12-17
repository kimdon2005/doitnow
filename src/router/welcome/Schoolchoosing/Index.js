import "./Index.css";
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate , useLocation} from 'react-router';
import   Backbutton from "../../../components/backbutton/backbutton"

const Schoolchoosing = () => {
  const [text, setText] = useState('')  
  const [search, setSearch] = useState([])
  const navigate = useNavigate();
  const { state } = useLocation();



  const onChange = (e) => {
    console.log(e.target)		//이벤트가 발생한 타겟의 요소를 출력
    console.log(e.target.value)	//이벤트가 발생한 타겟의 Value를 출력
    setText(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
  }

  const onReset = () => {			
    setText("")			     // onClick함수 발생시 ''으로 {text} 변경
  }

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      axios.patch('/api/user/school?name='+ text).then((e)=>{
        setSearch(e.data);
        console.log(e.data);
      })
    }
  };

  const gotoNext = (id) =>{
    state.idSchool = id;
    navigate('/detailchoosing', { state: state});
    
  }
  

  return (
    <div>
      <Backbutton></Backbutton>
      <div className="Arrow"></div>
      <div className="schoolchoosing">
        <div className="firstbox1">
          <p>
            재학중이신 <br />
            <span>학교</span>를 택해주세요.
          </p>
        </div>

        <div className="secondbox1">학교입력</div>
        <input
          className="schoolsearchinG"
          placeholder="예) 마산용마고등학교"
          onChange={onChange}
          onKeyPress={handleOnKeyPress} // Enter 입력 이벤트 함수

        ></input>
        <div>
          {
            search.map(search => {
              return <div className = 'search' key = {search.idSchool} onClick = {()=>gotoNext(search.idSchool)}>{search.nameSchool}</div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Schoolchoosing;
