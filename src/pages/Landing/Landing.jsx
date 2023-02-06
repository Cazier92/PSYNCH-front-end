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
            <p>Experience the power real of connection. </p>
            <p>
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
          <div className="slides">
            <div className="scroller">
              <input type="radio" name='radio-btn' id='radio-1' />
              <input type="radio" name='radio-btn' id='radio-2'/>
              <input type="radio" name='radio-btn' id='radio-3'/>
              <input type="radio" name='radio-btn' id='radio-4'/>
            </div>

            <div className="slide-1">
              <img id="l-img" src="./landingImages/img1.jpg" alt="1" /> 
            </div>
            {/* <div className="slide">
              <img id="l-img" src='./landingImages/img2.jpg' alt='2'></img> 
            </div>
            <div className="slide">
              <img id="l-img" src='./landingImages/img3.jpg' alt='3'></img> 
            </div>
            <div className="slide">
              <img id="l-img" src='./landingImages/img4.jpg' alt='4'></img> 
            </div> */}
            
            
            <div class='timed-scroll'>
              <div class='auto-btn1'></div>
              <div class='auto-btn2'></div>
              <div class='auto-btn3'></div>
              <div class='auto-btn4'></div>
            </div>

            <div class='manual-scroll'>
              <label htmlFor='radio-1' className='manual-btn'></label>
              <label htmlFor='radio-2' className='manual-btn'></label>
              <label htmlFor='radio-3' className='manual-btn'></label>
              <label htmlFor='radio-4' className='manual-btn'></label>
            </div>


          </div>
          

        </div>
      </section>
      <section className="main-content">
        <p className="firstChild">HOW ARE YOU FEELING?</p>
        <div className="main-moods">
          <div>Emotion</div>
          <div>Emotion</div>
          <div>Emotion</div>
          <div>Emotion</div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
