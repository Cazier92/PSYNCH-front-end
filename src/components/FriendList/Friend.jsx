
import './Friend.css'



const Friend = ({friend}) => {
  return ( 
    <>
      
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
    
    </>
  );
}

export default Friend;