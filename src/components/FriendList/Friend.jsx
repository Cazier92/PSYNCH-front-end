
import './Friend.css'



const Friend = ({friend}) => {
  return ( 
    <>
    <div className='friend-card'>
      <img
        className="friend-avatar"
        src={friend.photo}
        alt="profile img"
      />
      <p className='friend-name'>{friend.name}</p>
      <p className='friend-status'>{friend.currentStatus}</p>
    </div>
    
    </>
  );
}

export default Friend;