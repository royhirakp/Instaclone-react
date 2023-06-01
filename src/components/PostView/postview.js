import React from "react";
import Hader from "../featurs/hader/hader";
import Post from "./post/post";
//require : this is needed to import api image in the ui
export default function Postview() {
  return (
    <>
      <h2>postview Page</h2>
      <Hader />
      <div
        className="postviewContainer"
        style={{
          margin: "0 0 0 400px",
          display: "flex",
          justifyContent: " space-between",
        }}
      >
        <div style={{ margin: "0 0px 0px 0px" }}>
          <Post />
        </div>
        <div></div>
      </div>
    </>
  );
}
