import React from "react";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/userRedux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    window.location.reload();
  };

  return (
    <div className="flex p-5">
      <p>Welcome</p>
      <p
        onClick={handleLogout}
        className="cursor-pointer bg-red-400 ml-auto p-2 rounded-lg"
      >
        Logout
      </p>
    </div>
  );
};

export default Navbar;
