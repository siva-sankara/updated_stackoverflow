import {message} from 'antd'
const questionsReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "POST_QUESTION":
      message.success("Question posted sucessfull")
      return { ...state };
    case "POST_ANSWER":
      message.success("Answer was posted sucessfull")
      return { ...state };
    case "FETCH_ALL_QUESTIONS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default questionsReducer;
