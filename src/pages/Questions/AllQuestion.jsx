
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../AskQuestion/AskQuestion.css";
import { askQuestion } from "../../actions/Question";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";

const AllQuestion = ({slideIn,handleSlideIn}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  var user = useSelector((state) => state.currentUserReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: user?.result.name,
              userId :user?.result._id
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className="home-container-1">
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
      <div className="ask-question">
       
       <div className="ask-ques-container">
         <h1>Ask a public Question</h1>
         <form onSubmit={handleSubmit}>
           <div className="ask-form-container">
             <label htmlFor="ask-ques-title">
               <h4> Title</h4>
               <p>
                 Be spacific and imaginne you're asking a question to another
                 person.
               </p>
               <input
                 type="text"
                 onChange={(e) => {
                   setQuestionTitle(e.target.value);
                 }}
                 id="ask-ques-title"
                 placeholder="e.g is there an R function fro finding the index of an element in a vector?"
               />
             </label>
             <label htmlFor="ask-ques-body">
               <h4> What are the details of your problem?</h4>
               <p>
                 Introduce the problem and expand on what you put in the title.
                 Minimum 20 characters.
               </p>
               <textarea
                 name="text"
                 onChange={(e) => {
                   setQuestionBody(e.target.value);
                 }}
                 onKeyDown={handleKeyDown}
                 id="ask-ques-body"
                 cols="30"
                 rows="10"
               ></textarea>
             </label>
             <label htmlFor="ask-ques-tags">
               <h4> Tags</h4>
               <p>
                 Add up to 5 tags to describe what your question is about. Start
                 typing to see suggestions.
               </p>
               <input
                 type="text"
                 onChange={(e) => {
                   setQuestionTags(e.target.value.split(" "));
                 }}
                 id="ask-ques-tags"
                 placeholder="e.g(xml typescript  wrodpress )"
               />
             </label>
           </div>
           <input
             type="submit"
             value="Reivew your question"
             className="review-btn"
           ></input>
         </form>
       </div>
     </div>
      </div>
   </div>
  );
};

export default AllQuestion;
