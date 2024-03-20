import React, { Suspense, lazy, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notification"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const openSearchBar = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const navigateToGroup = () => navigate("/groups");
  const notification = () => {
    setIsNotification((prev) => !prev);
  };
  const logout = () => {
    console.log("logout");
  };
  return (
    <>
      <div className="flex justify-between p-4 bg-slate-600">
        <Link to='/'>
          <h1>Chat App</h1>
        </Link>
        <div className="flex gap-4">
          <FaSearch
            title="Search"
            className="text-white text-xl cursor-pointer hover:text-2xl"
            onClick={openSearchBar}
          />
          <IoMdAdd
            title="New Group"
            className="text-white text-xl cursor-pointer hover:text-2xl"
            onClick={openNewGroup}
          />
          <FaUserGroup
            title="Manage Groups"
            className="text-white text-xl cursor-pointer hover:text-2xl"
            onClick={navigateToGroup}
          />
          <IoMdNotifications
            title="Notifications"
            className="text-white text-xl cursor-pointer hover:text-2xl"
            onClick={notification}
          />
          <FiLogOut
            title="Logout"
            className="text-white text-xl cursor-pointer hover:text-2xl"
            onClick={logout}
          />
        </div>
      </div>
      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

export default Header;
