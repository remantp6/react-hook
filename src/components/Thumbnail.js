import React from "react";
import Video from "./Video";

const Thumbnail = () => {
  let obj = {
    id: 1,
    title: "Node",
    channel: "Coder dost",
    views: "10k",
    time: "1 year ago",
  };
  return (
    <>
      <h4>Thumbnail</h4>
      <div className="app">
        <Video {...obj} subtitle="JS Tutorial" verified={true} />{" "}
        {/* spread operator is used for
          forwarding all props where we can use other props too*/}
        <Video
          id={2}
          title="React Js Tutorial"
          channel="Coder dost"
          views="8k"
          time="2 year ago"
          verified={false}
        />
        <Video
          id={3}
          title="Python Tutorial"
          channel="Coder dost"
          views="12k"
          time="1 year ago"
          verified={true}
        />
      </div>
    </>
  );
};

export default Thumbnail;
