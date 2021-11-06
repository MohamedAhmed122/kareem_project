import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutUser } from "../../redux/user/action";

export default function Home() {
  const { email, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logoutUser());
    history.goBack()
  };
  return (
    <div>
      <h1>Home Screen</h1>
      <div>Name: {name}</div>
      <div>Email : {email}</div>

      <button style={{ marginTop: 100 }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
