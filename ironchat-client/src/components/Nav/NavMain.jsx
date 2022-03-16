import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";
import FormServer from "../Forms/FormServer";

const NavMain = () => {
  const { isLoading, currentUser, isLoggedIn, removeUser } = useAuth();
  const [userId, setUserId] = useState("");

  useEffect(async () => {
    if (isLoading) return;
    try {
      setUserId(currentUser._id);
    } catch (error) {
      console.error(error);
    }
  }, [isLoading]);

  return (
    <nav className="NavMain">
      {isLoggedIn && (
        <>
          <button className="Logoutbtn" onClick={removeUser}>Log-Out</button>
        </>
      )}
    </nav>
  );
};

export default NavMain;
