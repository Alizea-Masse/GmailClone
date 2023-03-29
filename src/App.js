import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";

function App() {
  return (
   
      
        <div className="app">
          <Header />
          <div className="app__body">
            {/* SideBar */}
            <Sidebar />
            <Routes>
            <Route path="mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
            </Routes>
            {/* MailList */}
          </div>
          <SendMail/>
        </div>
      
  
  );
}

export default App;
