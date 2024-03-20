import React, { memo } from "react";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        className={`flex items-center p-4 gap-4 relative bg-black text-white 
        ${
          sameSender ? "bg-black text-white" : "bg-white text-black"
        } hover:bg-gray-300`}
      >
        <AvatarCard avatar={avatar} />

        <div>
          <p>{name}</p>
          {newMessageAlert && <p>{newMessageAlert.count} New Message</p>}
        </div>

        {isOnline && (
          <div className="w-3 h-3 rounded-full bg-green-600 absolute top-3 right-4 transform(-50%)"></div>
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
