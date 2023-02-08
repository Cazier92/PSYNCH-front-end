import "./Landing.css";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Landing = ({ user }) => {
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
              <Link to="/signup" style={linkStyle}>
                SIGN UP
              </Link>
            </button>
          </div>
        </div>
        <div className="hero-image">
          {/* <div className="slides">
            
            <div className="scroller">
              <input type="radio" name='radio-btn' id='radio-1' />
              <input type="radio" name='radio-btn' id='radio-2'/>
              <input type="radio" name='radio-btn' id='radio-3'/>
              <input type="radio" name='radio-btn' id='radio-4'/>
            </div>
            
            
            <div class='timed-scroll'>
              <div class='auto-btn1'></div>
              <div class='auto-btn2'></div>
              <div class='auto-btn3'></div>
              <div class='auto-btn4'></div>
            </div>

            <div class='manual-btn-container'>
              <label htmlFor='radio-1' className='manual-btn'></label>
              <label htmlFor='radio-2' className='manual-btn'></label>
              <label htmlFor='radio-3' className='manual-btn'></label>
              <label htmlFor='radio-4' className='manual-btn'></label>
            </div>


          </div> */}
          

        </div>
      </section>
      <section className="main-content">
        <p className="firstChild-main">How are you feeling?</p>
        <p className="subtitle-main">Choose an emotion below to find your stats.</p>
        <div className="main-moods">
          <div>Happy</div>
          <div>Sad</div>
          <div>Angry</div>
          <div>Fearful</div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
