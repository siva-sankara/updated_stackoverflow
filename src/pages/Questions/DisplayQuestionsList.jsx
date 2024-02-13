import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import RightSIdeBar from "../../components/RightSideBar/RightSIdeBar";
import QuestionDetails from "./QuestionDetails";

const DisplayQuestionsList = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSIdeBar />
      </div>
    </div>
  );
};

export default DisplayQuestionsList;
