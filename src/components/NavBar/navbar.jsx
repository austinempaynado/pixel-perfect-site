import { NavLink } from "react-router-dom";
import "./navbar.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="nav-container">
      <div id="nav-links">
        <li className="nav-list-item">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-list-item">
          {user && (
            <NavLink className="nav-link" onClick={logout} to="/">
              Sign out
            </NavLink>
          )}
        </li>
      </div>
    </div>
  );
};
