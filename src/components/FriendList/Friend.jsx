
import './Friend.css'



const Friend = ({friend}) => {
  return ( 
    <>
    <div className='friend-card'>
      <img
        className="post-avatar"
        src={friend.photo}
        alt="profile img"
      />
      <p>{friend.name}</p>
      <p className='friend-status'>{friend.currentStatus}</p>
    </div>
    
    </>
  );
}

export default Friend;