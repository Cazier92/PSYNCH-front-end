
import './Friend.css'



const Friend = ({friend}) => {
  return ( 
    <>
    <div className='friend-card'>
      <div className='friend-avatar-container'>
        <img
          className="friend-avatar"
          src={friend.photo}
          alt="profile img"
        />
      </div>
      <div className='friend-info-container'>
        <div className='friend-title-container'>
          <p className='friend-name'>{friend.name}</p>
          <p><em>Friends</em></p>
        </div>
        <div className='friend-status-container'>
          <p className='friend-status'>{friend.currentStatus}</p>
        </div>

      </div>
    </div>
    
    </>
  );
}

export default Friend;