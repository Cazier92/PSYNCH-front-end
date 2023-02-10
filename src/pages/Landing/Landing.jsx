import "./Landing.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Landing = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user ? "/main-feed" : "/");
  }, [user, navigate]);

  return (
    <main>
      <section className="hero">
        <div className="hero-statement">
          <div className="statement-container">
            <p className="firstChild">
              THE SOCIAL NETWORK <br /> FOR <strong>EMOTIONS.</strong>
            </p>
            <p className="p-1">Experience the power real of connection. </p>
            <p className="p-1">
              Become part of the growing PSYNCH community and share your
              emotions with people from around the world!
            </p>
            <button className="sign-up-btn">
              <Link to={user ? "/main-feed" : "/signup"} style={linkStyle}>
                {user ? "MAIN FEED" : "SIGNUP"}
              </Link>
            </button>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>
      <section className="main-content">
        <div className="main-content-header">
          <p className="firstChild-main">How are you feeling?</p>
          <p className="subtitle-main">
            Choose an emotion below to find your stats.
          </p>
        </div>

        <div className="main-moods">
          <div>
            <i class="fa-solid fa-face-smile-beam fa-4x"></i>
          </div>
          <div>
            <i class="fa-solid fa-face-sad-tear fa-4x"></i>
          </div>
          <div>
            <i class="fa-solid fa-face-angry fa-4x"></i>
          </div>
          <div>
            <i class="fa-solid fa-face-frown-open fa-4x"></i>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
