
import './Friend.css'
import PendingRequests from '../FriendRequests/PendingRequests/PendingRequests';


const Friend = ({friend}) => {
  return ( 
    <>
    <div className='friend-card'>
      <div className='friend-avatar'>{friend.avatar}</div>
      <p>{friend.name}</p>
      <p className='friend-status'>{friend.currentStatus}</p>
    </div>
    
    </>
  );
}

export default Friend;