import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";
import "./Questions.css";
import upvote from "../../asserts/sort-up.svg";
import downvote from "../../asserts/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import {message} from 'antd'
import {
  deleteQuestion,
  postAnswer,
  voteQuestion,
} from "../../actions/Question";

const QuestionDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  const questionList = useSelector((state) => state.questionsReducer);
  const user = useSelector((state) => state.currentUserReducer);
  {
    console.log(questionList.data);
  }
  const [answer, setAnswer] = useState("");
  // const url = "http://localhost:3000";
  const url = "https://stack-overflow-backend-gwva.onrender.com";

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (user === null) {
      message.error("Login or SignUp to answer a question")
      navigate("/Auth");
    } else {
      if (answer === "") {
        message.error("Enter an answer before submitting")
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: user.result.name,
            userId: user?.result?._id,
          })
        );
        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("copy url :" + url + location.pathnam);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  const handleUpVote = () => {
    if (user === null) {
      message.error("Login or Signup to up vote a question")
      navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote", user?.result._id));
      message.success('Upvoted Sucessfully')
    }
  };

  const handleDownVote = () => {
    if (user === null) {
      message.error("Login or Signup to up vote a question")
      navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote", user?.result._id));
      message.success("Downvoted sucessfully")
    }
  };


  return (
    <div className="question-details-page">
      {questionList.data === null ? (
        <h1>Loading.....</h1>
      ) : (
        <div>
          {questionList.data
            .filter((que) => {
              return que._id === id;
            })
            .map((question) => {
              return (
                <div key={question._id}>
                  {console.log(question)}
                  <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="question-votes">
                        <img
                          src={upvote}
                          alt="votes-icon"
                          width="18"
                          className="votes-icon"
                          onClick={handleUpVote}
                        />
                        <p>
                          {question.upVote.length - question.downVote.length}
                        </p>
                        <img
                          src={downvote}
                          alt="votes-icon"
                          width="18"
                          className="votes-icon"
                          onClick={handleDownVote}
                        />
                      </div>
                      <div style={{ width: "100%",paddingBottom:"20px" }}>
                        <p className="question-body">{question.questionBody}</p>
                        <div className="question-details-tags">
                          {question.questionTags.map((tag) => {
                            return <p key={tag}><Link to='/Tags'>{tag}</Link></p>;
                          })}
                        </div>
                        <div className="question-action-user">
                          <div>
                            <button type="button" onClick={handleShare}>
                              Share
                            </button>
                            {user?.result._id === question?.userId && (
                              <button type="button" onClick={handleDelete}>
                                Delete
                              </button>
                            )}
                          </div>
                          <div className="action-user-content">
                            <p>asked {moment(question.askedOn).fromNow()}</p>
                            <Link
                              className="user-link"
                              to={`/Users/${question.userId}`}
                              style={{ color: "#0086d8" }}
                            >
                              <Avatar
                                backgroundColor="orange"
                                px="10px"
                                py="10px"
                              >
                                {question.userPosted.charAt(0).toUpperCase()}
                              </Avatar>
                              <div>{question.userPosted}</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} Answers</h3>
                      <DisplayAnswer
                        key={question._id}
                        question={question}
                        handleShare={handleShare}
                      />
                    </section>
                  )}
                  <section className="post-ans-container">
                    <h2>Your Answer</h2>
                    <form
                      onSubmit={(e) => {
                        handlePostAnswer(e, question.answer.length);
                      }}
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={(e) => setAnswer(e.target.value)}
                      ></textarea>
                      <input
                        type="submit"
                        className="post-ans-btn"
                        value="Post Your Answer"
                      />
                    </form>
                    <p className="question-tag-p">
                      Browse other Question tagged
                      {question.questionTags.map((tag) => {
                        return (
                          <Link to="/Tags" key={tag} className="ans-tags">
                            {tag}
                          </Link>
                        );
                      })}{" "}
                      or
                      <Link
                        to="/AskQuestion"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        {" "}
                        ask your question
                      </Link>
                    </p>
                  </section>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default QuestionDetails;
