import React,{useState,useEffect} from "react";
import { getAllChats } from "./api/chats";

function App() {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const data=await getAllChats();
      setChatData(data?.chats);
    }
    fetchData();
  }, [])

  
  console.log(chatData);

  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
