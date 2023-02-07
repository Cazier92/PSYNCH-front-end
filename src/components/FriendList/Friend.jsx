
import './Friend.css'

const Friend = ({friend}) => {
  return ( 
    <>
    <div className='friend-card'>
      <h3>{friend.name}</h3>
      <p>is feeling {friend.currentStatus} today</p>
    </div>
    </>
  );
}

export default Friend;