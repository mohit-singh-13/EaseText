import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [showLogin, setLogin] = useState(false);
  const [showSignup, setSignup] = useState(false);
  // Manage the login state here
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<Home onAppear={() => setLogin(true)} onVisible={() => setSignup(true)} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      {showLogin && <Login onDisappear={() => setLogin(false)} signupVisible={() => setSignup(true)} setIsLoggedIn={setIsLoggedIn} />}
      {showSignup && <Signup onNotVisible={() => setSignup(false)} loginVisible={() => setLogin(true)} />}
      <ToastContainer />
    </div>
  )
}

export default App
