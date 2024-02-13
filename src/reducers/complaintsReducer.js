import {message}  from 'antd'
const complaintReducer = (state = {data : null}, action) => {
  switch (action.type) {
    case "FETCH_ALL_COMPLAINTS":
      return { ...state, data : action.payload };
    case "POST_COMPLAINT":
      message.success("Complaint posted succesfully")
      return { ...state };
    default:
      return state;
  }
};
export default complaintReducer;
