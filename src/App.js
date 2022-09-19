import React from "react";
import Router from './Routes'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Signup from "./components/Signup/Signup";
import TopBar from "./components/Topbar";
import LoginScreen from './Screens/LoginScreen'

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
