import "./Index.css";
import Titleheader from "../../../components/Titleheader";
import { Link, useLocation } from "react-router-dom"; // 추가된 부분
import { useEffect, useState } from "react";
import axios from "axios";
import Backbutton from "../../../components/backbutton/backbutton";

const Writingwork = () => {
    const location = useLocation(); // 추가된 부분
    const [workpage, setWorkpage] = useState([]);
    const [cardList , setCardList] = useState([]);
    console.log(location.state.idWorkPage)
    useEffect(() => {
        axios.get('/api/page/workPage?idWork_page='+ location.state.idWorkPage).then((result)=>{
            return result.data
        }).then((data)=>{
            console.log(data)
            setWorkpage(data);
        })
        axios.patch('/api/page/workPage?idWork_page='+location.state.idWorkPage).then((result)=>{
            console.log(result.data)
            return result.data
        }).then((data)=>{
            setCardList(data)
        })
       }, [])
       
    
//     const cardList = [
//     {
//       profileName: "장현빈",
//       schoolInfo: "마산용마고등학교 2학년 6반",
//       profileImgUrl:
//         "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg?fit=696,464",
//       mainImgUrl:
//         "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1Sma/image/4hprmQFiXDrg561-apxcxryjdtg.JPG",
//       title: "나는 누구인가",
//       mainText:
//         "나는 누구일까? 나 자신을 아는 것이란 무엇인 것인가 나는 공산주의를 지지한다 무엇을 간다는 것인지 모르겠다 어떻게 이렇게 나를 구원하시고 너와 나의 삶을 사는 것이란 무엇일까 독립변인 종속변인 통제변인이다 종속변인 장현빈 0.5",
//       date: "6일전"
//     },
//     {
//       profileName: "박상현",
//       schoolInfo: "마산용마고등학교 2학년 4반",
//       profileImgUrl:
//         "https://pbs.twimg.com/media/FZ4Ad-FakAAnwqa?format=jpg&name=360x360",
//       mainImgUrl:
//         "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/GUi7Tl3TQkKZmkR3sRj4si5fMeI.jpg",
//       title: "수달은 코가 크다",
//       mainText: "수달은 귀엽다 반박시 니말 다틀림",
//       date: "100일전"
//     }
//   ];

  const data = {
    title: "환상적인 제목",
    content: "돔황챠",
    date: "마음껏"
  };

  const Viewcard = ({ info }) => {
    return (
      <div className="card">
        <div className="profile-info-class">
          <div>
            <img className="profile" src={info.filePath ?info.filePath :'img/basic.jpg' } />
          </div>
          <div className="profile-user">
            <div>
              <p className="Name">{info.nickname}</p>
              <p className="class">{info.schoolInfo}</p>
            </div>
          </div>
        </div>
        <div className="img-area">
          <img src={info.filePath ? info.filePath : 'img/basicPost.png'} />
        </div>
        <div className="text-area">
          <p className="title">{info.title}</p>
          <p className="main-text">{info.content}</p>
          <p className="date">{info.date.split('T')[0]}</p>
        </div>
      </div>
    );
  };

  const Printcard = () => {
    return (
      <div>
        {cardList.map((info) => (
          <Viewcard info={info} />
        ))}
      </div>
    );
  };

  return (
    <div className="writingwork">
        <Backbutton></Backbutton>
        {/* <Titleheader title="" /> */}
        <div className="workinfo">
        <div className="worktitle">{workpage[0]? workpage[0].WorkPageName : '로딩중'}</div>
        <div className="workexplanation">{workpage[0] ? workpage[0].content : '로딩중'}</div>
        <p className="date">기한 : {workpage[0]? workpage[0].deadline.split('T')[0]+"까지" : '로딩중'}</p>
        </div>
        <Printcard />
        <div className="bottombar">
        <div>
          <span class="material-symbols-outlined">
            ios_share
          </span>
        </div>
        <div>
          <span class="material-symbols-outlined">
            notifications
          </span>
        </div>
        <div>
        <Link to='/uploadassignment'state={{'idWorkPage': workpage[0] ? workpage[0].idWorkPage : '' }}>
        <span class="material-symbols-outlined">
            Add_Circle
          </span>
        </Link>

        </div>
        <div>    
             <span class="material-symbols-outlined">
            Bookmark
          </span></div>
        <div>     
        <span class="material-symbols-outlined">
            More_Horiz
          </span></div>
      </div>
    </div>
  );
};

export default Writingwork;