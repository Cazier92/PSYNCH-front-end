import { Link } from "react-router-dom";
import "./NavBar.css";

import * as profileService from "../../services/profileService";

import { useEffect, useState } from "react";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const NavBar = ({ user, handleLogout }) => {
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.getAllProfiles();
      setUserProfile(data.filter((profile) => profile._id === user.profile)[0]);
    };
    fetchProfile();
  }, []);

  return (
    <nav>
      {user ? (
        <>
          <div className="left-nav">
            <img className="cloud-logo" src="./Logo/logo1.png" alt="" />
            <Link to="/main-feed"  style={linkStyle}>
              <p className="psynch-logo">PSYNCH</p>
            </Link>
          </div>
          <div className="right-nav">
            <p className="nav-user-name">{user.name}</p>
            <img
              className="nav-post-avatar"
              src={userProfile.photo}
              alt="profile img"
            />
            <button className="logout-button">
              <Link to="" style={linkStyle} onClick={handleLogout}>
                Log Out
              </Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="left-nav">
            <img className="cloud-logo" src="./Logo/logo1.png" alt="" />
            <Link to="/main-feed"  style={linkStyle}>
              <p className="psynch-logo">PSYNCH</p>
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
