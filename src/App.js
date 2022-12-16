import './App.css';
import AppRouter from "./router";
import { useEffect, useState } from "react";
import { auth } from './router/config/firebase_config';

function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  auth.onAuthStateChanged(user => {
    // user.currentUser 를 통해 현재 로그인 중인 사용자에 대한 정보를 이용할 수 있습니다.
    // ex) user.currentUser.email , user.currentUser.displayName .. etc
    if (user !== null) {
      setIsLoggedIn(isLoggedIn = true);
    }
  })

  return (
    <div className="App">
        <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
