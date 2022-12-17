import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Login from "./router/first/Login/Index";
import Room from "./router/Room/Room";
import Main from "./router/first/Landing/Main"; 
import ForgotPassword from "./router/first/ForgotPassword/ForgotPassword";
import Signup from "./router/first/Signup/Signup";
import Schoolchoosing from "./router/welcome/Schoolchoosing/Index";
import Schoolsearching from "./router/welcome/Schoolsearching/Index";
import Joining from "./router/join/Joining/Index";
import Mypage from "./router/my/Mypage/Index";
import Findschool from "./router/welcome/Findschool/Index";
import Createclass from "./router/create/Createclass/Index";
import Detailchoosing from "./router/welcome/Detailchoosing/Index";
import Workmaking from "./router/create/Workmaking/Index";
import Viewclass from "./router/class/Viewclass/Index";
import Detailclass from "./router/class/Detailclass/Index";
import Notiyesoryes from "./router/welcome/Notiyesoryes/Index";
import "./components/Header/Header.css";
import Creatework from "./router/create/Creatework/Index";
import Createclassinfo from "./router/create/Createclassinfo/Index";
import Uploadassignment from "./router/homework/Uploadassignment/Index";
import Createpost from "./router/homework/Createpost/Index";
import Comment from "./router/homework/Comment/Index";
import Classchoosing from "./router/welcome/Classchoosing/Index";
import Preparing from './components/preparing/preparing.js'
const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Routes>

          <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main islogin = {isLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/schoolsearching" element={<Schoolsearching />} />
            <Route path="/schoolchoosing" element={<Schoolchoosing />} />
            <Route path="/joining" element={<Joining />} />
            <Route path="/findschool" element={<Findschool />} />
            <Route path="/my" element={<Mypage />} />
            <Route path="/detailchoosing" element={<Detailchoosing />} />
            <Route path="/createclass" element={<Createclass />} />
            <Route path="/workmaking" element={<Workmaking />} />
            <Route path="/viewclass" element={<Viewclass />} />
            <Route path="/detailclass" element={<Detailclass />} />
            <Route path="/notiyesoryes" element={<Notiyesoryes />} />
            <Route path="/creatework" element={<Creatework />} />
            <Route path="/Uploadassignment" element={<Uploadassignment />} />
            <Route path="/createclassinfo" element={<Createclassinfo />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/classchoosing" element={<Classchoosing />} />
            <Route path="/preparing" element={<Preparing />} />
            
            {/* <Route path="/pagelink" element={<Pagelink />} /> */}
            <Route path="/createpost" element={<Createpost />} />
          </>
        
        <Route
          path="/room/:roomId"
          element={<Room isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
