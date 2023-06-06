import React from "react";

const Video = ({ title, subtitle, id, channel, views, time, verified }) => {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="img"></img>
        </div>
        <div className="title">
          {title} {subtitle}
        </div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} views<span>.</span>
          {time}
        </div>
      </div>
    </>
  );
};

export default Video;
