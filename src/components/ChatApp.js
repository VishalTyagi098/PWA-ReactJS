import React from "react";
import profile from './profile.png'
import "./ChatApp.css";
import ChatRecieve from "./ChatRecieve";
import ChatSend from "./ChatSend";

const ChatApp = ({ data }) => {

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 vh-100">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <div className="card" id="chat2">
              <div className="card-header d-flex justify-content-between align-items-center p-3">
                <div className="d-flex justify-content-around">
                  <img src={profile} alt="image" className="rounded-full w-10"/>
                  <div className="d-flex mx-3">
                    <p>From <strong>IGI Airport, T3</strong></p>
                    <br />
                    <p>To <strong>Sector 28</strong></p>
                  </div>
                </div>
              </div>
              <div
                className="card-body"
                data-mdb-perfect-scrollbar="true"
                style={{
                  position: "relative",
                  height: "500px",
                  overflowY: "auto",
                }}
              >
                <div className="divider d-flex align-items-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                  >
                    2023-06-29
                  </p>
                </div>

                {/*        WORKING              */}

                {data?.map((chat, i) => {
                  return (
                    <div key={chat.id}>
                      {chat.sender.self===true?
                      <ChatSend message={chat.message} image={chat.sender.image} time={chat.time}/>
                      :
                      <ChatRecieve message={chat.message} image={chat.sender.image} time={chat.time}/>
                      }
                    </div>
                  );
                })}

                {/*         WORKING             */}
              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <img
                  src="https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8"
                  alt="avatar 3"
                  style={{ width: "40px", height: "100%",borderRadius:"100%" }}
                />
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Type message"
                />
                <a className="ms-1 text-muted" href="#!">
                  <i className="fas fa-paperclip"></i>
                </a>
                <a className="ms-3 text-muted" href="#!">
                  <i className="fas fa-smile"></i>
                </a>
                <a className="ms-3" href="#!">
                  <i className="fas fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatApp;
