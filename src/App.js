import React,{useState,useEffect} from "react";
import { getAllChats } from "./api/chats";
import ChatApp from "./components/ChatApp";

function App() {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const data=await getAllChats();
      setChatData(data?.chats);
    }
    fetchData();
  }, [])

  
  return (
    <div className="App">
      {/* {chatData?.map((chat,i)=>{
        return(
          <div key={chat.id} className="">
            <div style={{margin:"10px"}}>{chat.message}</div>
          </div>
        )
      })} */}
      <ChatApp data={chatData}/>
    </div>
  );
}

export default App;
