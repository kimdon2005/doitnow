import './App.css';
import AppRouter from "./router";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
        <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
