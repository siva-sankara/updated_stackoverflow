import React from "react";
import "./Tagslist.css";
import { Link } from "react-router-dom";
const TagsList = ({ tag }) => {
  return (
    <div className="tag">
      <Link className="tag-con" target="_blank" to={tag.tagLink}>
        <h4>{tag.tagName}</h4>
        <p>{tag.tagDesc}</p>
      </Link>
    </div>
  );
};

export default TagsList;
