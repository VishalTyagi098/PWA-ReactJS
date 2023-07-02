import React from "react";
import "./ChatApp.css";

const ChatRecieve = ({message,image,time}) => {
  return (
    <div className="d-flex flex-row justify-content-start rounded-circle">
      <img
        src={image}
        alt="avatar 1"
        style={{ width: "45px", height: "100%",borderRadius:"100%" }}
      />
      <div>
        <p
          className="small p-2 ms-3 mb-1 rounded-3"
          style={{ backgroundColor: "#f5f6f7" }}
        >
          {message}
        </p>

        <p className="small ms-3 mb-3 rounded-3 text-muted">{time.substring(11,16)}</p>
      </div>
    </div>
  );
};

export default ChatRecieve;
