import { Link } from "react-router-dom";
import "./NavBar.css";

import { useState } from "react";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const NavBar = ({ user, handleLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {user ? (
        <>
          <div className="left-nav">
            <p className="psynch-logo">PSYNCH</p>
          </div>
          <div className="right-nav">
            <button>
              <Link to="/main-feed" style={linkStyle}>
                Home
              </Link>
            </button>
            <button>
              <Link to="/posts/new" style={linkStyle}>
                Create Post
              </Link>
            </button>
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
            <Link to="/" style={linkStyle}>
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
