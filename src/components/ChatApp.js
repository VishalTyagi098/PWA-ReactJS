import React from "react";
import "./ChatApp.css";
import ChatRecieve from "./ChatRecieve";
import ChatSend from "./ChatSend";

const ChatApp = ({ data }) => {
  console.log(data);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <div className="card" id="chat2">
              <div className="card-header d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0">Chat</h5>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-mdb-ripple-color="dark"
                >
                  Let's Chat App
                </button>
              </div>
              <div
                className="card-body"
                data-mdb-perfect-scrollbar="true"
                style={{
                  position: "relative",
                  height: "400px",
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

                {/*                      */}

                {data?.map((chat,i)=>{
                      return(
                        <div key={chat.id} className="">
                          <ChatRecieve />
                          <ChatSend />
                        </div>
                      )
                    })}

                {/*                      */}
                

              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                  alt="avatar 3"
                  style={{ width: "40px", height: "100%" }}
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
