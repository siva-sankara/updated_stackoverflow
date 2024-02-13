import React, { useState } from "react";
import * as api from "../../api";
import './ChatBot.css'
const ChatBot = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState([]);

  const sendMessage = async () => {
    try {
      let question = { question: `"${input}" reply me in 30 words` };
      const response = await api.sendQuery(question);

      const pair = { question: input, answer: response.data.answer };
      setQuery((PrevData) => {
        return [...PrevData, pair];
      });
      setInput("")
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="chatbot">
      <div className="show-output">
        {query.length === 0 ? (
          <div>
            <p className="chat-answer"> I am your Personal Bot</p>
          </div>
        ) : (
          query.map((eachquery) => {
            return (
              <div className="chat-page">
                <p className="chat-question">{eachquery.question}</p>
                <p className="chat-answer">{eachquery.answer}</p>
              </div>
            );
          })
        )}
      </div>
      <div className="give-input">
        <input type="text" className="question-input" onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage }className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
