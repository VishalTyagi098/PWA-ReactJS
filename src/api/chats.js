import axios from "axios"

const URL=`https://qa.corider.in/assignment/chat?page=0`

export const getAllChats=async()=>{
  const{data}=await axios.get(URL);
  return data;
}