import { Link } from "react-router-dom";
import "./NavBar.css";

import { getAllProfiles } from "../../services/profileService";

import { useEffect, useState } from "react";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const NavBar = ({ user, handleLogout }) => {
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({})
 
  // useEffect (() => {
  //   const fetchProfiles = 
  // })

  // console.log(user.profile.photo)

  return (
    <nav>
      {user ? (
        <>
          <Link to="/main-feed" className="psynch-logo" style={linkStyle}>
              PSYNCH
          </Link>
          <div className="right-nav">
            <p>{user.name}</p>
            <img
              className="post-avatar"
              src={user.profile.photo}
              alt="profile img"
            />
            <button>
              <Link to="" style={linkStyle} onClick={handleLogout}>
                Log Out
              </Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="left-nav">
            <Link to="/" className="psynch-logo" style={linkStyle}>
              PSYNCH
            </Link>
          </div>
          <div className="right-nav">
            <button
              className={`menu-btn ${open ? "active" : "inactive"}`}
              onClick={() => setOpen(!open)}
            >
              Menu
            </button>
          </div>
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <Link to="/" style={linkStyle} onClick={() => setOpen(!open)}>
              <DropdownItem text={"Home"} />
            </Link>
            <Link to="/login" style={linkStyle} onClick={() => setOpen(!open)}>
              <DropdownItem text={"Log In"} />
            </Link>
            <Link to="/signup" style={linkStyle} onClick={() => setOpen(!open)}>
              <DropdownItem text={"Sign Up"} />
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

const DropdownItem = (props) => {
  return (
    <div className="dropdown-item">
      {props.icon}
      {props.text}
    </div>
  );
};

export default NavBar;
