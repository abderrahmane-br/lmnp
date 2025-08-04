"use client";
import { useRef } from 'react';
import ChatUI from './ChatUI';


function Chat() {
    const chatID = useRef(crypto.randomUUID());
    console.log("here's chat component, chatID.current = ", chatID.current)
  return (
    <ChatUI chatID={chatID.current} />
  )
}
export default Chat