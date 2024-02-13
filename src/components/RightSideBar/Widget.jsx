import React from "react";
import "./RightSideBar.css";
// import comment from "../../asserts/comment-alt-solid.svg";
// import pen from "../../asserts/pen-solid.svg";
// import blacklogo from "../../asserts/blacklogo.svg";
import axios from "axios";
import { useSelector } from "react-redux";

const Widget = () => {
  const handleComplaints =async()=> {
    const {data}= await axios.get('http://localhost:8080/complaints/AllComplaints')
    console.log(data);
  }
  
  const complainstList = useSelector((state)=> state.complaintReducer)
  console.log(complainstList ," complaints list ");
  return (
    // <div className="widget">
    //   <h4>The Overflow Blog</h4>
    //   <div className="right-sidebar-div-1">
    //     <div className="right-sidebar-div-2">
    //       <img src={pen} alt="pen" width="18" />
    //       <p>
    //         Observability is key to the future of software (and your DevOps
    //         career )
    //       </p>
    //     </div>
    //     <div className="right-sidebar-div-2">
    //       <img src={pen} alt="pen" width="18" />
    //       <p>Podcast 374 : How valuable is youe screen name?</p>
    //     </div>
    //   </div>
    //   <h4>Featured on Meta</h4>
    //   <div className="right-sidebar-div-1">
    //     <div className="right-sidebar-div-2">
    //       <img src={comment} alt="pen" width="18" />
    //       <p>Review queue workflow - Final release....</p>
    //     </div>
    //     <div className="right-sidebar-div-2">
    //       <img src={comment} alt="pen" width="18" />
    //       <p>
    //         Please welccome valued Associates :#958 - V2Blast #959 - SpencerG
    //       </p>
    //     </div>
    //     <div className="right-sidebar-div-2">
    //       <img src={comment} alt="pen" width="18" />
    //       <p>Outdated Answers : accepted answer is</p>
    //     </div>
    //   </div>

    //   <h4>Hot Meta Posts</h4>
    //   <div className="right-sidebar-div-1">
    //     <div className="right-sidebar-div-2">
    //       <p>38</p>
    //       <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
    //     </div>
    //     <div className="right-sidebar-div-2">
    //       <p>20</p>
    //       <p>Discussions experiment launching on NLP Collective</p>
    //     </div>
    //     <div className="right-sidebar-div-2">
    //       <p>14</p>
    //       <p>
    //         Call for volunteer reviewers for an updated search experience:
    //         OverflowAI Search
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <button onClick={handleComplaints}>hello</button>
      <h1> hello</h1>
    </div>
  );
};

export default Widget;
