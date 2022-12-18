import "./Index.css";
import { useState } from "react";
import Backbutton from "../../../components/backbutton/backbutton";
import axios from "axios";
import { findclassid } from "../../api/find";
import { useNavigate} from "react-router-dom";

const Workmaking = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title:'',
    content:'',
    grade: '1',
    class_: '1',
    year:'2022',
    month: '1',
    day:'1'
  });

  const gradeList = [1,2,3,4,5,6]
  const class_List = [1,2,3,4,5,6,7,8,9,10]
  const yearList = [2022,2023,2024,2025,2026]
  const monthList = [1,2,3,4,5,6,7,8,9,10,11,12]
  const dayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

  const {title, content,grade, class_, year, month, day} = inputs;


  const onChange = (e) => {
    const {name, value} = e.target;
    const nextInputs = {
        ...inputs,
        [name]: value, //e.target의 name과 value이다.
    };
    console.log(nextInputs)

   setInputs(nextInputs)
  }

  const makeWork = () =>{
    const time = timestamp(inputs.year,inputs.month,inputs.day)
    findclassid(2150, inputs.grade, inputs.class_).then((id)=>{
        console.log(id);
        const data = {
          "title": inputs.title,
          "content": inputs.content,
          "idClass" : id,
          "deadline": time
      };
    
        const config = {"Content-Type": 'application/json'};
    
        axios.post('/api/page/workPage', data, config).then((result)=>{
          navigate('/calendar')
          console.log(result)
          
        })
    })

  }

  function timestamp(year,month,day){
    var today = new Date(year+'/'+month+'/'+day);
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace('T', ' ').substring(0, 19);
}

  return (
    <div>
      <div className="header-ahffk">
        <Backbutton></Backbutton>
      </div>
      <div className="Workmaking">
        <div className="TItLE">과제 만들기</div>
        <div className="BbOX">
          <p className="sTy1">학년</p>
          <select className="ClassSelect" onChange={onChange} value={grade} name='grade'>
          {gradeList.map((item) => (
            <option value={item} key={item}>
              {item+'학년'}
            </option>
            )
            )
          }
          </select>
        </div>
        <div className="BbOX">
          <p className="sTy1">반(중복선택 가능)</p>
          <select className="GRoupSelect" onChange={onChange} value={class_} name='class_'>
          {class_List.map((item) => (
            <option value={item} key={item}>
              {item+'반'}
            </option>
            )
            )
          }
          </select>
        </div>
        <div className="BbOX">
          <p className="sTy1">제목</p>
          <input
            type="text"
            id="Title"
            value={title}
            name='title'
            onChange={onChange}
            placeholder="제목"
            className="TITLe"
          />
        </div>
        <div className="BbOX">
          <p className="sTy1">설명</p>
          <textarea
            type="text"
            id="Explaination"
            value={content}
            name='content'
            onChange={onChange}
            className="EXplaination"
            placeholder="설명을 적어주세요."
          />
        </div>
        <p className="sTy2">기한</p>
        <div className="StartDate">
          <select onChange={onChange} value={year} name='year'>
            {yearList.map((item) => (
            <option value={item} key={item}>
              {item+'년'}
            </option>
            )
            )
          }
          </select>
          <select onChange={onChange} value={month} name='month'>
            {monthList.map((item) => (
            <option value={item} key={item}>
              {item+'월'}
            </option>
            )
            )
          }
          </select>
          <select onChange={onChange} value={day} name='day'>
          {dayList.map((item) => (
            <option value={item} key={item}>
              {item+'일'}
            </option>
            )
            )
          }
          </select>
        </div>

        <div className="DeadlineDate"></div>
        <button className="submit" onClick={()=>{makeWork()}}>만들기</button>
      </div>
    </div>
  );
};

export default Workmaking;
