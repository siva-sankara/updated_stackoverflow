import React, { useState } from "react";
import "./HomeMainBar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionsList from "./QuestionsList";
import { useSelector } from "react-redux";
import ChatBot from "../chatbot/ChatBot";
import bot from "../../asserts/chatbot.jpg";
import * as api from '../../api'
const HomeMainBar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const [ChatBotIn, setChatBotIn] = useState(false);
  const questionList = useSelector((state) => state.questionsReducer);

  const DeleteChatInMongoose=async()=>{
    try {
      await api.deleteQuery()
    } catch (error) {
      console.log(error.message);
    }
  }
  if(!ChatBotIn){
    DeleteChatInMongoose();
  }

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  const handleChatBot=()=>{
    if(localStorage.getItem("Profile")){
      setChatBotIn(!ChatBotIn)
    }else{
      navigate('/Auth')
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask A Question
        </button>
      </div>
      <div className="mainbar-question-container">
        {questionList.data === null ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            <p>{questionList.data.length} Questions</p>
            <QuestionsList questionList={questionList.data} />
          </>
        )}
      </div>
      {ChatBotIn && (
        <div className="chatBot-up">
          <div className="chat-container">
            <ChatBot />
          </div>
        </div>
      )}
      {/* {localStorage.getItem("Profile") && ( */}
        <div className="chatbot-icon">
          <img
            src={bot}
            className="bot-icon"
            onClick={ handleChatBot}
          />
        </div>
      {/* )} */}
    </div>
  );
};

export default HomeMainBar;
