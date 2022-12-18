import "./Index.css";
import Calendar from "./Calendar";
import { useState , useEffect} from "react";
import Navigation from "../../../components/Navigation/Index";
import { Link } from "react-router-dom";
import { findClassInfo } from "../../api/find";
import getcookie from "../../config/cookie";
import axios from "axios";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState(); 
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const cookie = getcookie('idClass');
    findClassInfo(cookie).then((result)=>{
      console.log(result.data[0].idSchool)
      axios.get('/api/page/class?school_id=' + result.data[0].idSchool+ '&grade=' + result.data[0].grade+'&class='+result.data[0].class).then
      ((result)=>{
        return result.data

      }).then((data)=>{
        setTodoList(data)
        console.log(data)
        console.log(todoList)
      })
    })
   }, [])

  

  const ViewList = ({ info }) => {
    return (
      <div className="rectangle-11">
        <div className="left">
          <div></div>
        </div>
        <div className="center">
          <div>
            <p className="title">{info.WorkPageName}</p>
            <p className="date">
              {/* {info.from} ~ {info.to} */}
              {info.date.toString().split('T')[0] + "까지"}
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
        {todoList.map((info) => (
          <Link to ='/writingwork' style={{ textDecoration: 'none' }} state={{'idWorkPage' : info.idWorkPage}}>
              <ViewList info={info} key={info.idWorkPage}/>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Calendar />
      <div className="rectangle-9">
        <div className="info">
          <p className="title">오늘의 할 일</p>
          <p className="today-date">27일 수요일</p>
        </div>
        <div className="list">
          <PrintList />
        </div>
      </div>
      <Navigation work= 'seleced' />
    </div>
  );
};

export default Calender;
