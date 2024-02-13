import React from "react";
import { Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestionsList from "./pages/Questions/DisplayQuestionsList";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/User/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import ChatBot from "./components/chatbot/ChatBot";
import PaymnetPage from "./components/payment/PaymnetPage";
import StartPage from "./pages/startPage/StartPage";
import AllQuestion from "./pages/Questions/AllQuestion";

const RoutesPage = ({ slideIn, handleSlideIn }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          exact
          element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route path="/Auth" exact element={<Auth />} />
        <Route path="/AskQuestion" exact element={<AskQuestion />} />
        <Route
          path="/Questions"
          exact
          element={
            <AllQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
        <Route path="/" exact element={<StartPage />} />
        <Route
          path="/Questions/:id"
          exact
          element={
            <DisplayQuestionsList
              slideIn={slideIn}
              handleSlideIn={handleSlideIn}
            />
          }
        />
        <Route
          path="/Tags"
          exact
          element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route
          path="/Users"
          exact
          element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route
          path="/Users/:id"
          exact
          element={
            <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
        <Route path="/chatBot" exact element={<ChatBot />} />
        <Route
          path="/Subscription"
          exact
          element={
            <PaymnetPage slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
      </Routes>
    </div>
  );
};

export default RoutesPage;
