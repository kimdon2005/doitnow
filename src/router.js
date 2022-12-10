/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Login from "./router/Login/Index";
import Room from "./router/Room/Room";
import Main from "./router/Main/Main";
import ForgotPassword from "./router/ForgotPassword/ForgotPassword";
import Signup from "./router/Signup/Signup";
import Schoolchoosing from "./router/Schoolchoosing/Index";
import Schoolsearching from "./router/Schoolsearching/Index";
import Joining from "./router/Joining/Index";
import Mypage from "./router/Mypage/Index";
import Findschool from "./router/Findschool/Index";
import Createclass from "./router/Createclass/Index";
import Schoolchoosingseoul from "./router/Schoolchoosingseoul/Schoolchoosingseoul";
import Detailchoosing from "./router/Detailchoosing/Index";
import Workmaking from "./router/Workmaking/Index";
import Viewclass from "./router/Viewclass/Index";
import Detailclass from "./router/Detailclass/Index";
import Notiyesoryes from "./router/Notiyesoryes/Index";
import "./components/Header/Header.css";
import Creatework from "./router/Creatework/Index";
import Writingwork from "./router/Writingwork/Index";
import Createclassinfo from "./router/Createclassinfo/Index";
import Uploadassignment from "./router/Uploadassignment/Index";
import Pagelink from "./router/Pagelink/Index";
import Viewassignment from "./router/Viewassignment/Index";
import Sharedclass from "./router/Sharedclass/Index";
import Createpost from "./router/Createpost/Index";
import Classpage from "./router/Classpage/Index";
import Comment from "./router/Comment/Index";
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
