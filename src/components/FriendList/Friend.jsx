
import styles from './Friend.module.css'

const Friend = ({friend}) => {
  return ( 
    <>
    <div className='friend-card'>
      <h1>{friend.name}</h1>
      <p>is feeling {friend.currentStatus} today</p>
    </div>
    </>
  );
}

export default Friend;