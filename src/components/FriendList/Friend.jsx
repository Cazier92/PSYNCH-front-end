import { Link } from 'react-router-dom';
import './Friend.css'



const Friend = ({friend}) => {

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return ( 
    <>
      <Link to={`/profile/${friend._id}`} style={linkStyle}>
      <div className='friend-card'>
        <div className='friend-container1'>
          <img
            className="friend-avatar"
            src={friend.photo}
            alt="profile img"
            />
        </div>
        
        <div className='friend-container2'>
          <div className='friend-title-container'>
            <p className='friend-name'>{friend.name}</p>
            <p className='friend-sub'><em>Friends</em></p>
          </div>
          <div className='friend-container3'>
            <p className='friend-status'>{friend.currentStatus}</p>
          </div>

        </div>
      </div>
      </Link>
    
    </>
  );
}

export default Friend;