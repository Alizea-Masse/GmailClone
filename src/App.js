import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice"; 
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login } from "./features/userSlice";


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <>
    {!user ? (<Login/>):(
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
          {sendMessageIsOpen && <SendMail />}
          
        </div>
    )}
    </>
   
      
        
  
  );
}

export default App;
