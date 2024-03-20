import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
       e.preventDefault();
       console.log("Delete Chat", _id, groupChat);
    }

    return (
      <>
        <Title />
        <Header />
        <div className="flex h-dvh ">
          <div className="sm:flex-1 hidden sm:block">
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </div>
          <div className="flex-grow">
            <WrappedComponent {...props} />
          </div>
          <div className="md:flex-1 hidden md:block bg-gray-800">Third</div>
        </div>
      </>
    );
  };
};

export default AppLayout;
