import React from "react";

const ChatSend = ({message,image,time}) => {
  return (
    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
      <div>
        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
          {message}
        </p>
        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">{time.substring(11,16)}</p>
      </div>
      <img
        src={image}
        alt="avatar 1"
        style={{ width: "45px", height: "100%",borderRadius:"100%" }}
      />
    </div>
    
  );
};

export default ChatSend;
