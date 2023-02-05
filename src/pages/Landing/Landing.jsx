import './Landing.css'
import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: "none",
  color: "black"
}

const Landing = ({ user }) => {
  return (
    <main >
      <section className='hero'>
        <div className='hero-statement'>
          <div className='statement-container'>
            <p>THE SOCIAL NETWORK <br/> FOR <strong>EMOTIONS.</strong></p>
            <p>Experience the power real of connection. </p>
            <p>Become part of the growing PSYNCH community and share your emotions with people from around the world!</p>
            <button className='sign-up-btn'>
              <Link to="/signup" style={ linkStyle }>
                SIGN UP
              </Link>
            </button>
          </div>
        </div>
        <div className='hero-image'>
          img
        </div>
      </section>
      <section className='main-content'>
        <p>HOW ARE YOU FEELING?</p>
        <div className='main-moods'>
          <div>
            Emotion
          </div>
          <div>
            Emotion
          </div>
          <div>
            Emotion
          </div>
          <div>
            Emotion
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
