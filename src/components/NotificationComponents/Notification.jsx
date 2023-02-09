import { Link } from "react-router-dom";


const Notification = ({notification}) => {

  console.log(notification)
  return ( 
    <>
      <Link to={`/chat/${notification.link}`}>
        <h6>{notification.content}</h6>

      </Link>
    </>

  );
}

export default Notification;