import "./Index.css";
import { useLocation , useNavigate} from "react-router";
import { useState } from "react";

import   Backbutton from "../../../components/backbutton/backbutton"
import {findclassid, createClass, makeSignUp} from "../../api/find";
const Detailchoosing = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    grade : '',
    class_ : '',
    num : ''
  });

  const onChange = (e) => {
    const {name, value} = e.target;
    const nextInputs = {
        ...inputs,
        [name]: value, //e.target의 name과 value이다.
    };
    console.log(nextInputs)

   setInputs(nextInputs)
  }

  const {grade, class_, num} = inputs;


  function gotoNext(){
    console.log(state)
    let grade = inputs.grade;
    let class_ = inputs.class_
    let idSchool = state.idSchool
    let number = inputs.num
    let password = state.password;
    let idClass
    idClass = findclassid(idSchool, grade, class_).then(
      (id)=>{
        idClass = id
        if (id === undefined){
          createClass(idSchool, grade, class_).then(
            (cid)=>{
              idClass = cid;
              let countNum = number.toString();
              let countClass = class_.toString();
              if(countNum.length === '1'){
                countNum = '0' + countNum;
              }
              if(countClass.length === '1'){
                countClass = '0' + countClass;
              }
              let num = grade + countClass+countNum;
              console.log(password)
              makeSignUp(state.email, password, idClass, num).then(
                ()=>{
                  console.log('회원가입 성공!');
                  navigate('/my');
                }
              )
            }
          )
        }else{
          let countNum = number
          let countClass = class_
          if(countNum.length === '1'){
            countNum = '0' + countNum;
          }
          if(countClass.length === '1'){
            countClass = '0' + countClass;
          }
          let num = grade + countClass+countNum;
          console.log(password)
          makeSignUp(state.email, password, idClass, num).then(
            ()=>{
              console.log('회원가입 성공!');
              navigate('/my');
            }
          )
        }
      } 
    )
  }
  return (
    <div>
      <Backbutton navigate = {navigate}></Backbutton>
      <div className="Detailchoosing">
        <div className="FiRsT">
          재학 중이신 <br />
          학교의 <span>학년 반 번호</span>를
          <br />
          선택해주세요
        </div>
        <div className="BOx1">
          <p className="FonT1">학년 입력</p>
          <input className="SeARcHingBAR" placeholder="예) 2" name="grade" value={grade}  onChange={onChange} ></input>
        </div>
        <div className="BOx2">
          <p className="FonT1">반 입력</p>
          <input className="SeARcHingBAR" placeholder="예) 6" name="class_" value={class_} onChange={onChange}></input>
        </div>
        <div className="BOx3">
          <p className="FonT1">번호 입력</p>
          <input className="SeARcHingBAR" placeholder="예) 18" name="num" value={num} onChange={onChange}></input>
        </div>
        <div>
          <button className="confire" onClick={gotoNext}>시작하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detailchoosing;
