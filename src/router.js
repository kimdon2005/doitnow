/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Login from "./router/first/Login/Index";
import Room from "./router/Room/Room";
import Main from "./router/Main/Main";
import ForgotPassword from "./router/ForgotPassword/ForgotPassword";
import Signup from "./router/first/Signup/Signup";
import Schoolchoosing from "./router/welcome/Schoolchoosing/Index";
import Schoolsearching from "./router/Schoolsearching/Index";
import Joining from "./router/Joining/Index";
import Mypage from "./router/Mypage/Index";
import Findschool from "./router/welcome/Findschool/Index";
import Createclass from "./router/Createclass/Index";
import Schoolchoosingseoul from "./router/Schoolchoosingseoul/Schoolchoosingseoul";
import Detailchoosing from "./router/welcome/Detailchoosing/Index";
import Workmaking from "./router/create/Workmaking/Index";
import Viewclass from "./router/class/Viewclass/Index";
import Detailclass from "./router/class/Detailclass/Index";
import Notiyesoryes from "./router/welcome/Notiyesoryes/Index";
import "./components/Header/Header.css";
import Creatework from "./router/Creatework/Index";
import Writingwork from "./router/Writingwork/Index";
import Createclassinfo from "./router/create/Createclassinfo/Index";
import Uploadassignment from "./router/homework/Uploadassignment/Index";
import Pagelink from "./router/Pagelink/Index";
import Viewassignment from "./router/Viewassignment/Index";
import Sharedclass from "./router/Sharedclass/Index";
import Createpost from "./router/homework/Createpost/Index";
import Classpage from "./router/Classpage/Index";
import Comment from "./router/homework/Comment/Index";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/schoolsearching" element={<Schoolsearching />} />
            <Route path="/schoolchoosing" element={<Schoolchoosing />} />
            <Route path="/joining" element={<Joining />} />
            <Route path="/findschool" element={<Findschool />} />
            <Route path="/my" element={<Mypage />} />
            <Route path="/detailchoosing" element={<Detailchoosing />} />
            <Route
              path="/schoolchoosingseoul"
              element={<Schoolchoosingseoul />}
            />
            <Route path="/createclass" element={<Createclass />} />
            <Route path="/workmaking" element={<Workmaking />} />
            <Route path="/viewclass" element={<Viewclass />} />
            <Route path="/detailclass" element={<Detailclass />} />
            <Route path="/notiyesoryes" element={<Notiyesoryes />} />
            <Route path="/creatework" element={<Creatework />} />
            <Route path="/writingwork" element={<Writingwork />} />
            <Route path="/Uploadassignment" element={<Uploadassignment />} />
            <Route path="/createclassinfo" element={<Createclassinfo />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/pagelink" element={<Pagelink />} />
            <Route path="/sharedclass" element={<Sharedclass />} />
            <Route path="/createpost" element={<Createpost />} />
            <Route path="/classpage" element={<Classpage />} />
          </>
        )}
        <Route
          path="/room/:roomId"
          element={<Room isLoggedIn={isLoggedIn} />}
        />
        <Route path="/viewassignment" element={<Viewassignment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
