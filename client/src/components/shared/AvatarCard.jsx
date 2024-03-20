import React from "react";

const AvatarCard = ({ avatar = []}) => {
  return (
    <div className="avatar-group -space-x-8 rtl:space-x-reverse">
      {avatar.map((i, index) => (
        index < 4 ? 
        <div className="avatar">
          <div className="w-12">
            <img src={i} />
          </div>
        </div>
        : " "
      ))}
    </div>
  );
};

export default AvatarCard;
