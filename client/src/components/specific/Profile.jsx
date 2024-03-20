import React from "react";
import { HiAtSymbol } from "react-icons/hi";
import { MdFace } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";


const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <div className="avatar">
        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://th.bing.com/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
        </div>
      </div>
      <Profilecard heading={"Bio"} text={'This is my profile'}/>
      <Profilecard heading={"Username"} text={'vibhavjaiswal'} Icon={<HiAtSymbol className="text-white" />}/>
      <Profilecard heading={"Name"} text={'Vibhav Jaiswal'} Icon={<MdFace className="text-white" />}/>
      <Profilecard heading={"Joined"} text={'3 month ago'} Icon={<FaRegCalendarAlt className="text-white" />}/>
    </div>
  );
};

const Profilecard = ({text, Icon, heading}) => (
    <div className="flex gap-4 text-white items-center">
        {Icon && Icon}

        <div className="flex flex-col items-center">
           <div>{text}</div>
           <div className="text-gray-400">{heading}</div>
        </div>
    </div>
)

export default Profile;
