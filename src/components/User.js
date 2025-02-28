import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user) ? user.pseudo : "pseudo"}</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>Age : {!isEmpty(user) ? user.age : 18} years old</p>
        <p>
          Like{!isEmpty(user) && user.likes > 1 ? "s" : ""} : {!isEmpty(user) ? user.likes : 0}
        </p>
      </div>
    </div>
  );
};

export default User;